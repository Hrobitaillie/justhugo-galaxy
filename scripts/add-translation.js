#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';
import clipboardy from 'clipboardy';

// Configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const LANG_FILE_PATH = path.join(__dirname, '../lang/fr.json');

// Générer un ID unique de 8 caractères (alphanumeric)
function generateUniqueId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 8; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

// Vérifier si l'ID existe déjà
function isIdUnique(id, translations) {
    return !translations.hasOwnProperty(id);
}

// Copier dans le presse-papier (cross-platform)
async function copyToClipboard(text) {
    await clipboardy.write(text);
}

// Interface readline pour input utilisateur
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    try {
        console.log('\n🌐 Ajout d\'une nouvelle traduction\n');

        // Lire le fichier de traduction existant
        let translations = {};
        if (fs.existsSync(LANG_FILE_PATH)) {
            const fileContent = fs.readFileSync(LANG_FILE_PATH, 'utf8');
            translations = JSON.parse(fileContent);
        }

        // Demander la valeur de la traduction
        const translation = await askQuestion('📝 Entrez la traduction en français : ');

        if (!translation || translation.trim() === '') {
            console.error('❌ Erreur : La traduction ne peut pas être vide');
            rl.close();
            process.exit(1);
        }

        // Générer un ID unique
        let uniqueId;
        do {
            uniqueId = generateUniqueId();
        } while (!isIdUnique(uniqueId, translations));

        // Ajouter la nouvelle traduction
        translations[uniqueId] = translation.trim();

        // Trier les clés par ordre alphabétique
        const sortedTranslations = Object.keys(translations)
            .sort()
            .reduce((acc, key) => {
                acc[key] = translations[key];
                return acc;
            }, {});

        // Écrire dans le fichier
        fs.writeFileSync(
            LANG_FILE_PATH,
            JSON.stringify(sortedTranslations, null, 4) + '\n',
            'utf8'
        );

        console.log('\n✅ Traduction ajoutée avec succès !');
        console.log(`📋 Clé : ${uniqueId}`);
        console.log(`💬 Traduction : ${translation.trim()}`);
        
        // Copier la clé dans le presse-papier
        try {
            await copyToClipboard(uniqueId);
            console.log('\n📋 La clé a été copiée dans le presse-papier !');
        } catch (error) {
            console.log('\n⚠️  Impossible de copier dans le presse-papier automatiquement.');
            console.log(`   Copiez manuellement : ${uniqueId}`);
        }

        console.log('\n💡 Utilisation dans Vue :');
        console.log(`   {{ $t('${uniqueId}') }}`);
        console.log('');

        rl.close();
    } catch (error) {
        console.error('❌ Erreur :', error.message);
        rl.close();
        process.exit(1);
    }
}

main();

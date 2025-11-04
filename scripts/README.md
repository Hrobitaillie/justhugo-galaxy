# Scripts VS Code

## Ajouter une traduction

### Utilisation

1. **Via la palette de commandes** (Recommandé) :
   - Appuyez sur `Ctrl+Shift+P` (ou `Cmd+Shift+P` sur Mac)
   - Tapez "Tasks: Run Task"
   - Sélectionnez "Ajouter une traduction"

2. **Via le menu Terminal** :
   - Menu → Terminal → Run Task...
   - Sélectionnez "Ajouter une traduction"

3. **Via le terminal directement** :
   ```bash
   node scripts/add-translation.js
   ```

### Processus

1. Le script vous demandera d'entrer la traduction en français
2. Il génère automatiquement une clé unique de 8 caractères
3. Il ajoute la traduction dans `lang/fr.json`
4. Il trie les clés par ordre alphabétique
5. Il copie la clé dans votre presse-papier
6. Il affiche un exemple d'utilisation dans Vue

### Exemple

```
📝 Entrez la traduction en français : Bienvenue sur notre plateforme

✅ Traduction ajoutée avec succès !
📋 Clé : X7k9mPqR
💬 Traduction : Bienvenue sur notre plateforme

📋 La clé a été copiée dans le presse-papier !

💡 Utilisation dans Vue :
   {{ $t('X7k9mPqR') }}
```

### Dans votre composant Vue

```vue
<template>
  <h1>{{ $t('X7k9mPqR') }}</h1>
</template>
```

## Structure du fichier de traduction

Le fichier `lang/fr.json` sera automatiquement maintenu avec :
- Les clés triées par ordre alphabétique
- Un formatage JSON propre (4 espaces d'indentation)
- Pas de doublons de clés

<template>
    <div class="min-h-screen bg-slate-50">
        <!-- Loading State -->
        <div v-if="isLoading" class="flex items-center justify-center min-h-screen">
            <div class="text-center">
                <div class="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4"></div>
                <p class="text-slate-600">Chargement de la démo...</p>
            </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="flex items-center justify-center min-h-screen px-6">
            <div class="text-center max-w-md">
                <div class="text-6xl mb-4">😵</div>
                <h1 class="text-2xl font-bold text-slate-900 mb-2">Démo introuvable</h1>
                <p class="text-slate-600 mb-6">{{ error }}</p>
                <router-link 
                    to="/"
                    class="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                    Retour à l'accueil
                </router-link>
            </div>
        </div>

        <!-- Demo Content -->
        <div v-else>
            <!-- Demo Header -->
            <div class="bg-white border-b border-slate-200 sticky top-16 z-40">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-4">
                            <div class="text-2xl">{{ demo.icon }}</div>
                            <div>
                                <h1 class="text-xl font-bold text-slate-900">{{ demo.title }}</h1>
                                <p class="text-sm text-slate-600">{{ demo.description }}</p>
                            </div>
                        </div>
                        
                        <div class="flex items-center space-x-4">
                            <!-- Difficulty Badge -->
                            <span :class="getDifficultyClass(demo.difficulty)" class="px-3 py-1 rounded-full text-xs font-medium">
                                {{ demo.difficulty }}
                            </span>
                            
                            <!-- Tags -->
                            <div class="hidden sm:flex space-x-2">
                                <span 
                                    v-for="tag in demo.tags.slice(0, 2)"
                                    :key="tag"
                                    class="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                                >
                                    {{ tag }}
                                </span>
                                <span v-if="demo.tags.length > 2" class="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                                    +{{ demo.tags.length - 2 }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Demo Component -->
            <div class="demo-container">
                <component :is="demoComponent" v-if="demoComponent" />
            </div>

            <!-- Demo Info Footer -->
            <div class="bg-white border-t border-slate-200 mt-auto">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                        <div>
                            <h3 class="font-semibold text-slate-900 mb-1">À propos de cette démo</h3>
                            <p class="text-sm text-slate-600">{{ demo.description }}</p>
                            <div class="flex flex-wrap gap-2 mt-2">
                                <span 
                                    v-for="tag in demo.tags"
                                    :key="tag"
                                    class="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                                >
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                        
                        <div class="text-right">
                            <p class="text-xs text-slate-500">Créé le {{ formatDate(demo.created) }}</p>
                            <p class="text-xs text-slate-500">Mis à jour le {{ formatDate(demo.updated) }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useDemos } from '@/composables/useDemos.js';

const route = useRoute();
const router = useRouter();
const { getDemoById } = useDemos();

const isLoading = ref(true);
const error = ref(null);
const demo = ref(null);
const demoComponent = ref(null);

const props = defineProps({
    id: {
        type: String,
        required: true
    }
});

onMounted(async () => {
    try {
        // Récupérer les infos de la démo
        demo.value = getDemoById(props.id);
        
        if (!demo.value) {
            error.value = `La démo "${props.id}" n'existe pas.`;
            return;
        }
        
        if (demo.value.status !== 'active') {
            error.value = `La démo "${demo.value.title}" n'est pas encore disponible.`;
            return;
        }
        
        // Charger le composant de la démo
        try {
            const module = await demo.value.component();
            demoComponent.value = module.default;
        } catch (componentError) {
            console.error('Erreur lors du chargement du composant:', componentError);
            error.value = `Impossible de charger la démo "${demo.value.title}".`;
        }
        
    } catch (err) {
        console.error('Erreur:', err);
        error.value = 'Une erreur est survenue lors du chargement de la démo.';
    } finally {
        isLoading.value = false;
    }
});

const getDifficultyClass = (difficulty) => {
    switch (difficulty) {
        case 'Facile': return 'bg-green-100 text-green-800';
        case 'Moyen': return 'bg-yellow-100 text-yellow-800';
        case 'Avancé': return 'bg-red-100 text-red-800';
        default: return 'bg-slate-100 text-slate-800';
    }
};

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};
</script>

<style scoped>
.demo-container {
    min-height: calc(100vh - 200px);
}
</style>
<template>
    <div class="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
        <!-- Hero Section -->
        <section class="relative overflow-hidden py-20 px-6">
            <div class="max-w-7xl mx-auto text-center">
                <div class="inline-block mb-4 px-4 py-2 bg-indigo-100 rounded-full">
                    <span class="text-indigo-600 font-medium text-sm">✨ Portfolio Dev</span>
                </div>
                <h1 class="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                    Mes Créations
                    <span class="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Frontend
                    </span>
                </h1>
                <p class="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                    Une collection de composants et démos interactives construits avec Vue.js et Tailwind CSS v4
                </p>
                
                <!-- Stats -->
                <div class="flex flex-wrap justify-center gap-8 mt-12">
                    <div class="text-center group">
                        <div class="text-3xl font-bold text-indigo-600 group-hover:scale-110 transition-transform">
                            {{ stats.active }}
                        </div>
                        <div class="text-sm text-slate-600">Démos Actives</div>
                    </div>
                    <div class="text-center group">
                        <div class="text-3xl font-bold text-purple-600 group-hover:scale-110 transition-transform">
                            Vue 3
                        </div>
                        <div class="text-sm text-slate-600">Framework</div>
                    </div>
                    <div class="text-center group">
                        <div class="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform">
                            Tailwind v4
                        </div>
                        <div class="text-sm text-slate-600">CSS</div>
                    </div>
                    <div class="text-center group">
                        <div class="text-3xl font-bold text-emerald-600 group-hover:scale-110 transition-transform">
                            {{ stats.comingSoon }}
                        </div>
                        <div class="text-sm text-slate-600">À venir</div>
                    </div>
                </div>

                <!-- Quick Actions -->
                <div class="flex flex-wrap justify-center gap-4 mt-8">
                    <button 
                        @click="scrollToDemos"
                        class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors inline-flex items-center gap-2"
                    >
                        Voir les démos
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m0 0l7-7"/>
                        </svg>
                    </button>
                    <button 
                        @click="openRandomDemo"
                        class="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-lg border border-slate-200 transition-colors inline-flex items-center gap-2"
                    >
                        🎲 Démo aléatoire
                    </button>
                </div>
            </div>
        </section>

        <!-- Search & Filters -->
        <section class="py-8 px-6 bg-white/50 backdrop-blur-sm sticky top-16 z-40" ref="demosSection">
            <div class="max-w-7xl mx-auto">
                <div class="flex flex-col lg:flex-row gap-4 items-center justify-between">
                    <!-- Search -->
                    <div class="relative flex-1 max-w-md">
                        <input 
                            v-model="searchQuery"
                            type="text" 
                            placeholder="Rechercher une démo..."
                            class="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                        <svg class="absolute left-3 top-2.5 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </div>

                    <!-- Difficulty Filter -->
                    <div class="flex gap-2">
                        <button 
                            v-for="difficulty in difficulties"
                            :key="difficulty"
                            @click="selectedDifficulty = selectedDifficulty === difficulty ? null : difficulty"
                            :class="[
                                'px-3 py-1 rounded-full text-sm font-medium transition-colors',
                                selectedDifficulty === difficulty
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                            ]"
                        >
                            {{ difficulty }}
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Demos Grid -->
        <section class="py-16 px-6">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div
                        v-for="demo in filteredDemos"
                        :key="demo.id"
                        class="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-indigo-300"
                    >
                        <!-- Demo Image/Preview -->
                        <div class="aspect-video bg-linear-to-br from-indigo-100 to-purple-100 relative overflow-hidden">
                            <div class="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                                {{ demo.icon }}
                            </div>
                            
                            <!-- Status Badge -->
                            <div class="absolute top-3 right-3">
                                <span :class="getStatusClass(demo.status)" class="px-3 py-1 rounded-full text-xs font-medium">
                                    {{ getStatusText(demo.status) }}
                                </span>
                            </div>
                            
                            <!-- Difficulty Badge -->
                            <div class="absolute top-3 left-3">
                                <span :class="getDifficultyClass(demo.difficulty)" class="px-2 py-1 rounded text-xs font-medium">
                                    {{ demo.difficulty }}
                                </span>
                            </div>
                        </div>

                        <!-- Demo Content -->
                        <div class="p-6">
                            <div class="flex items-start justify-between mb-3">
                                <h3 class="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                    {{ demo.title }}
                                </h3>
                            </div>
                            
                            <p class="text-slate-600 text-sm mb-4 line-clamp-2">
                                {{ demo.description }}
                            </p>

                            <!-- Tags -->
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span
                                    v-for="tag in demo.tags"
                                    :key="tag"
                                    class="px-2 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium hover:bg-indigo-100 hover:text-indigo-700 transition-colors cursor-pointer"
                                    @click="searchByTag(tag)"
                                >
                                    {{ tag }}
                                </span>
                            </div>

                            <!-- Action Button -->
                            <button
                                @click="openDemo(demo)"
                                :disabled="demo.status !== 'active'"
                                class="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                <span>{{ demo.status === 'active' ? 'Voir la démo' : 'Prochainement' }}</span>
                                <svg v-if="demo.status === 'active'" class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- No Results -->
                    <div v-if="filteredDemos.length === 0" class="col-span-full text-center py-12">
                        <div class="text-6xl opacity-20 mb-4">🔍</div>
                        <h3 class="text-xl font-semibold text-slate-700 mb-2">Aucune démo trouvée</h3>
                        <p class="text-slate-500">Essayez de modifier vos critères de recherche</p>
                        <button 
                            @click="clearFilters"
                            class="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            Réinitialiser les filtres
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useDemos } from '@/composables/useDemos.js';

const router = useRouter();
const { demos, activeDemos, stats, searchDemos, getRandomDemo } = useDemos();

// Refs
const searchQuery = ref('');
const selectedDifficulty = ref(null);
const demosSection = ref(null);

// Data
const difficulties = ['Facile', 'Moyen', 'Avancé'];

// Computed
const filteredDemos = computed(() => {
    let filtered = demos.value;
    
    // Search filter
    if (searchQuery.value) {
        filtered = searchDemos(searchQuery.value);
    }
    
    // Difficulty filter
    if (selectedDifficulty.value) {
        filtered = filtered.filter(demo => demo.difficulty === selectedDifficulty.value);
    }
    
    return filtered;
});

// Methods
const scrollToDemos = () => {
    demosSection.value?.scrollIntoView({ behavior: 'smooth' });
};

const openRandomDemo = () => {
    const randomDemo = getRandomDemo();
    if (randomDemo) {
        openDemo(randomDemo);
    }
};

const openDemo = (demo) => {
    if (demo.status === 'active') {
        router.push(`/demo/${demo.id}`);
    }
};

const searchByTag = (tag) => {
    searchQuery.value = tag;
};

const clearFilters = () => {
    searchQuery.value = '';
    selectedDifficulty.value = null;
};

const getStatusClass = (status) => {
    switch (status) {
        case 'active': return 'bg-emerald-100 text-emerald-700';
        case 'coming-soon': return 'bg-amber-100 text-amber-700';
        default: return 'bg-slate-100 text-slate-700';
    }
};

const getStatusText = (status) => {
    switch (status) {
        case 'active': return 'Disponible';
        case 'coming-soon': return 'Bientôt';
        default: return 'Inconnu';
    }
};

const getDifficultyClass = (difficulty) => {
    switch (difficulty) {
        case 'Facile': return 'bg-green-200 text-green-800';
        case 'Moyen': return 'bg-yellow-200 text-yellow-800';
        case 'Avancé': return 'bg-red-200 text-red-800';
        default: return 'bg-slate-200 text-slate-800';
    }
};
</script>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
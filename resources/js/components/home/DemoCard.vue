<template>
    <div
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
                    @click="$emit('searchByTag', tag)"
                >
                    {{ tag }}
                </span>
            </div>

            <!-- Action Button -->
            <button
                @click="$emit('openDemo', demo)"
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
</template>

<script setup>
defineProps({
    demo: {
        type: Object,
        required: true
    }
});

defineEmits(['openDemo', 'searchByTag']);

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
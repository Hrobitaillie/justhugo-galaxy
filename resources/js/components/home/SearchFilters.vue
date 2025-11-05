<template>
    <section class="py-8 px-6 bg-white/50 backdrop-blur-sm sticky top-16 z-40" ref="filtersSection">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <!-- Search -->
                <div class="relative flex-1 max-w-md">
                    <input 
                        :value="searchQuery"
                        @input="$emit('update:searchQuery', $event.target.value)"
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
                        @click="handleDifficultyClick(difficulty)"
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
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    searchQuery: {
        type: String,
        default: ''
    },
    selectedDifficulty: {
        type: String,
        default: null
    },
    difficulties: {
        type: Array,
        default: () => ['Facile', 'Moyen', 'Avancé']
    }
});

const emit = defineEmits(['update:searchQuery', 'update:selectedDifficulty']);

const handleDifficultyClick = (difficulty) => {
    const newValue = props.selectedDifficulty === difficulty ? null : difficulty;
    emit('update:selectedDifficulty', newValue);
};

// Expose the section ref for parent to use
const filtersSection = ref(null);
defineExpose({
    filtersSection
});
</script>
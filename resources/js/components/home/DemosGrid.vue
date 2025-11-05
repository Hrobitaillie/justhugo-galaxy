<template>
    <section class="py-16 px-6">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <DemoCard
                    v-for="demo in demos"
                    :key="demo.id"
                    :demo="demo"
                    @open-demo="$emit('openDemo', $event)"
                    @search-by-tag="$emit('searchByTag', $event)"
                />

                <!-- No Results -->
                <div v-if="demos.length === 0" class="col-span-full text-center py-12">
                    <div class="text-6xl opacity-20 mb-4">🔍</div>
                    <h3 class="text-xl font-semibold text-slate-700 mb-2">Aucune démo trouvée</h3>
                    <p class="text-slate-500">Essayez de modifier vos critères de recherche</p>
                    <button 
                        @click="$emit('clearFilters')"
                        class="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                        Réinitialiser les filtres
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import DemoCard from './DemoCard.vue';

defineProps({
    demos: {
        type: Array,
        required: true
    }
});

defineEmits(['openDemo', 'searchByTag', 'clearFilters']);
</script>
<template>
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
                    @click="$emit('scrollToDemos')"
                    class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors inline-flex items-center gap-2"
                >
                    Voir les démos
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m0 0l7-7"/>
                    </svg>
                </button>
                <button 
                    @click="$emit('openRandomDemo')"
                    class="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-lg border border-slate-200 transition-colors inline-flex items-center gap-2"
                >
                    🎲 Démo aléatoire
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    stats: {
        type: Object,
        required: true
    }
});

defineEmits(['scrollToDemos', 'openRandomDemo']);
</script>
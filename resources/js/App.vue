<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isDemo = computed(() => {
    return route.path.startsWith('/demo/');
});
</script>

<template>
    <div class="min-h-screen bg-slate-50">
        <!-- Navigation -->
        <nav class="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <!-- Logo -->
                    <router-link to="/" class="flex items-center space-x-2 group">
                        <div class="w-8 h-8 bg-linear-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span class="text-white font-bold text-sm">G</span>
                        </div>
                        <span class="font-bold text-xl text-slate-900 group-hover:text-indigo-600 transition-colors">
                            Galaxy Dev
                        </span>
                    </router-link>

                    <!-- Navigation Links -->
                    <div class="hidden md:flex items-center space-x-8">
                        <router-link 
                            to="/" 
                            :class="[
                                'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                                route.path === '/' 
                                    ? 'bg-indigo-100 text-indigo-700' 
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                            ]"
                        >
                            Accueil
                        </router-link>
                        <router-link 
                            to="/demos" 
                            :class="[
                                'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                                route.path.startsWith('/demo') 
                                    ? 'bg-indigo-100 text-indigo-700' 
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                            ]"
                        >
                            Démos
                        </router-link>
                        <a 
                            href="https://github.com/Hrobitaillie" 
                            target="_blank"
                            class="text-slate-600 hover:text-slate-900 transition-colors"
                            rel="noopener noreferrer"
                        >
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>

                    <!-- Mobile menu button -->
                    <div class="md:hidden">
                        <button 
                            type="button" 
                            class="text-slate-600 hover:text-slate-900 hover:bg-slate-100 p-2 rounded-md"
                        >
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Demo Navigation (si on est dans une démo) -->
        <div v-if="isDemo" class="bg-white border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center py-3">
                    <router-link 
                        to="/" 
                        class="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                        </svg>
                        Retour aux démos
                    </router-link>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <main>
            <router-view />
        </main>

        <!-- Footer -->
        <footer class="bg-white border-t border-slate-200 mt-auto">
            <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <p class="text-slate-600 text-sm">
                        Construit avec ❤️ avec Vue.js, Laravel & Tailwind CSS v4
                    </p>
                    <p class="text-slate-500 text-xs mt-2">
                        © 2025 Galaxy Dev - Portfolio de développement
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
/* Navigation active state */
.router-link-active {
    background-color: rgb(238 242 255);
    color: rgb(67 56 202);
}
</style>
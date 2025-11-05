<template>
    <div class="min-h-screen bg-slate-50 py-8 px-6">
        <div class="max-w-4xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-slate-900 mb-4">
                    ⚡ Loading Spinners
                </h1>
                <p class="text-lg text-slate-600">
                    Différents types de spinners et animations de chargement
                </p>
            </div>

            <!-- Demo Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Classic Spinner -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center">
                    <h3 class="font-semibold text-slate-900 mb-6">Classic Spinner</h3>
                    <div class="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                </div>

                <!-- Dots Loading -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center">
                    <h3 class="font-semibold text-slate-900 mb-6">Dots Loading</h3>
                    <div class="flex space-x-1">
                        <div class="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                        <div class="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                        <div class="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                    </div>
                </div>

                <!-- Pulse Ring -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center">
                    <h3 class="font-semibold text-slate-900 mb-6">Pulse Ring</h3>
                    <div class="relative">
                        <div class="w-8 h-8 border-4 border-emerald-200 rounded-full"></div>
                        <div class="absolute top-0 left-0 w-8 h-8 border-4 border-emerald-600 rounded-full animate-ping"></div>
                    </div>
                </div>

                <!-- Rotating Square -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center">
                    <h3 class="font-semibold text-slate-900 mb-6">Rotating Square</h3>
                    <div class="w-8 h-8 bg-red-600 animate-spin" style="animation-duration: 1s;"></div>
                </div>

                <!-- Wave Bars -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center">
                    <h3 class="font-semibold text-slate-900 mb-6">Wave Bars</h3>
                    <div class="flex items-end space-x-1">
                        <div class="w-1 h-4 bg-blue-600 animate-pulse"></div>
                        <div class="w-1 h-6 bg-blue-600 animate-pulse" style="animation-delay: 0.1s"></div>
                        <div class="w-1 h-8 bg-blue-600 animate-pulse" style="animation-delay: 0.2s"></div>
                        <div class="w-1 h-6 bg-blue-600 animate-pulse" style="animation-delay: 0.3s"></div>
                        <div class="w-1 h-4 bg-blue-600 animate-pulse" style="animation-delay: 0.4s"></div>
                    </div>
                </div>

                <!-- Custom CSS Spinner -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center">
                    <h3 class="font-semibold text-slate-900 mb-6">Custom Spinner</h3>
                    <div class="custom-spinner"></div>
                </div>

                <!-- Orbit Loading -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center">
                    <h3 class="font-semibold text-slate-900 mb-6">Orbit Loading</h3>
                    <div class="relative w-8 h-8">
                        <div class="absolute w-2 h-2 bg-amber-600 rounded-full orbit-animation"></div>
                        <div class="absolute w-1 h-1 bg-amber-400 rounded-full orbit-animation-2"></div>
                    </div>
                </div>

                <!-- Progress Circle -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center">
                    <h3 class="font-semibold text-slate-900 mb-6">Progress Circle</h3>
                    <div class="relative w-8 h-8">
                        <svg class="transform -rotate-90 w-8 h-8" viewBox="0 0 32 32">
                            <circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="4" fill="none" class="text-slate-200" />
                            <circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="4" fill="none" 
                                class="text-teal-600 progress-circle" 
                                stroke-dasharray="87.96" 
                                stroke-dashoffset="22" 
                                stroke-linecap="round" />
                        </svg>
                    </div>
                </div>

                <!-- Skeleton Loading -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center">
                    <h3 class="font-semibold text-slate-900 mb-6">Skeleton Loading</h3>
                    <div class="w-full max-w-32">
                        <div class="h-3 bg-slate-200 rounded animate-pulse mb-2"></div>
                        <div class="h-3 bg-slate-200 rounded animate-pulse w-3/4 mb-2"></div>
                        <div class="h-3 bg-slate-200 rounded animate-pulse w-1/2"></div>
                    </div>
                </div>
            </div>

            <!-- Interactive Demo Section -->
            <div class="mt-16 bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                <h2 class="text-2xl font-bold text-slate-900 mb-6 text-center">Test Interactif</h2>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <button 
                        @click="startLoading"
                        :disabled="isLoading"
                        class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-400 text-white font-medium rounded-lg transition-colors"
                    >
                        {{ isLoading ? 'Chargement...' : 'Démarrer le chargement' }}
                    </button>
                    
                    <button 
                        @click="stopLoading"
                        :disabled="!isLoading"
                        class="px-6 py-3 bg-red-600 hover:bg-red-700 disabled:bg-slate-400 text-white font-medium rounded-lg transition-colors"
                    >
                        Arrêter
                    </button>
                </div>

                <div v-if="isLoading" class="flex justify-center items-center space-x-8">
                    <div class="w-6 h-6 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                    <div class="flex space-x-1">
                        <div class="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                        <div class="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                        <div class="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                    </div>
                    <div class="w-6 h-6 bg-emerald-600 animate-spin" style="animation-duration: 1s;"></div>
                </div>

                <div v-else class="text-center text-slate-500">
                    Cliquez sur "Démarrer le chargement" pour voir les animations
                </div>
            </div>

            <!-- Code Examples -->
            <div class="mt-16">
                <h2 class="text-2xl font-bold text-slate-900 mb-8 text-center">Exemples de Code</h2>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="bg-slate-900 rounded-xl p-6 text-sm">
                        <h3 class="text-white font-semibold mb-4">Spinner Classique</h3>
                        <pre class="text-slate-300 overflow-x-auto"><code>&lt;div class="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"&gt;&lt;/div&gt;</code></pre>
                    </div>

                    <div class="bg-slate-900 rounded-xl p-6 text-sm">
                        <h3 class="text-white font-semibold mb-4">Dots Loading</h3>
                        <pre class="text-slate-300 overflow-x-auto"><code>&lt;div class="flex space-x-1"&gt;
  &lt;div class="w-2 h-2 bg-purple-600 rounded-full animate-bounce"&gt;&lt;/div&gt;
  &lt;div class="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style="animation-delay: 0.1s"&gt;&lt;/div&gt;
  &lt;div class="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style="animation-delay: 0.2s"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isLoading = ref(false);

const startLoading = () => {
    isLoading.value = true;
};

const stopLoading = () => {
    isLoading.value = false;
};
</script>

<style scoped>
.custom-spinner {
    width: 32px;
    height: 32px;
    border: 3px solid #f3f4f6;
    border-top: 3px solid #8b5cf6;
    border-right: 3px solid #8b5cf6;
    border-radius: 50%;
    animation: custom-spin 1s linear infinite;
}

@keyframes custom-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.orbit-animation {
    animation: orbit 2s linear infinite;
    top: 0;
    left: 50%;
    transform-origin: 0 16px;
}

.orbit-animation-2 {
    animation: orbit 1s linear infinite reverse;
    top: 50%;
    left: 0;
    transform-origin: 16px 0;
}

@keyframes orbit {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.progress-circle {
    animation: progress 2s linear infinite;
}

@keyframes progress {
    0% { stroke-dashoffset: 87.96; }
    50% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: 87.96; }
}
</style>
<template>
    <div class="min-h-screen bg-slate-50 py-8 px-6">
        <div class="max-w-4xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-slate-900 mb-4">
                    🎨 Animations de Boutons
                </h1>
                <p class="text-lg text-slate-600">
                    Collection d'animations interactives pour boutons avec CSS et Vue 3
                </p>
            </div>

            <!-- Demo Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Hover Scale -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 class="font-semibold text-slate-900 mb-4">Hover Scale</h3>
                    <button class="w-full py-3 px-6 bg-indigo-600 text-white font-medium rounded-lg hover:scale-105 transition-transform duration-200">
                        Survolez-moi
                    </button>
                </div>

                <!-- Hover Glow -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 class="font-semibold text-slate-900 mb-4">Hover Glow</h3>
                    <button class="w-full py-3 px-6 bg-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300">
                        Effet Glow
                    </button>
                </div>

                <!-- Ripple Effect -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 class="font-semibold text-slate-900 mb-4">Ripple Effect</h3>
                    <button 
                        @click="createRipple"
                        class="relative overflow-hidden w-full py-3 px-6 bg-emerald-600 text-white font-medium rounded-lg transition-colors duration-200"
                        ref="rippleButton"
                    >
                        Cliquez-moi
                    </button>
                </div>

                <!-- Slide Background -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 class="font-semibold text-slate-900 mb-4">Slide Background</h3>
                    <button class="relative w-full py-3 px-6 border-2 border-blue-600 text-blue-600 font-medium rounded-lg overflow-hidden group">
                        <span class="relative z-10 group-hover:text-white transition-colors duration-300">
                            Hover me
                        </span>
                        <div class="absolute inset-0 bg-blue-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    </button>
                </div>

                <!-- Pulse Animation -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 class="font-semibold text-slate-900 mb-4">Pulse Animation</h3>
                    <button 
                        @click="togglePulse"
                        :class="[
                            'w-full py-3 px-6 bg-red-600 text-white font-medium rounded-lg transition-all duration-200',
                            isPulsing ? 'animate-pulse' : 'hover:bg-red-700'
                        ]"
                    >
                        {{ isPulsing ? 'En cours...' : 'Démarrer Pulse' }}
                    </button>
                </div>

                <!-- Bounce Effect -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 class="font-semibold text-slate-900 mb-4">Bounce Effect</h3>
                    <button 
                        @click="triggerBounce"
                        :class="[
                            'w-full py-3 px-6 bg-amber-600 text-white font-medium rounded-lg transition-all duration-200',
                            isBouncing ? 'animate-bounce' : 'hover:bg-amber-700'
                        ]"
                    >
                        Bounce!
                    </button>
                </div>

                <!-- Gradient Shift -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 class="font-semibold text-slate-900 mb-4">Gradient Shift</h3>
                    <button class="w-full py-3 px-6 bg-linear-to-r from-pink-500 to-violet-500 hover:from-violet-500 hover:to-pink-500 text-white font-medium rounded-lg transition-all duration-500">
                        Gradient Magic
                    </button>
                </div>

                <!-- Rotating Icon -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 class="font-semibold text-slate-900 mb-4">Rotating Icon</h3>
                    <button class="w-full py-3 px-6 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 group">
                        <span>Refresh</span>
                        <svg class="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                        </svg>
                    </button>
                </div>

                <!-- Shadow Lift -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 class="font-semibold text-slate-900 mb-4">Shadow Lift</h3>
                    <button class="w-full py-3 px-6 bg-slate-800 hover:bg-slate-900 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                        Lift Off
                    </button>
                </div>
            </div>

            <!-- Code Examples Section -->
            <div class="mt-16">
                <h2 class="text-2xl font-bold text-slate-900 mb-8 text-center">Exemples de Code</h2>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- Hover Scale Code -->
                    <div class="bg-slate-900 rounded-xl p-6 text-sm">
                        <h3 class="text-white font-semibold mb-4">Hover Scale Effect</h3>
                        <pre class="text-slate-300 overflow-x-auto"><code>&lt;button class="hover:scale-105 transition-transform duration-200"&gt;
  Survolez-moi
&lt;/button&gt;</code></pre>
                    </div>

                    <!-- Ripple Effect Code -->
                    <div class="bg-slate-900 rounded-xl p-6 text-sm">
                        <h3 class="text-white font-semibold mb-4">Ripple Effect</h3>
                        <pre class="text-slate-300 overflow-x-auto"><code>// Vue 3 Setup
const createRipple = (event) => {
  // Implémentation du ripple
}</code></pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isPulsing = ref(false);
const isBouncing = ref(false);
const rippleButton = ref(null);

const togglePulse = () => {
    isPulsing.value = true;
    setTimeout(() => {
        isPulsing.value = false;
    }, 2000);
};

const triggerBounce = () => {
    isBouncing.value = true;
    setTimeout(() => {
        isBouncing.value = false;
    }, 1000);
};

const createRipple = (event) => {
    const button = rippleButton.value;
    if (!button) return;
    
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    ripple.style.width = ripple.style.height = diameter + 'px';
    ripple.style.left = (event.clientX - rect.left - radius) + 'px';
    ripple.style.top = (event.clientY - rect.top - radius) + 'px';
    ripple.classList.add('ripple');
    
    const existingRipple = button.querySelector('.ripple');
    if (existingRipple) {
        existingRipple.remove();
    }
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
};
</script>

<style scoped>
.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
</style>
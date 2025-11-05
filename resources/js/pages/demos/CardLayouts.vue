<template>
    <div class="min-h-screen bg-slate-50 py-8 px-6">
        <div class="max-w-6xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-slate-900 mb-4">
                    📱 Layouts de Cartes
                </h1>
                <p class="text-lg text-slate-600">
                    Différents designs de cartes responsives avec Tailwind CSS
                </p>
            </div>

            <!-- Simple Cards Grid -->
            <section class="mb-16">
                <h2 class="text-2xl font-bold text-slate-900 mb-8">Cartes Simples</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                        <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                            <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-2">Performance</h3>
                        <p class="text-slate-600 text-sm">Optimisé pour une vitesse maximale et une expérience utilisateur fluide.</p>
                    </div>

                    <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                        <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                            <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-2">Sécurisé</h3>
                        <p class="text-slate-600 text-sm">Protection avancée avec chiffrement de bout en bout et authentification.</p>
                    </div>

                    <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                        <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-2">Facile d'usage</h3>
                        <p class="text-slate-600 text-sm">Interface intuitive conçue pour une prise en main immédiate.</p>
                    </div>
                </div>
            </section>

            <!-- Product Cards -->
            <section class="mb-16">
                <h2 class="text-2xl font-bold text-slate-900 mb-8">Cartes Produit</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group">
                        <div class="aspect-square bg-linear-to-br from-indigo-100 to-purple-100 relative overflow-hidden">
                            <div class="absolute inset-0 flex items-center justify-center text-4xl opacity-30">📱</div>
                            <div class="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-slate-700">
                                Nouveau
                            </div>
                        </div>
                        <div class="p-4">
                            <h3 class="font-semibold text-slate-900 mb-1">Smartphone Pro</h3>
                            <p class="text-slate-600 text-sm mb-3">Design premium avec écran OLED</p>
                            <div class="flex items-center justify-between">
                                <span class="text-xl font-bold text-slate-900">899€</span>
                                <button class="px-3 py-1 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors">
                                    Ajouter
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group">
                        <div class="aspect-square bg-linear-to-br from-emerald-100 to-blue-100 relative overflow-hidden">
                            <div class="absolute inset-0 flex items-center justify-center text-4xl opacity-30">💻</div>
                            <div class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-medium">
                                -20%
                            </div>
                        </div>
                        <div class="p-4">
                            <h3 class="font-semibold text-slate-900 mb-1">Laptop Gaming</h3>
                            <p class="text-slate-600 text-sm mb-3">RTX 4080, 32GB RAM, SSD 1TB</p>
                            <div class="flex items-center justify-between">
                                <div>
                                    <span class="text-lg line-through text-slate-400">1499€</span>
                                    <span class="text-xl font-bold text-slate-900 ml-2">1199€</span>
                                </div>
                                <button class="px-3 py-1 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors">
                                    Ajouter
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group">
                        <div class="aspect-square bg-linear-to-br from-amber-100 to-orange-100 relative overflow-hidden">
                            <div class="absolute inset-0 flex items-center justify-center text-4xl opacity-30">🎧</div>
                        </div>
                        <div class="p-4">
                            <h3 class="font-semibold text-slate-900 mb-1">Casque Audio</h3>
                            <p class="text-slate-600 text-sm mb-3">Réduction de bruit active</p>
                            <div class="flex items-center justify-between">
                                <span class="text-xl font-bold text-slate-900">299€</span>
                                <button class="px-3 py-1 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors">
                                    Ajouter
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group">
                        <div class="aspect-square bg-linear-to-br from-pink-100 to-red-100 relative overflow-hidden">
                            <div class="absolute inset-0 flex items-center justify-center text-4xl opacity-30">⌚</div>
                            <div class="absolute top-2 right-2 bg-emerald-500 text-white px-2 py-1 rounded-lg text-xs font-medium">
                                Stock limité
                            </div>
                        </div>
                        <div class="p-4">
                            <h3 class="font-semibold text-slate-900 mb-1">Montre Connectée</h3>
                            <p class="text-slate-600 text-sm mb-3">GPS, Santé, Waterproof</p>
                            <div class="flex items-center justify-between">
                                <span class="text-xl font-bold text-slate-900">399€</span>
                                <button class="px-3 py-1 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors">
                                    Ajouter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Profile Cards -->
            <section class="mb-16">
                <h2 class="text-2xl font-bold text-slate-900 mb-8">Cartes Profil</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center hover:shadow-lg transition-shadow">
                        <div class="w-20 h-20 bg-linear-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                            JD
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-1">Jean Dupont</h3>
                        <p class="text-indigo-600 text-sm mb-2">Développeur Frontend</p>
                        <p class="text-slate-600 text-sm mb-4">Spécialisé en Vue.js et React, passionné par l'UX/UI design.</p>
                        <div class="flex justify-center space-x-2">
                            <button class="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors">
                                Contacter
                            </button>
                            <button class="px-4 py-2 border border-slate-300 text-slate-700 text-sm rounded-lg hover:bg-slate-50 transition-colors">
                                Profil
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center hover:shadow-lg transition-shadow">
                        <div class="w-20 h-20 bg-linear-to-br from-emerald-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                            SM
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-1">Sophie Martin</h3>
                        <p class="text-emerald-600 text-sm mb-2">UX/UI Designer</p>
                        <p class="text-slate-600 text-sm mb-4">Création d'expériences utilisateur intuitives et designs modernes.</p>
                        <div class="flex justify-center space-x-2">
                            <button class="px-4 py-2 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700 transition-colors">
                                Contacter
                            </button>
                            <button class="px-4 py-2 border border-slate-300 text-slate-700 text-sm rounded-lg hover:bg-slate-50 transition-colors">
                                Profil
                            </button>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center hover:shadow-lg transition-shadow">
                        <div class="w-20 h-20 bg-linear-to-br from-amber-500 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                            PL
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-1">Pierre Leblanc</h3>
                        <p class="text-amber-600 text-sm mb-2">Chef de Projet</p>
                        <p class="text-slate-600 text-sm mb-4">Gestion d'équipes et coordination de projets web complexes.</p>
                        <div class="flex justify-center space-x-2">
                            <button class="px-4 py-2 bg-amber-600 text-white text-sm rounded-lg hover:bg-amber-700 transition-colors">
                                Contacter
                            </button>
                            <button class="px-4 py-2 border border-slate-300 text-slate-700 text-sm rounded-lg hover:bg-slate-50 transition-colors">
                                Profil
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Statistics Cards -->
            <section class="mb-16">
                <h2 class="text-2xl font-bold text-slate-900 mb-8">Cartes Statistiques</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                        <div class="flex items-center justify-between mb-4">
                            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                </svg>
                            </div>
                            <span class="text-emerald-600 text-sm font-medium">+12%</span>
                        </div>
                        <h3 class="text-2xl font-bold text-slate-900 mb-1">2,847</h3>
                        <p class="text-slate-600 text-sm">Utilisateurs actifs</p>
                    </div>

                    <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                        <div class="flex items-center justify-between mb-4">
                            <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                                </svg>
                            </div>
                            <span class="text-emerald-600 text-sm font-medium">+8%</span>
                        </div>
                        <h3 class="text-2xl font-bold text-slate-900 mb-1">€45,231</h3>
                        <p class="text-slate-600 text-sm">Revenus mensuels</p>
                    </div>

                    <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                        <div class="flex items-center justify-between mb-4">
                            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                </svg>
                            </div>
                            <span class="text-red-600 text-sm font-medium">-3%</span>
                        </div>
                        <h3 class="text-2xl font-bold text-slate-900 mb-1">1,234</h3>
                        <p class="text-slate-600 text-sm">Commandes</p>
                    </div>

                    <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                        <div class="flex items-center justify-between mb-4">
                            <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                                </svg>
                            </div>
                            <span class="text-emerald-600 text-sm font-medium">+5%</span>
                        </div>
                        <h3 class="text-2xl font-bold text-slate-900 mb-1">4.8</h3>
                        <p class="text-slate-600 text-sm">Note moyenne</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
// Pas de logique spéciale pour cette démo
// Toutes les cartes sont statiques pour démontrer différents layouts
</script>
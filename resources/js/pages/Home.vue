<template>
    <div class="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
        <!-- Hero Section -->
        <!-- <HeroSection 
            :stats="stats"
            @scroll-to-demos="scrollToDemos"
            @open-random-demo="openRandomDemo"
        /> -->

        <!-- Search & Filters -->
        <!-- <SearchFilters 
            ref="searchFiltersRef"
            v-model:search-query="searchQuery"
            v-model:selected-difficulty="selectedDifficulty"
            :difficulties="difficulties"
        /> -->

        <!-- Demos Grid -->
        <!-- <DemosGrid 
            :demos="filteredDemos"
            @open-demo="openDemo"
            @search-by-tag="searchByTag"
            @clear-filters="clearFilters"
        /> -->
        <Galaxy />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import Galaxy from '@/components/blocs/galaxy/Galaxy.vue';

</script>


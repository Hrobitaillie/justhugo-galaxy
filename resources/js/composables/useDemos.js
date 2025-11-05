import { ref, computed } from 'vue';

// Configuration des démos disponibles
const demoConfigs = ref([
    {
        id: 'button-animations',
        title: 'Animations de Boutons',
        description: 'Collection d\'animations interactives pour boutons avec CSS et Vue 3',
        icon: '🎨',
        tags: ['CSS', 'Animation', 'Boutons'],
        difficulty: 'Facile',
        status: 'active',
        component: () => import('@/pages/demos/ButtonAnimations.vue'),
        created: '2025-11-03',
        updated: '2025-11-03'
    },
    {
        id: 'loading-spinners',
        title: 'Loading Spinners',
        description: 'Différents types de spinners et animations de chargement',
        icon: '⚡',
        tags: ['Loading', 'Animation', 'UI'],
        difficulty: 'Facile',
        status: 'active',
        component: () => import('@/pages/demos/LoadingSpinners.vue'),
        created: '2025-11-03',
        updated: '2025-11-03'
    },
    {
        id: 'card-layouts',
        title: 'Layouts de Cartes',
        description: 'Différents designs de cartes responsives avec Tailwind CSS',
        icon: '📱',
        tags: ['Layout', 'Cards', 'Responsive'],
        difficulty: 'Moyen',
        status: 'active',
        component: () => import('@/pages/demos/CardLayouts.vue'),
        created: '2025-11-03',
        updated: '2025-11-03'
    },
    {
        id: 'interactive-forms',
        title: 'Formulaires Interactifs',
        description: 'Formulaires avancés avec validation temps réel et animations',
        icon: '📝',
        tags: ['Forms', 'Validation', 'Interactive'],
        difficulty: 'Avancé',
        status: 'coming-soon',
        component: null,
        created: '2025-11-03',
        updated: '2025-11-03'
    }
]);

export function useDemos() {
    // Getters
    const demos = computed(() => demoConfigs.value);

    const activeDemos = computed(() =>
        demoConfigs.value.filter(demo => demo.status === 'active')
    );

    const comingSoonDemos = computed(() =>
        demoConfigs.value.filter(demo => demo.status === 'coming-soon')
    );

    // Stats
    const stats = computed(() => ({
        total: demos.value.length,
        active: activeDemos.value.length,
        comingSoon: comingSoonDemos.value.length,
        byDifficulty: {
            facile: demos.value.filter(d => d.difficulty === 'Facile').length,
            moyen: demos.value.filter(d => d.difficulty === 'Moyen').length,
            avance: demos.value.filter(d => d.difficulty === 'Avancé').length
        }
    }));

    // Actions
    const getDemoById = (id) => {
        return demos.value.find(demo => demo.id === id);
    };

    const getDemosByTag = (tag) => {
        return demos.value.filter(demo =>
            demo.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
        );
    };

    const getDemosByDifficulty = (difficulty) => {
        return demos.value.filter(demo => demo.difficulty === difficulty);
    };

    const getRandomDemo = () => {
        const activeDemons = activeDemos.value;
        return activeDemons[Math.floor(Math.random() * activeDemons.length)];
    };

    const searchDemos = (query) => {
        if (!query) return demos.value;

        const lowerQuery = query.toLowerCase();
        return demos.value.filter(demo =>
            demo.title.toLowerCase().includes(lowerQuery) ||
            demo.description.toLowerCase().includes(lowerQuery) ||
            demo.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
        );
    };

    return {
        // Data
        demos,
        activeDemos,
        comingSoonDemos,
        stats,

        // Methods
        getDemoById,
        getDemosByTag,
        getDemosByDifficulty,
        getRandomDemo,
        searchDemos
    };
}
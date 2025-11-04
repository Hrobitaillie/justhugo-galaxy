
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/Home.vue')
    },
    {
        path: '/demo/:id',
        name: 'Demo',
        component: () => import('@/pages/DemoViewer.vue'),
        props: true
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/components/NotFound.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
});
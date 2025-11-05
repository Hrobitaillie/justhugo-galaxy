import './bootstrap';
import '../css/app.css';

// 1. On importe createApp
import { createApp } from "vue";
import { createRouter } from 'vue-router'
// 2. On importe AppComponent.vue
import App from "./App.vue"
import { router } from '../../routes/router.js';
import { i18nVue } from 'laravel-vue-i18n';
import VueSplide from '@splidejs/vue-splide';


const app = createApp(App)
app.use(router)
app.use(VueSplide)
app.use(i18nVue, {
    lang: 'fr',
    resolve: lang => {
        const langs = import.meta.glob('../../lang/*.json', { eager: true });
        return langs[`../../lang/${lang}.json`].default;
    },
})
app.mount('#app')
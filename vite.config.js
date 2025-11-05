import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { execSync } from 'child_process';

// Plugin personnalisé pour builder au moment où le watcher se termine
function buildOnWatcherClose() {
  let isDevServer = false;

  // Écouter SIGINT (Ctrl+C)
  process.on('SIGINT', () => {
    if (isDevServer) {
      console.log('\n🔨 Interruption détectée, lancement du build...');
      try {
        execSync('npm run build', { stdio: 'inherit' });
        console.log('✅ Build terminé avec succès');
      } catch (error) {
        console.error('❌ Erreur lors du build:', error.message);
      }
    }
    process.exit(0);
  });

  return {
    name: 'build-on-watcher-close',
    configureServer() {
      isDevServer = true;
    }
  };
}

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/app.js'],
      refresh: true,
      // detectTls: 'my-app.test', 
    }),
    tailwindcss(),
    vue(),
    Components({
      dirs: ['resources/js/components'], // Chemin vers tes composants
      extensions: ['vue'],
      deep: true,
      dts: true
    }),
    buildOnWatcherClose()
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@': '/resources/js',
      "root": "./"
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5174,
    strictPort: false,
    cors: true,
    hmr: {
      port: 5174,
      host: 'localhost'
    }
  },
});

import {defineConfig} from 'vite';
import {resolve} from 'path';
import vue from '@vitejs/plugin-vue'
const path = require('path')
import { unlinkSync, existsSync } from "fs";

const twigRefreshPlugin = {
    name: 'twig-refresh',
    configResolved(config) {
        if (config.env.DEV && config.build.manifest) {
            let buildDir = resolve(config.root, config.build.outDir, "manifest.json");
            existsSync(buildDir) && unlinkSync(buildDir);
        }
    },
    configureServer({watcher, ws}) {
        watcher.add(resolve('templates/**/*.twig'));
        watcher.on('change', function (path) {
            if (path.endsWith('.twig')) {
                ws.send({
                    type: 'full-reload'
                });
            }
        });
    }
}

export default defineConfig({
    plugins: [vue(), twigRefreshPlugin],
    root: './assets',
    base: '/assets/',
    server: {
        port: 3000,
        watch: {
            disableGlobbing: false
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './assets/'),
            'style': path.resolve(__dirname, './assets/style/'),
            'public' : path.resolve(__dirname, './public/'),
            'mixins' : path.resolve(__dirname, './assets/mixins/'),
            'components' : path.resolve(__dirname, './assets/components/'),
            'pages' : path.resolve(__dirname, './assets/pages/'),
            'plugins' : path.resolve(__dirname, './assets/plugins/'),
            'models' : path.resolve(__dirname, './assets/models/'),
            'utils' : path.resolve(__dirname, './assets/utils/')
        }
    },
    build: {
        manifest: true,
        emptyOutDir: true,
        assetsDir: '',
        outDir: '../public/assets/',
        rollupOptions: {
            output: {
                manualChunks: undefined
            },
            input: {
                'app': './assets/app.js',
            }
        }
    }
})

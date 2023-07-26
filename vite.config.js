import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import ElementPlus from 'unplugin-element-plus/vite'
import vueDevTools from 'vite-plugin-vue-devtools'

const path = name => resolve(__dirname, name)

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    build: {
        sourcemap: false,
        outDir: 'dist'
    },
    server: {
        // origin: 'http://10.181.196.166:10001',
        // host: '0.0.0.0',
        // proxy: {
        //     '/': {
        //         target: 'http://10.181.196.169:3100',
        //         changeOrigin: true,
        //         rewrite: (path) => path.replace(/^\/dashboard/, '')
        //     }
        // },
        open: true
    },
    resolve: {
        alias: {
            '@': path('src'),
            '@store': path('src/store'),
            '@router': path('src/router'),
            '@pages': path('src/pages'),
            '@service': path('src/service')
        },
        extensions: ['.vue', '.js', '.jsx', '.ts', '.json', '.scss', '.css']
    },
    plugins: [
        vueDevTools(),
        vue(),
        vueJsx(),
        ElementPlus(),
        legacy({
            renderLegacyChunks: true,
            polyfills: ['es.global-this'],
            targets: ['> 1%', 'last 2 versions', 'not ie <= 11']
        })
    ]
})

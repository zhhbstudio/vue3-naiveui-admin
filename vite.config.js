import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    resolve: {
      alias: {
        '@/': new URL('./src/', import.meta.url).pathname
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/styles/variables.scss";'
        }
      }
    },
    plugins: [vue()]
  }

  if (command === 'serve') {
    dotenv.config({ path: './.env.development.local' })
    dotenv.config({ path: './.env.development' })
    dotenv.config({ path: './.env.local' })
    dotenv.config({ path: './.env' })
    config.server = {
      port: process.env.DEV_PORT,
      host: '0.0.0.0',
      proxy: {
        [process.env.VITE_APP_API_PRIFIX]: {
          target: process.env.DEV_PROXY_SERVER,
          changeOrigin: true,
          // rewrite: (path) => path.replace(process.env.VITE_APP_API_PRIFIX, '')
        }
      }
    }
  }
  return config
})

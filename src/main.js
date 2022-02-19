import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import NaiveUI from './NaiveUIComponents'
import router from './router'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'


createApp(App).use(NaiveUI).use(createPinia()).use(router).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'

import NaiveUI from './NaiveUIComponents'
import router from './router'
import store from './store'

createApp(App).use(NaiveUI).use(router).use(store).mount('#app')

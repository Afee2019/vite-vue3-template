import { createApp } from 'vue'
import App from './App.vue'

/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import router from './router/index'
import store from './store/index'
/* eslint-enable import/extensions */
/* eslint-enable import/no-unresolved */

createApp(App).use(router).use(store).mount('#app')

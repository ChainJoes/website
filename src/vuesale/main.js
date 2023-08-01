// Vue3 App
import { createApp } from 'vue'
import App from './App.vue'
import './stylesheet.css'

// VueX store
import store from "@/store";

createApp(App).use(store).mount('#app')

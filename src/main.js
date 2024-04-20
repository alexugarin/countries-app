import { createApp } from 'vue'
import './styles.scss';
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import CountryDetail from './components/CountryDetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/country/:name', component: CountryDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')

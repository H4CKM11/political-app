// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NationalGovernment from '../views/NationalGovernment.vue'
// Import other views as needed

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/national-government',
        name: 'NationalGovernment',
        component: NationalGovernment
    },
    // Add more routes here
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

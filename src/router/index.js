import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/main-page'

const routes = [
    {
        path: '/main',
        component: MainPage
    },
    {
        path: '/',
        redirect: 'main'
    }
    ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
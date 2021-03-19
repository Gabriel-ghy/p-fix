import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/home.vue'
import Index from '../components/Logged/index.vue'
import Login from '../components/login.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children:
            [
                {
                    path: '/',
                    name: 'Index',
                    component: Index,
                    meta: {requireAuth: false}
                }
            ]
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login,
        meta: {requireAuth: false}
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
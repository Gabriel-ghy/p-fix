import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/home.vue'
import Index from '../components/Logged/index.vue'
import Login from '../components/login.vue'
import Appointment from '../components/Logged/appointment'

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
                    meta: {requireAuth: true,title:"主页-先锋网络中心"}
                },
                {
                    path: '/Appointment',
                    name: 'Appointment',
                    component: Appointment,
                    meta: {requireAuth: true,title: "预约维修-先锋网络中心"}
                }
            ]
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login,
        meta: {requireAuth: true}
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router
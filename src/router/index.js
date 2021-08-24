import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Logged/home.vue'
import Index from '../components/Logged/index.vue'
import Index2 from '../components/Unlogged/index'
import Login from '../components/login.vue'
import Appointment from '../components/Unlogged/appointment'
import FixManagement from '../components/Logged/fixmanagement'
import Home2 from  '../components/Unlogged/home'
import {ElMessage} from "element-plus";

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
                    path: '/FixManagement',
                    name: 'FixManagement',
                    component: FixManagement,
                    meta: {requireAuth: true,title: "维修管理-先锋网络中心"}
                }
            ]
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login,
        meta: {requireAuth: true}
    },
    {
        path: '/Home',
        name: 'Home2',
        component: Home2,
        children:
            [
                {
                    path: '/Home',
                    name: 'Index2',
                    component: Index2,
                    meta: {requireAuth: true,title:"主页-先锋网络中心"}
                },
                {
                    path: '/Appointment',
                    name: 'Appointment',
                    component: Appointment,
                    meta: {requireAuth: true,title:"主页-先锋网络中心"}
                }
            ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path === '/Login' || to.path === '/Appointment' || to.path === '/Home') {    //若要跳转的页面是登录界面
        next();     //直接跳转
    }
    else{   //若要跳转的页面是个人界面  if (to.path === '/')
        let token = localStorage.getItem('token');    //获取本地存储的token值
        if (token===null||token===''){    //若token为空则验证不成功，跳转到登录页面
            next('/Login');
            ElMessage("请先登录！")
        }
        else{           //不为空则验证成功
            next();
        }
    }
    // else{
    //     next();
    // }
});

export default router;

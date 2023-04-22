import { createRouter, createWebHistory } from 'vue-router'
// import LoginCompo from './components/LoginCompo.vue';
// import RegisterCompo from './components/RegisterCompo.vue';
// import DashboardCompo from './components/DashboardCompo.vue';


const routes = [
    {
        path: '/login',
        name: 'login',
        // component: LoginCompo
        component: () => import('../components/LoginCompo.vue')
    },
    {
        path: '/register',
        name: 'Register',
        // component: RegisterCompo
        component: () => import('../components/RegisterCompo.vue')
    },
    {
        path: '/',
        name: 'Dashboard',
        // component: DashboardCompo
        component: () => import('../components/DashboardCompo.vue')

    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router

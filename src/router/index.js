import { createRouter, createWebHistory } from 'vue-router';
import User from '../views/User.vue';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/DefaultTemplate'),
        children: [
            {
                path: '/:username',
                component: User,
                name: 'user',
                props: true,
            },
            {
                path: '/',
                component: Home,
                name: 'home'
            },
        ] 
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

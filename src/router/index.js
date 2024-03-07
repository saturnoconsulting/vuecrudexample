import {createRouter, createWebHistory} from 'vue-router'
import postsIndex from "@/views/posts/index.vue"


const routes = [
    {
        path: '/',
        name: 'postsIndex',
        component: postsIndex
    }
]

const router = new createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to,from, savedPosition) {
        return savedPosition;
    }
});

export default router;
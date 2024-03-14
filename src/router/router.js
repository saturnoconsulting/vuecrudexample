import {createRouter, createWebHistory} from 'vue-router'
import postsIndex from "@/views/posts/posts"
import addPost from "@/views/posts/add.vue";
import editPost from "@/views/posts/edit"



const routes = [
    {
        path: '/',
        name: 'postsIndex',
        component: postsIndex
    },
    {
        path: "/posts/create",
        name: 'create',
        component: addPost
    },
    {
        path: "/posts/edit",
        name: 'edit',
        component: editPost
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
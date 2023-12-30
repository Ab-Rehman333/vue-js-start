import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/home.vue';
import TodoPage from './pages/todo.vue';
import Albums from './pages/albums.vue';
import Binding from './pages/twowaybinding.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/TodoPage', component: TodoPage },
    { path: '/albumsPage', component: Albums },
    { path: '/TwoWayBind', component: Binding },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

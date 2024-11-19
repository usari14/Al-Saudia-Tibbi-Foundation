import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue'
import About from "./pages/About.vue";
import NewProducts from "./pages/NewProducts.vue";
import ProductDetailPage from './components/ProductDetailPage.vue'
import CartPage from "./pages/CartPage.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/products',
        name: 'Products',
        component: NewProducts
    },
    {
        path: '/productsdetails/:id',
        name: 'ProductDetailPage',
        component: ProductDetailPage,
        props: true
    },
    {
        path: '/cart',
        name: 'CartPage',
        component: CartPage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
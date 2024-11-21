import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue'
import About from "./pages/About.vue";
import NewProducts from "./pages/NewProducts.vue";
import ProductDetailPage from './components/ProductDetailPage.vue'
import CartPage from "./pages/CartPage.vue";
import CheckoutPage from "./pages/CheckoutPage.vue";
import ContactUsPage from "./pages/ContactUsPage.vue";
import MediaPage from "./pages/MediaPage.vue";

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
    },
    {
        path: '/checkout',
        name: 'CheckoutPage',
        component: CheckoutPage,
    },
    {
        path: '/contactus',
        name: 'ContactUsPage',
        component: ContactUsPage,
    },
    {
        path: '/media',
        name: 'MediaPage',
        component: MediaPage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
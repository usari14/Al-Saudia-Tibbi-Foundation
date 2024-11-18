// src/main.js
import { createApp } from 'vue'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'
import App from './App.vue'
import router from './router'
import 'flowbite';
import $ from 'jquery'; // Import jQuery



createApp(App).use(router).mount('#app')

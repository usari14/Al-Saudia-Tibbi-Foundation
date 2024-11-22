<template>
    <div class="bg-[#A52A2A] text-white">
        <div class="">
            <p class="container text-center text-[12px] md:text-base lg:text-lg py-2 font-medium">Enjoy <span
                    class="text-[#F7C210] font-medium md:font-extrabold">Free Nationwide Shipping</span> on Orders <span
                    class="text-[#F7C210] font-medium md:font-extrabold">Over PKR 3000</span>. Expedited Delivery Within
                <span class="text-[#F7C210] font-medium md:font-extrabold">3-7 Working Days</span> During Sale Period.
            </p>
        </div>
    </div>
    <div class="bg-[#EEF3F6] h-[102px]">
        <div class="container relative flex justify-between items-center h-full">
            <div>
                <img class="absolute md:-top-7 top-0 w-[120px] md:w-[150px] p-4" src="../assets/logo.png" alt="">
            </div>
            <div class="flex items-center gap-6">
                <form @submit.prevent="goToSearchPage" class="items-center hidden md:flex">
                    <input v-model="searchQuery" type="text" placeholder="Search any Product here..."
                        class="lg:w-[550px] md:w-[300px] p-2 rounded-l-lg focus:outline-none focus:ring-0 border border-gray-300" />
                    <button type="submit"
                        class="px-4 py-2 bg-[#D5362B] text-white rounded-r-lg flex items-center justify-center">
                        <img src="../assets/search.png" alt="Search" class="w-5 h-5" />
                    </button>
                </form>
                <ul class="flex gap-6">
                    <li><img src="../assets/user.png" alt=""></li>
                    <li><img src="../assets/heart.png" alt=""></li>
                    <li>
                        <div class="relative">
                            <router-link to="/cart">
                                <img src="../assets/cart.png" alt="">
                                <p
                                    class="absolute -right-1 -top-2 bg-red-500 text-[8px] py-[2px] px-1  rounded-full text-white">
                                    {{ cartCount }}</p>
                            </router-link>
                        </div>
                    </li>
                </ul>
                <button data-collapse-toggle="navbar-default" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white bg-[#A52A2A] rounded-lg lg:hidden  focus:outline-none"
                    aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>

        </div>
    </div>
    <div class="bg-[#EEF3F6] md:hidden">
        <form action="" class="flex justify-center py-3 px-4 w-full max-w-[700px] mx-auto">
            <input type="text" placeholder="Search any Product here..."
                class="w-full p-2 rounded-l-lg focus:outline-none focus:ring-0" />
            <button class="text-white px-4 py-2 bg-[#D5362B] rounded-r-lg">
                <img src="../assets/search.png" alt="">
            </button>
        </form>
    </div>

    <div>
        <nav class="md:bg-[#D5362B] bg-[#EEF3F6]">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2 py-0 lg:py-3">
                <a href="tel:03001001967"
                    class=" items-center space-x-3 rtl:space-x-reverse order lg:order-2 hidden lg:flex ">
                    <img src="../assets/whatsapp.png" class="h-8" alt="WhatsApp Icon" />
                    <span class="self-center text-[30px] font-bold text-white">0300-1001967</span>
                </a>

                <button data-collapse-toggle="navbar-default" type="button"
                    class="items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hidden hover:bg-gray-100 focus:outline-none"
                    aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class="hidden w-full lg:block lg:w-auto order lg:order-1" id="navbar-default">
                    <ul
                        class=" bg-red-500 md:bg-transparent font-bold flex flex-col p-4 md:p-0 mt-4 lg:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <router-link to="/" class="block py-2 pr-4 text-[#FFFFFF] text-sm  lg:text-[16px] "
                                aria-current="page">HOME</router-link>
                        </li>
                        <li class="relative pl-4 ">
                            <router-link to="/about"
                                class="block py-2 px-4 text-[#FFFFFF] text-sm  lg:text-[16px] ">ABOUT US</router-link>
                            <span
                                class="absolute left-0 top-1/2 transform -translate-y-1/2 h-5 w-px bg-white hidden lg:block"></span>
                        </li>
                        <li class="relative pl-4">
                            <router-link to="/products"
                                class="block py-2 px-4 text-[#FFFFFF] text-sm  lg:text-[16px] ">PRODUCTS</router-link>
                            <span
                                class="absolute left-0 top-1/2 transform -translate-y-1/2 h-5 w-px bg-white hidden lg:block"></span>
                        </li>
                        <li class="relative pl-4">
                            <router-link to="/media"
                                class="block py-2 px-4 text-[#FFFFFF] text-sm  lg:text-[16px] ">MEDIA</router-link>
                            <span
                                class="absolute left-0 top-1/2 transform -translate-y-1/2 h-5 w-px bg-white hidden lg:block"></span>
                        </li>
                        <li class="relative pl-4">
                            <router-link to="/contactus"
                                class="block py-2 px-4 text-[#FFFFFF] text-sm  lg:text-[16px] ">CONTACT US</router-link>
                            <span
                                class="absolute left-0 top-1/2 transform -translate-y-1/2 h-5 w-px bg-white hidden lg:block"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>

</template>

<script>
import { cartStore } from '../Store/store';
export default {
    name: 'Topbar',
    computed: {
        cartCount() {
            return cartStore.cartCount; // Reactive cart count
        },
        goToSearchPage() {
            if (this.searchQuery.trim() !== '') {
                this.$router.push({ path: '/search', query: { query: this.searchQuery } });
            }
        }
    }
}
</script>

<style scoped>
/* Any additional styles for Topbar */
</style>
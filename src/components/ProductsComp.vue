<template>
    <div class="bg-[#515151] h-[300px]">
        <div class="container">
            <div class="bg-[#02101C1A] inline-block py-8 pl-5 pr-20 mt-24">
                <h1 class="text-[40px] font-bold leading-[48px] text-white">Products</h1>
                <sub class="text-[24px] leading-7 font-medium text-white">Who we are and what we do?</sub>
            </div>
        </div>
    </div>
    <div class="container py-8">
        <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center rtl:space-x-reverse">
                <li class="inline-flex items-center">
                    <router-link to="/"
                        class="inline-flex items-center text-lg font-medium text-red-600 underline hover:text-red-400">
                        Home
                    </router-link>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <span class="ms-1 text-lg font-medium text-gray-500 md:ms-2 dark:text-gray-400">/
                            Products</span>
                    </div>
                </li>
            </ol>
        </nav>
        <hr class="h-[2px] bg-[#6B6B6B] w-full lg:mb-20 mb-10">

        <div class="flex flex-wrap lg:flex-nowrap">
            <div
                class="w-full lg:w-[280px] lg:h-[505px] flex flex-col items-center bg-white shadow-xl order-2 lg:order-1 mt-10 lg:mt-0">
                <p class="bg-red-500 text-white w-full text-left py-2 pl-5 font-bold">Product Category</p>
                <div class="relative w-[90%] mt-4">
                    <input type="text" placeholder="Search"
                        class="rounded-sm border border-gray-300 p-2 pl-4 w-full pr-10">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-4.35-4.35m1.65-6.4a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <div class="flex flex-col items-start w-full h-[400px] overflow-y-auto px-5">
                    <div v-for="(category, index) in ProductCategories" :key="index" class="flex mt-4 items-start">
                        <input type="checkbox" class="h-[14px] w-[14px] mr-2 outline-none">
                        <p class="text-gray-700 text-sm text-left font-medium">{{ category }}</p>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-9/12 flex-col px-10 order-1 lg:order-2">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <h2 class="text-6xl font-medium mt-5 md:mt-0">Shop</h2>
                    <select class="text-lg py-1 px-8  rounded-md lg:mb-14 mb-7 mt-5 lg:mt-0">
                        <option value="option1">Default Scroll</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        <option value="option4">Option 4</option>
                        <option value="option5">Option 5</option>
                    </select>
                </div>
                <p class="text-[20px] text-center lg:text-left font-medium leading-7 mb-4">Showing <span>{{ currentPage
                    * pageSize + 1 }}–{{ (currentPage + 1) * pageSize }}</span> of <span>{{ products.length
                        }}</span> results</p>
                <div
                    class="products grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 lg:pt-10 pt-5 place-items-center">
                    <div class="product text-center" v-for="(product, index) in paginatedProducts" :key="index">
                        <router-link :to="{ path: `/productsdetails/${index}` }" class="block">
                            <div
                                class="w-[290px] h-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col border border-gray-300">
                                <div class="w-full bg-[#EEF3F6] p-2 flex justify-center items-center">
                                    <img :src="product.image" alt="Product Image"
                                        class="h-[233px] w-auto object-cover" />
                                </div>
                                <div class="w-full bg-[#fff] p-4 flex flex-col justify-between">
                                    <button @click.prevent="addToCart(product)"
                                        class="bg-[#D5362B] text-white px-4 py-2 rounded-md mb-4 transition-colors">Add
                                        to Cart</button>
                                    <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
                                    <strong class="text-[16px] font-semibold mb-2">{{ product.price }}</strong>
                                    <div class="stars flex justify-center gap-1">
                                        <span v-for="n in 5" :key="n"
                                            :class="{ 'text-yellow-400': n <= product.rating, 'text-gray-300': n > product.rating }"
                                            class="text-xl">&#9733;</span>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>

                <nav aria-label="Page navigation example">
                    <ul class="flex items-center -space-x-px h-8 gap-2 text-sm mt-10">
                        <li>
                            <a href="#" @click="changePage(currentPage - 1)"
                                :class="['flex items-center justify-center px-3 h-[50px] w-[50px] ms-0 leading-tight', currentPage === 0 ? 'text-gray-500 cursor-not-allowed' : 'text-gray-500 bg-white border border-[#616161] hover:bg-gray-100 hover:text-gray-700']">
                                <span class="sr-only">Previous</span>
                                <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M5 1 1 5l4 4" />
                                </svg>
                            </a>
                        </li>
                        <li v-for="n in totalPages" :key="n">
                            <a href="#" @click="changePage(n - 1)"
                                :class="['flex items-center justify-center px-3 h-[50px] w-[50px] ms-0 leading-tight', currentPage === n - 1 ? 'text-white bg-[#616161] border border-[#616161]' : 'text-gray-500 bg-white border border-[#616161] hover:bg-gray-100 hover:text-gray-700']">
                                {{ n }}
                            </a>
                        </li>
                        <li>
                            <a href="#" @click="changePage(currentPage + 1)"
                                :class="['flex items-center justify-center px-3 h-[50px] w-[50px] ms-0 leading-tight', currentPage === totalPages - 1 ? 'text-gray-500 cursor-not-allowed' : 'text-gray-500 bg-white border border-[#616161] hover:bg-gray-100 hover:text-gray-700']">
                                <span class="sr-only">Next</span>
                                <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import { AllProducts } from '../DataSet/AllProducts';
import { cartStore } from '../Store/store';

export default {
    name: 'ProductsComp',
    data() {
        return {
            ProductCategories: [
                'Clothing', 'Footwear', 'Accessories', 'Electronics', 'Furniture', 'Sports',
            ],
            products: AllProducts,
            currentPage: 0,
            pageSize: 6,
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.products.length / this.pageSize);
        },
        paginatedProducts() {
            const start = this.currentPage * this.pageSize;
            const end = start + this.pageSize;
            return this.products.slice(start, end);
        }
    },
    methods: {
        changePage(page) {
            if (page < 0 || page >= this.totalPages) return;
            this.currentPage = page;
        },
        addToCart(product) {
            cartStore.addToCart(product); // Add product to cart
        }
    }
};
</script>

<style></style>

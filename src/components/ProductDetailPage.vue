<template>
    <div class="bg-[#515151] h-[300px]">
        <div class="container">
            <div class="bg-[#02101C1A] inline-block py-8 pl-5 pr-20 mt-24">
                <h1 class="text-[40px] font-bold leading-[48px] text-white">Products</h1>
                <sub class="text-[24px] leading-7 font-medium text-white">Who we are and what we do?</sub>
            </div>
        </div>
    </div>
    <div class="container py-20">
        <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center rtl:space-x-reverse">
                <li class="inline-flex items-center">
                    <router-link to="/"
                        class="inline-flex items-center text-lg font-medium text-red-600 underline hover:text-red-400">
                        Home
                    </router-link>
                </li>
                <li class="inline-flex items-center">
                    <router-link to="/products"
                        class="inline-flex items-center text-lg font-medium text-red-600 underline hover:text-red-400 ml-[10px]">
                        / Products
                    </router-link>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <span class="ms-1 text-lg font-medium text-gray-500 md:ms-2 dark:text-gray-400">/
                            {{ product.name }}</span>
                    </div>
                </li>
            </ol>
        </nav>
        <hr class="h-[2px] bg-[#6B6B6B] w-full lg:mb-20 mb-10">
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-0 md:gap-10">
            <!-- Image Column -->
            <div
                class="col-span-12 lg:col-span-5 bg-white mx-auto px-6 sm:px-12 md:px-20 lg:px-36 w-auto py-6 sm:py-8 rounded-3xl">
                <div
                    class="w-full sm:w-[200px] md:w-[247px] h-auto sm:h-[300px] md:h-[403px] bg-white flex justify-center items-center mx-auto">
                    <img :src="product.image" alt="Product Image" class="w-full h-full object-contain" />
                </div>
            </div>


            <!-- Details Column -->
            <div class="col-span-12 lg:col-span-7 flex flex-col gap-4">
                <h1 class="text-6xl font-medium leading-[72px]">{{ product.name }}</h1>
                <div class="stars flex items-center gap-2 mb-6">
                    <span v-for="n in 5" :key="n"
                        :class="{ 'text-yellow-400': n <= product.rating, 'text-gray-300': n > product.rating }"
                        class="text-xl">&#9733;</span>
                    <!-- Separator -->
                    <div class="w-px h-4 bg-[#000000]"></div>
                    <!-- Link -->
                    <a href="/" class="hover:underline">Add Your Review</a>
                </div>
                <p v-if="product.stock > 10" class="text-lg">Availability <span class="text-[#088642]">IN STOCK</span>
                </p>
                <p v-else-if="product.stock > 0 && product.stock <= 10">Alomost Sold Out !!</p>
                <p v-else>Out of stock</p>

                <!-- <p class="text-lg">{{ product.description }}</p> -->
                <strong class="text-[40px] font-semibold mb-10">Rs: {{ product.price }}</strong>
                <hr class="h-[2px] bg-[#6B6B6B] w-full mb-2">
                <div class="flex gap-5 flex-wrap sm:flex-nowrap">
                    <div class="flex items-center gap-0">
                        <a href="#"
                            class="flex justify-center items-center w-[50px] h-[40px] sm:w-[30px] sm:h-[50px] border border-gray-500 text-lg">-</a>
                        <input type="text" name="quantity" id="quantity" placeholder="1"
                            class="w-16 h-[40px] sm:w-12 sm:h-[50px] text-center border bg-transparent border-gray-500">
                        <a href="#"
                            class="flex justify-center items-center w-[50px] h-[40px] sm:w-[30px] sm:h-[50px] border border-gray-500 text-lg">+</a>
                    </div>
                    <button class="bg-red-600 text-white px-8 py-3 rounded-md w-[300px] sm:w-auto">Add to Cart</button>
                    <div class="border border-gray-600 flex justify-center items-center px-4 w-[200px] py-3 sm:w-auto">
                        <img src="../assets//heart.png" class="h-6 sm:h-[18px]" alt="">
                    </div>
                </div>

                <hr class="h-[2px] bg-[#6B6B6B] w-full mb-2 mt-2">
                <p class="text-lg font-medium text-[#616161]">Category: <span class="text-[#088642]">{{ product.category
                        }}</span></p>
            </div>
        </div>
        <div class="mt-20 mb-10">
            <div class="w-full bg-gray-200 rounded-full h-0.5 dark:bg-gray-700 mb-5">
                <div class="bg-red-600 h-0.5 rounded-full" style="width: 8%"></div>
            </div>
            <div class=" mb-7">
                <span class="text-lg text-[#D5362B] font-bold mr-5">Description</span>
                <span class="text-lg font-bold mr-5">Reviews({{ product.reviews }})</span>
            </div>
            <p class="text-lg font-bold mb-3">Benifits:</p>
            <p class="pr-64 mb-10">{{ product.benifits }}</p>
            <p class="text-lg font-bold mb-6">Usage:</p>
            <ul class="list-none mb-5">
                <li
                    class="relative flex justify-start items-center pl-6 before:content-['•'] before:absolute before:left-0 top-1/2 transform -translate-y-1/2 before:text-[#616161] before:text-sm">
                    {{ product.usage }}
                </li>
            </ul>
            <p class="text-lg font-bold mb-6">Ingredients:</p>
            <ul class="list-none mb-5">
                <li v-for="(ingredient, ingredientIndex) in product.ingredients" :key="ingredientIndex"
                    class="relative flex justify-start items-center pl-6 before:content-['•'] before:absolute before:left-0 top-1/2 transform -translate-y-1/2 before:text-[#616161] before:text-sm">
                    {{ ingredient }}
                </li>
            </ul>
        </div>
        <div>
            <h2 class="text-6xl font-medium leading-[72px]">Related Products</h2>
            <div
                class="products grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pt-10 place-items-center">
                <div class="product text-center" v-for="(product, index) in products.slice(0, 4)" :key="index">
                    <router-link :to="{ path: `/productsdetails/${index}` }" class="block">
                        <div
                            class="w-[290px] h-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col border border-gray-300">
                            <div class="w-full bg-[#EEF3F6] p-2 flex justify-center items-center">
                                <img :src="product.image" alt="Product Image" class="h-[233px] w-auto object-cover" />
                            </div>
                            <div class="w-full bg-[#fff] p-4 flex flex-col justify-between">
                                <button class="bg-[#D5362B] text-white px-4 py-2 rounded-md mb-4 transition-colors">
                                    Add to Cart
                                </button>
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
        </div>
    </div>
</template>

<script>
import { AllProducts } from '../DataSet/AllProducts';

export default {
    props: ['id'],
    data() {
        return {
            product: null,
            products: [], // Add products here
        };
    },
    created() {
        this.product = AllProducts[this.id];
        this.products = AllProducts; // Assign all products
    },

};

</script>


<style></style>
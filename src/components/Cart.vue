<template>
    <div class="container mx-auto py-24 px-4">
        <h1 class="text-6xl font-medium leading-[72px] text-[#000000] mb-5">Shopping Cart</h1>
        <div class="flex-wrap hidden md:flex">
            <div class="w-full md:w-7/12 mb-4 text-center md:text-left">
                <div class="text-lg font-medium leading-5 text-[#616161]">
                    Product
                </div>
            </div>
            <div class="w-full md:w-3/12 mb-4 text-center md:text-left">
                <div class="text-lg font-medium leading-5 text-[#616161]">
                    Quantity
                </div>
            </div>
            <div class="w-full md:w-2/12 text-center md:text-left">
                <div class="text-lg font-medium leading-5 text-[#616161]">
                    Total
                </div>
            </div>
        </div>
        <hr class="h-[2px] bg-[#616161] w-full">
        <div class="product text-center" v-for="(product, index) in products.slice(0, 1)" :key="index">
            <div class="flex flex-wrap py-10">
                <div
                    class="w-full md:w-7/12 flex flex-col md:flex-row gap-5 items-center md:items-start text-center md:text-left">
                    <div
                        class="flex items-center w-[182px] h-[183px] md:w-[102px] md:h-[103px] bg-white p-3 rounded-lg mx-auto md:mx-0">
                        <img :src="product.image" class="w-full h-full object-contain" alt="Product Image">
                    </div>
                    <div>
                        <h2 class="text-2xl md:text-[32px] font-medium leading-9 text-[#000000] mb-4 md:mb-1">{{
                            product.name }}</h2>
                        <p class="text-xl leading-6 text-[#1E1E1F] mb-3 md:mb-0">Grams: 32g</p>
                    </div>
                </div>
                <div class="w-full md:w-3/12 flex justify-center md:justify-start items-center mb-4 md:mb-0">
                    <div class="flex items-center gap-0">
                        <a href="#"
                            class="flex justify-center items-center w-[50px] h-[40px] sm:w-[30px] sm:h-[50px] border border-gray-500 text-lg">-</a>
                        <input type="text" name="quantity" id="quantity" placeholder="1"
                            class="w-16 h-[40px] sm:w-12 sm:h-[50px] text-center border bg-transparent border-gray-500">
                        <a href="#"
                            class="flex justify-center items-center w-[50px] h-[40px] sm:w-[30px] sm:h-[50px] border border-gray-500 text-lg">+</a>
                    </div>
                    <a href="/">
                        <img src="../assets/bin.png" class="w-[18px] h-[22px] ml-4" alt="">
                    </a>
                </div>
                <div class="w-full md:w-2/12 flex items-center justify-center md:justify-start">
                    <p class="text-lg">{{ product.price }}</p>
                </div>
            </div>
        </div>
        <hr class="h-[2px] bg-[#616161] w-full mb-10">
        <div class="flex justify-end mb-20">
            <a href="/" class="py-2 px-8 bg-red-600 text-white inline-block rounded-sm">Update Cart</a>
        </div>



        <div class="flex-wrap hidden md:flex">
            <div class="w-full md:w-8/12 mb-4 text-center md:text-left">

            </div>
            <div class="w-full md:w-4/12 mb-4 text-center md:text-left">
                <div class="text-lg font-medium leading-5 text-[#616161]">
                    Quantity
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { AllProducts } from '../DataSet/AllProducts';
export default {
    name: 'Cart',
    data() {
        return {
            products: AllProducts
        };
    }
}
</script>

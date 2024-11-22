<template>
    <div class="container mx-auto py-0 md:py-24 px-4">
        <h1 class="text-6xl font-medium leading-[72px] text-[#000000] mb-5">Your Cart</h1>
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
        <div class="product text-center" v-for="(product, index) in products" :key="index">
            <div class="flex flex-wrap py-10">
                <div class="w-full md:w-7/12 flex flex-col md:flex-row gap-5 items-center md:items-start text-center md:text-left">
                    <div class="flex items-center w-[182px] h-[183px] md:w-[102px] md:h-[103px] bg-white p-3 rounded-lg mx-auto md:mx-0">
                        <img :src="product.image" class="w-full h-full object-contain" alt="Product Image">
                    </div>
                    <div>
                        <h2 class="text-2xl md:text-[32px] font-medium leading-9 text-[#000000] mb-4 md:mb-1">{{ product.name }}</h2>
                        <p class="text-xl leading-6 text-[#1E1E1F] mb-3 md:mb-0">Grams: 32g</p>
                    </div>
                </div>
                <div class="w-full md:w-3/12 flex justify-center md:justify-start items-center mb-4 md:mb-0">
                    <div class="flex items-center gap-0">
                        <a href="#" @click.prevent="decrementQuantity(product)"
                            class="flex justify-center items-center w-[50px] h-[40px] sm:w-[30px] sm:h-[50px] border border-gray-500 text-lg">-</a>
                        <input type="text" name="quantity" id="quantity" :value="product.quantity"
                            @input="updateQuantity($event, product)"
                            class="w-16 h-[40px] sm:w-12 sm:h-[50px] text-center border bg-transparent border-gray-500">
                        <a href="#" @click.prevent="incrementQuantity(product)"
                            class="flex justify-center items-center w-[50px] h-[40px] sm:w-[30px] sm:h-[50px] border border-gray-500 text-lg">+</a>
                    </div>
                    <a href="/">
                        <img src="../assets/bin.png" class="w-[18px] h-[22px] ml-4" alt="">
                    </a>
                </div>
                <div class="w-full md:w-2/12 flex items-center justify-center md:justify-start">
                    <p class="text-lg">${{ product.price * product.quantity }}</p>
                </div>
            </div>
        </div>
        <hr class="h-[2px] bg-[#616161] w-full mb-10">
        <div class="flex justify-end mb-10 md:mb-20">
            <a href="/" class="py-2 px-8 bg-red-600 text-white inline-block rounded-sm">Update Cart</a>
        </div>

        <div class="flex justify-end  mb-5">
            <div class="w-[428px] h-[830px] bg-white border border-[#A7AAAB]">
                <p class="bg-[#F5F5F5] w-full text-left py-6 pl-7 leading-10 text-[40px] font-medium border-b border-[#A7AAAB]">
                    Cart Total
                </p>
                <div class="px-8 py-10">
                    <div class="flex gap-8 md:gap-32 mb-5">
                        <p class="text-lg">Subtotal</p>
                        <span class="text-lg">Rs: {{ totalPrice }} /-</span>
                    </div>
                    <hr class="border- border-[#616161] mb-6">
                    <div class="flex gap-8 md:gap-32 mb-10">
                        <p class="text-lg">Shipping</p>
                        <div>
                            <p class="text-lg mb-8">Flat rate: Rs 300 shipping to Punjab.</p>
                            <p class="text-lg mb-3">Change Address:</p>
                            <select name="city" id="city"
                                class="block w-full px-4 py-2 pr-10 text-left border border-gray-300 text-[#616161] rounded-md appearance-none focus:outline-none mb-3">
                                <option value="Pakistan">Pakistan</option>
                                <option value="Karachi">Karachi</option>
                                <option value="Lahore">Lahore</option>
                                <option value="Islamabad">Islamabad</option>
                                <option value="Quetta">Quetta</option>
                                <option value="Peshawar">Peshawar</option>
                            </select>
                            <input type="text" name="street" placeholder="City"
                                class="block w-full px-4 py-2 border border-gray-300 text-[#616161] rounded-md focus:outline-none mb-3" />
                            <input type="text" name="postal-code" placeholder="Postcode/zip"
                                class="block w-full px-4 py-2 border border-gray-300 text-[#616161] rounded-md focus:outline-none mb-4" />
                            <a href="/"
                                class="px-7 py-2 bg-red-600 text-white rounded-sm text-lg font-semibold">Update</a>
                        </div>
                    </div>
                    <hr class="border- border-[#616161] mb-6">
                    <div class="flex gap-8 md:gap-32 mb-5">
                        <p class="text-lg">Total</p>
                        <span class="text-lg">Rs: {{ totalPrice + 300 }} /-</span>
                    </div>
                    <hr class="border- border-[#616161] mb-6">
                    <router-link to="/checkout"
                        class="bg-red-600 text-white px-10 py-4 block text-center text-lg font-semibold rounded-sm">Proceed
                        To Checkout</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { cartStore } from '../Store/store';
export default {
    data() {
        return {
            products: cartStore.items
        };
    },
    computed: {
        totalPrice() {
            return this.products.reduce((total, product) => {
                return total + (product.price * product.quantity);
            }, 0);
        }
    },
    methods: {
        incrementQuantity(product) {
            const cartItem = this.products.find(item => item.id === product.id);
            if (cartItem) {
                cartItem.quantity += 1;
            }
        },
        decrementQuantity(product) {
            const cartItem = this.products.find(item => item.id === product.id);
            if (cartItem && cartItem.quantity > 1) {
                cartItem.quantity -= 1;
            }
        },
        updateQuantity(event, product) {
            const value = parseInt(event.target.value, 10);
            const cartItem = this.products.find(item => item.id === product.id);
            if (cartItem) {
                if (!isNaN(value) && value >= 1) {
                    cartItem.quantity = value;
                } else {
                    cartItem.quantity = 1; // Default to 1 if invalid input
                }
            }
        }
    }
};
</script>

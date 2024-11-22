<template>
    <div class="flex flex-col items-center p-6">
        <!-- Search Input -->
        <div class="w-full max-w-xl mb-4">
            <input v-model="searchQuery" type="text" placeholder="Enter something to search products"
                class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div v-if="searchQuery === ''">
            <p class="text-lg text-gray-600">Enter something to search products...</p>
        </div>
        <div v-else>
            <div v-if="filteredProducts.length > 0">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <div class="product text-center" v-for="(product, index) in filteredProducts" :key="index">
                        <router-link :to="{ path: `/productsdetails/${product.id}` }" class="block">
                            <div
                                class="w-[290px] h-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col border border-gray-300">
                                <div class="w-full bg-[#EEF3F6] p-2 flex justify-center items-center">
                                    <img :src="product.image" alt="Product Image"
                                        class="h-[233px] w-auto object-cover" />
                                </div>
                                <div class="w-full bg-[#fff] p-4 flex flex-col justify-between">
                                    <button @click.prevent="addToCart(product)"
                                        class="bg-[#D5362B] text-white px-4 py-2 rounded-md mb-4 transition-colors">
                                        Add to Cart
                                    </button>
                                    <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
                                    <strong class="text-[16px] font-semibold mb-2">{{ product.price }}</strong>
                                    <div class="stars flex justify-center gap-1">
                                        <span v-for="n in 5" :key="n"
                                            :class="{ 'text-yellow-400': n <= product.rating, 'text-gray-300': n > product.rating }"
                                            class="text-xl">
                                            &#9733;
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div v-else>
                <p class="text-lg text-red-600">No products found</p>
            </div>
        </div>
    </div>
</template>

<script>
import AllProducts from '../DataSet/AllProducts';
export default {
    name: 'SearchPage',
    data() {
        return {
            searchQuery: this.$route.query.query || '',
            products: AllProducts
        };
    },
    computed: {
        filteredProducts() {
            const result = this.products.filter(product =>
                product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
            console.log('Filtered Products:', result); // Log to see the filtered products
            return result;
        }
    },
    methods: {
        addToCart(product) {
            console.log('Product added to cart:', product);
        }
    }
};
</script>

<style></style>
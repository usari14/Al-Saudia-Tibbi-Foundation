<template>
  <div class="container py-14 md:py-24">
    <h2 class="text-6xl font-medium text-center">Featured Products</h2>
    <p class="text-[20px] text-center my-7">The concept of preventing the diseases and promoting health.</p>

    <div
      class="products grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pt-10 place-items-center">

      <div class="product text-center" v-for="(product, index) in products" :key="index">
        <!-- Card Container with fixed size -->
        <router-link :to="{ path: `/productsdetails/${index}` }" class="block">
          <div
            class="w-[290px] h-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col border border-gray-300">
            <div class="w-full bg-[#EEF3F6] p-2 flex justify-center items-center">
              <img :src="product.image" alt="Product Image" class="h-[233px] w-auto object-cover" />
            </div>
            <div class="w-full bg-[#fff] p-4 flex flex-col justify-between">
              <button class="bg-[#D5362B] text-white px-4 py-2 rounded-md mb-4 transition-colors">Add
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
  </div>
</template>

<script>
import { AllProducts } from '../DataSet/AllProducts';

export default {
  name: 'FeatureProducts',
  data() {
    return {
      products: AllProducts
    };
  }
};
</script>

<style scoped>
/* You can add additional styles if needed */
</style>
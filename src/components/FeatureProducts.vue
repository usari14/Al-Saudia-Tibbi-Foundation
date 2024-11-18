<template>
  <div class="container py-14 md:py-24">
    <h2 class="text-6xl font-medium text-center">Featured Products</h2>
    <p class="text-[20px] text-center my-7">The concept of preventing the diseases and promoting health.</p>

    <div class="products grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pt-10 place-items-center">

      <div class="product text-center" v-for="(product, index) in FeatureProducts" :key="index">
        <!-- Card Container with fixed size -->
        <div
          class="w-[315px] h-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col border border-gray-300">
          <!-- First Half: Image Section -->
          <div class="w-full bg-[#EEF3F6] p-2 flex justify-center items-center">
            <img :src="product.image" alt="Product Image" class="h-[233px] w-auto object-cover" />
          </div>
          <!-- Second Half: Details Section -->
          <div class="w-full bg-[#fff] p-4 flex flex-col justify-between">
            <!-- Add to Cart Button -->
            <button class="bg-[#D5362B] text-white px-4 py-2 rounded-md mb-4 transition-colors">
              Add to Cart
            </button>
            <!-- Product Name -->
            <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
            <strong class="text-[16px]  font-semibold mb-2">{{ product.price }}</strong>
            <!-- Star Rating -->
            <div class="stars flex justify-center gap-1">
              <span v-for="n in 5" :key="n"
                :class="{ 'text-yellow-400': n <= product.rating, 'text-gray-300': n > product.rating }"
                class="text-xl">
                &#9733;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fp1 from '../assets/fp1.png';
import fp2 from '../assets/fp2.png';
import fp3 from '../assets/fp3.png';
import fp4 from '../assets/fp4.png';
import fp5 from '../assets/fp5.png';
import fp6 from '../assets/fp6.png';

export default {
  name: 'FeatureProducts',
  data() {
    return {
      // Array of objects with images, names, and ratings
      FeatureProducts: [
        { name: 'DeemarK,s Shakti Prashمعجون شکتی پراش', image: fp1, rating: 0, price: 'Rs. 1000/-' },
        { name: 'DeemarK,s Shakti Prashمعجون شکتی پراش', image: fp2, rating: 0, price: 'Rs. 1000/-' },
        { name: 'DeemarK,s Shakti Prashمعجون شکتی پراش', image: fp3, rating: 0, price: 'Rs. 1000/-' },
        { name: 'DeemarK,s Shakti Prashمعجون شکتی پراش', image: fp4, rating: 0, price: 'Rs. 1000/-' },
        { name: 'DeemarK,s Shakti Prashمعجون شکتی پراش', image: fp5, rating: 0, price: 'Rs. 1000/-' },
        { name: 'DeemarK,s Shakti Prashمعجون شکتی پراش', image: fp6, rating: 0, price: 'Rs. 1000/-' },
        { name: 'DeemarK,s Shakti Prashمعجون شکتی پراش', image: fp5, rating: 0, price: 'Rs. 1000/-' },
        { name: 'DeemarK,s Shakti Prashمعجون شکتی پراش', image: fp6, rating: 0, price: 'Rs. 1000/-' }
      ]
    };
  }
};
</script>

<style scoped>
/* You can add additional styles if needed */
</style>
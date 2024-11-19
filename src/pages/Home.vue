<template>
  <div>
    <Hero />
    <TopCategory />
    <Midbanner />
    <FeatureProducts />
    <WhyChoose />
    <Features />
    <Foundation />
    <Testimonials />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import TopCategory from '../components/TopCategory.vue'
import Midbanner from '../components/Midbannner.vue'
import FeatureProducts from '../components/FeatureProducts.vue'
import WhyChoose from '../components/WhyChoose.vue';
import Features from '../components/Features.vue'
import Foundation from '../components/Foundation.vue'
import Testimonials from '../components/Testimonials.vue'
export default {
  name: 'Home',
  components: {
    Hero,
    TopCategory,
    Midbanner,
    FeatureProducts,
    WhyChoose,
    Features,
    Foundation,
    Testimonials,
  }
}
</script>

<style scoped></style>





















<!-- 
  <template>
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  }
  </script>
  
  <style scoped>
  /* Your styles for the Home component */
  </style>
   -->
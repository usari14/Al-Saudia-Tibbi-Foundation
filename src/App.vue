<!-- src/App.vue -->
<template>
  <Topbar />
  <router-view></router-view> 
  <Footer />
</template>

<script>
import Topbar from './components/Topbar.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Topbar,
    Footer
  }
}
</script>

<style>

</style>

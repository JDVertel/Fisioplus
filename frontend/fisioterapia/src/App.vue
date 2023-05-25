<script>
import Footer from './components/footer.vue';
export default {
  name: "App",
  components: {
    Footer
  }
};
</script>

<template>
  <div id="App">
    <router-view></router-view>
<Footer/>
  </div>
</template>

<style>

</style>

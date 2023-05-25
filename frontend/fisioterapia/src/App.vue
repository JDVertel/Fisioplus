<script>
import Footer from "./components/footer.vue";
export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<template>
  <div id="App">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style>

#App{
  background-image: linear-gradient(to bottom right, #ffffff, #82d8c1);
  min-height: 100vh;
  width: 100%;
  position:absolute;
  padding-bottom: 3em;

}
</style>

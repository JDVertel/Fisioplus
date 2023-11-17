<script>

import Footer from "./views/footer.vue";

import './assets/styles.css'

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



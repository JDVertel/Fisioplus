<script>
import './assets/styles.css';
import header from './views/header.vue'
import footer from './views/footer.vue' 
export default {
    name: "App",
    components: {
        Header: header,
        Footer:footer,
    },
};
</script>

<template>
<div id="App">
    <Header />
    <router-view></router-view>
<Footer />
</div>
</template>

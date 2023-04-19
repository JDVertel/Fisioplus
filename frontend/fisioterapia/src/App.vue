<script>

export default{
  name: 'App',
}
</script>

<template>

<div id="App">
  <img src="@/assets/logo.svg" id="icon" alt="User Icon" />
  <router-view></router-view>
</div>

</template>

<style scoped>
 #icon {
  width:40%;
}

</style>

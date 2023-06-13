<script setup>
import Servicios from "./../components/servicios.vue";
import Rutinas from "./../components/rutinas.vue";
import Productos from "./../components/productos.vue"
import Menu from './../components/menu.vue'
</script>

<template>
  <div class="container-fluid">
<Menu />
    <!-- sesion informacion -->
    <div class="container" align="center">
      <img
        src="./../assets/images/inicio.jpg"
        class="card-img-top redondo1"
        alt="..."
      />
    </div>

    <br />
    <!--!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
    <!-- sesion servivios  -->
    <h1 class="display-6 subtitulos"><strong>Nuestros Servicios</strong></h1>
    <div class="container-fluid">
     
        <Servicios />
      
   
      
    </div>
    <br />
    <!--!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
    <!-- clases y rutinas -->
    <h6 class="display-6 subtitulos"><strong>Clases y Rutinas</strong></h6>
    <div class="row">
      <Rutinas />
      <Rutinas />
    </div>
    <br />
    <!--!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
    <!-- productos -->

    <h6 class="display-6 subtitulos"><strong>Productos</strong></h6>
  
      <Productos />
     
    

  </div>
</template>

<style scoped>
.card-title {
  font-size: 0.8rem;
}

.subtitulos {
  color: white;
  text-align: center;
  text-shadow: 1px 1px 2px black;
}

.card-text {
  font-size: 0.6rem;
  font-style: oblique;
}
.card-footer {
  font-size: 0.7rem;
}
.card-body {
  padding: 5px;
}
.col-6 {
  padding: 2px;
}
.display-6 {
  font-size: 1.2rem;
}
.nav-link {
  color: white;
  text-shadow: 1px 1px 2px black;
  text-decoration: none;
  display: inline-block;
  font-size: 0.9rem;
}

.redondo1 {
  border-radius: 50% 50% 50% 50%;
  width: 60%;
  height: 80%;
}


</style>

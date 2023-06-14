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
 
      <Rutinas />
   
  
    <br />
    <!--!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
    <!-- productos -->

    <h6 class="display-6 subtitulos"><strong>Productos</strong></h6>
  
      <Productos />
     
    

  </div>
</template>

<style scoped>

.subtitulos {
  color: white;
  text-align: center;
  text-shadow: 1px 1px 2px black;
}

.display-6 {
  font-size: 1.2rem;
}


.redondo1 {
  border-radius: 50% 50% 50% 50%;
  width: 60%;
  height: 80%;
}


</style>

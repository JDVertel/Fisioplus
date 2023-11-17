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
        class="imagenvitrina"
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

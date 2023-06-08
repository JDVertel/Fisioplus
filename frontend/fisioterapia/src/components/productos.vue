<template>
  <div class="row">
 <div class="col-4"   v-for="producto in productos"
      v-bind:key="producto.nombre">
        <div class="card">
          <img src="./../components/images/productos1.jpg" class="imgproducto"  alt="..." />
          <div class="card-img-overlay">
    
            <p class="card-text">
              {{producto.nombre}} <br> <small>${{ producto.precio}}</small> 
            </p>
          
          </div>
        </div>
      </div>
  </div>
   
</template>

<script setup>
import { ref } from 'vue';

let productos= ref([
  {
    img:"",
    nombre:"lazo pára saltar y masajear ",
    precio:"15000"
  },
   {
    img:"",
    nombre:"pelota",
    precio:"20000"
  },
   {
    img:"",
    nombre:"crema",
    precio:"15000"
  },
   {
    img:"",
    nombre:"masajeador",
    precio:"55000"
  },
   {
    img:"",
    nombre:"pesas",
    precio:"35000"
  },
   {
    img:"",
    nombre:"medias",
    precio:"36000"
  },
])

</script>

<style>
.imgproducto{
    height: 55px !important;
    width: 55px !important;
    border-radius: 50%;
}

.card-text{
  text-align: right!important;
  color: rgb(0, 0, 0);
  text-shadow: 1px 1px #fffefe;
}
div.col-4{
  padding: 0px !important;
}
div.card-img-overlay{
  padding: 5px!important;
}

</style>
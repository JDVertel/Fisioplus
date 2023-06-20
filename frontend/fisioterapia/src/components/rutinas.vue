<template>
  <div class="row centrado">
    <div class="col-md-3 col-6"
    v-for="rutina in rutinas"
     :key="rutina.titulo">
        <div class="card">
          <img :src="'/src/assets/images/clasesyrutinas/'+`${rutina.url}`" class="imagenproducto"/>
          <div class="card-img-overlay imagenproducto">
            <h5 class="card-title">{{rutina.titulo}}</h5>
            <p class="card-text">
              {{rutina.texto}}
            </p>
          
          </div>
        </div>
      </div>
    </div> 
</template>

<script setup>
import { ref } from "vue";

let rutinas= ref([

{
  titulo:"Rutinas",
  texto:"This is a wider card with supporting text below as a natural lead-in",
  url:"ejercicios_rutina.jpg",
},
{
  titulo:"ejercicios",
  texto:"This is a wider card with supporting text below as a natural lead-in",
  url:"ejercicios_rutina2.png",
},

]);
</script>





<style>
div.col-6{
  padding: 0.2px !important;

}
.imagenproducto{
  height: 5.3rem !important;
  width: 100% !important;
  
}

</style>
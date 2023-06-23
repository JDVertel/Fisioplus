<template>
  <div class="row centrado">
    <div class="col-md-2 col-6"
    v-for="rutina in rutinas"
     :key="rutina.titulo">
        <div class="card">
          <img :src="'/src/assets/images/clasesyrutinas/'+`${rutina.url}`" class="imagenproducto"/>
          <div class="card-img-overlay imagenproducto">
            <h5 class="card-title">{{rutina.titulo}}</h5>
            <p class="card-text">
              {{rutina.texto}}
            </p>
            <div class="row">
              <div class="col-2">
                <button class="btn btn-primary btn-sm btnwsp" v-on:click="reservaCitasW(rutina.titulo, telefono1)"><v-icon name="bi-whatsapp" /></button>

              </div>

            </div>
          </div>
         
        </div>
      </div>
    </div> 
</template>

<script setup>
import { ref } from "vue";
//telefonos para reservas de citas
let telefono1="3145563439"
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

const reservaCitasW = (link, celular) =>{
  const url = `https://wa.me/${celular}?text=>%20Hola%20me%20interesa%20reservar%20una%20clase%20de%20 ${link}%20desde%20tu%20pagina%20web%20<`;
     window.open(url)
 }


</script>




<style>
div.col-6{
  padding: 0.2px !important;

}
.imagenproducto{
  height: 5.7rem !important;
  width: 100% !important;
  
}



</style>
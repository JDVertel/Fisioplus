<template>
  <div class="row">
    <div
      class="col-6 col-md-2"
      v-for="servicio in servicios"
      :key="servicio.nombre"
    >
      <div class="card">
        <!--  -->
        <img :src="'/src/assets/images/servicios/'+`${servicio.url}`"
        class="card-img-top imagenservicio" />
        <!--  -->
        <div class="card-body">
          <h5 class="card-title">{{ servicio.nombre }}</h5>
          <p class="card-text">
            {{ servicio.desc }}
          </p>
        </div>
        <div class="card-footer">
            <!--  <small class="text-muted">45min</small> -->
          <button type="button" class="btn btn-primary btn-sm">Agendar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let servicios = ref([
  {
    nombre: "Terapia Fisica",
    desc: "ya tres clases y me gusta mucho el enfoque que le das y la forma que tienes de explicar las cosas.",
    url: "terapia_fisica1.png",
  },
  {
    nombre: "Terapia Recuperativa",
    desc: "ermine dejando otros cursos de vue que estaba haciendo por este, explicas muy bien. Excelente curso. g",
    url: "terapia_fisica2.jpg",
  },
  {
    nombre: "terapia Descontracturacion",
    desc: "Excelente explicación como siempre, muchas gracias",
    url: "terapia_fisica3.jpg",
  },
  {
    nombre: "Terapia Estiramiento",
    desc: "de diseño y arquitectura. Me da la impresión que bindiar el atributo style puede hacer enojar a muchos en contra de",
    url: "terapia_fisica4.jpg",
  },
]);
</script>

<style>
.card {
  margin: 0.5rem;
  font-size: 0.7rem;
  border-style: none !important;
  border-color:transparent !important;
}
.card-text {
  font-size: 0.6rem;
  font-style: oblique;
}
.card-title {
  font-size: 0.8rem;
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
div.col-6.col-md-3 {
  padding: 0.2px !important;
}
.imagenservicio{
  height: 99px !important;
  width: 100% !important;
}
div.card-body{
  height: 100px !important;
  width: 100% !important;
}
div.card-footer{
  background-color:#00913D;
}
.btn-primary{
  background-color:#00913D !important;
  border: 1px;
  border-color:white!important ;
}
</style>

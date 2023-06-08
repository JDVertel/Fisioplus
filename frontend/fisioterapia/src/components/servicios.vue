<template>
  <div class="row">
    <div
      class="col-6 col-md-3"
      v-for="servicio in servicios"
      v-bind:key="servicio.nombre"
    >
      <div class="card">
        <img v-bind:src="'./../components/'+ `${servicio.imge}`"
        class="card-img-top" alt="..." />
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
    imge: "images/terapia_fisica1.png",
  },
  {
    nombre: "Terapia Recuperativa",
    desc: "ermine dejando otros cursos de vue que estaba haciendo por este, explicas muy bien. Excelente curso. g",
    imge: "images/terapia_fisica2.png",
  },
  {
    nombre: "terapia Descontracturacion",
    desc: "Excelente explicación como siempre, muchas gracias",
    imge: "images/terapia_fisica3.png",
  },
  {
    nombre: "Terapia Estiramiento",
    desc: "de diseño y arquitectura. Me da la impresión que bindiar el atributo style puede hacer enojar a muchos en contra de",
    imge: "images/terapia_fisica4.png",
  },
]);
</script>

<style>
.card {
  margin: 0.5rem;
  font-size: 0.7rem;
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
</style>

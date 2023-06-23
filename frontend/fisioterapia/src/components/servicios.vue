<template>
  <div class="row centrado">
    <div
      class="col-6 col-md-3"
      v-for="servicio in servicios"
      :key="servicio.nombre"
    >
      <div class="card">
        <!--  -->
        <img
          :src="'/src/assets/images/servicios/' + `${servicio.url}`"
          class="card-img-top imagenservicio"
        />
        <!--  -->
        <div class="card-body">
          <h5 class="card-title">{{ servicio.nombre }}</h5>
          <p class="card-text">
            {{ servicio.desc }}
          </p>
        </div>
        <div class="card-footer">
          <div class="row">
            <div class="col-8 text-center centrado">
              <small class="white"> Precio:${{ servicio.precio }} </small>
            </div>
            <div class="col-4 derecha">
              <button
                type="button"
       
                v-on:click="reservaCitasW(servicio.nombre, telefono1)"
                class="btn btn-primary btn-sm btnwsp"
              >
                <v-icon name="bi-whatsapp" />
              </button>
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


let servicios = ref([
  {
    nombre: "Masaje Espalda",
    desc: "ya tres clases y me gusta mucho el enfoque que le das ",
    precio:"45000",
    url: "terapia_fisica1.png",
  },
  {
    nombre: "Masaje Piernas",
    desc: "ermine dejando otros cursos de vue que estaba haciendo por ",
    precio:"",
    url: "terapia_fisica2.jpg",
  },
  {
    nombre: "Terapia Fisica",
    desc: "Excelente explicación como siempre, muchas gracias",
    precio:"",
    url: "terapia_fisica3.jpg",
  },
  {
    nombre: "Masaje piernas y Espalda",
    desc: "de diseño y arquitectura. Me da la impresión ",
    precio:"",
    url: "terapia_fisica4.jpg",
  },
  {
    nombre: "Hidroterapia",
    desc: "Excelente explicación como siempre, muchas gracias",
    precio:"",
    url: "terapia_fisica3.jpg",
  },
  {
    nombre: "Paquete Mixto",
    desc: "de diseño y arquitectura. Me da la impresión ",
    precio:"",
    url: "terapia_fisica4.jpg",
  },
]);

const reservaCitasW = (link, celular) =>{
 const url = `https://wa.me/${celular}?text=>>>>%20Hola%20me%20interesa%20reservar%20una%20cita%20de%20 ${link}%20desde%20tu%20pagina%20web%20<<<<`;
    window.open(url)
}





</script>

<style>
.card {
  margin: 0.5rem;
  font-size: 0.7rem;
  border-style: none !important;
  border-color: transparent !important;
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
.imagenservicio {
  height: 99px !important;
  width: 100% !important;
  
}
div.card-body {
  height: 100px !important;
  width: 100% !important;
  padding:8px!important ;
}
div.card-footer {
  background-color: #00913d;
}
.btn-primary {
  background-color: #00913d !important;
  border: 1px;
  border-color: white !important ;
}
.centrado {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: row !important;
  flex-wrap: wrap !important;
}

.white {
  color: rgb(255, 255, 255) !important;
  font-size: 0.6rem;
}

.btnwsp{
border-radius: 35px!important;
padding: 4px!important;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1)!important;
}
.derecha {
  text-align: right;
}
.centrado{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  
}
</style>

<template>
  <div class="row">
    <div class="col-md-2 col-4" v-for="producto in productos" :key="producto.nombre">
      <div class="card cproductos">
        <div class="row">
          <div class="col-1"></div>
          <div class="col-4">
            <img
              :src="'/src/assets/images/productos/' + `${producto.img}`"
              class="imgproducto"
            />
          </div>

          <div class="col-4">
            <p class="card-text">
              {{ producto.nombre }} <br />
              <small>${{ producto.precio }}</small>
            </p>
          </div>
          <div class="col-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let productos = ref([
  {
    img: "productos1.jpg",
    nombre: "lazo pára saltar y masajear ",
    precio: "15000",
  },
  {
    img: "producto2.jpg",
    nombre: "pelota",
    precio: "20000",
  },
  {
    img: "producto3.jpg",
    nombre: "crema",
    precio: "15000",
  },
  {
    img: "producto4.jpg",
    nombre: "masajeador",
    precio: "55000",
  },
  {
    img: "producto5.jpg",
    nombre: "pesas",
    precio: "35000",
  },
  {
    img: "producto6.jpg",
    nombre: "medias",
    precio: "36000",
  },
]);
</script>

<style>
.imgproducto {
  height: 55px !important;
  width: 55px !important;
  border-radius: 50%;
  padding: 5px !important;
}

.card-text {
  text-align: right !important;
  color: rgb(0, 0, 0);
  text-shadow: 1px 1px #fffefe;
}
div.col-4 {
  padding: 0px !important;
}
div.card-img-overlay {
  padding: 5px !important;
}
.cproductos{
border: 1px solid #00913D !important; 

}
</style>

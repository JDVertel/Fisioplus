<template>

<div class="row centrado">
    <div class="card mb-3" style="max-width: 540px;" v-for="producto in this.dataproductos" :key="producto.nombre">
        <div class="row g-0">
            <div class="col-4 imagen">
                <img :src="'/src/assets/images/productos/' + `${producto.img}`" class="imagenproducto" />
            </div>
            <div class="col-6">
                <div class="card-body">
                    <h5 class="card-title">{{ producto.nombre }}</h5>
                    <p class="card-text">{{producto.descripcion}}</p>
                    <p class="card-text"><strong class="text-body-secondary">${{ producto.precio }}</strong></p>
                </div>
            </div>
            <div class="col-2 centrado">
                <button class="btn btn-primary btn-sm btnwsp" v-on:click="reservaCitasW(producto.nombre, this.telefono1)">
                    <v-icon name="bi-whatsapp" /></button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    productos
} from './../firebase/bd.js'
export default {

    data: () => ({
        dataproductos: productos,
        telefono1: "3145563439"
    }),
    methods:{
        reservaCitasW(link, celular) {
            const url = `https://wa.me/${celular}?text=>%20Hola%20me%20interesa%20informacion%20acerca%20del%20producto%20( ${link} )%20desde%20tu%20pagina%20web%20<`;
            window.open(url)
        }

    }

}
</script>


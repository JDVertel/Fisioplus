<template>

<div class="row centrado">
    <div class="card mb-3" style="max-width: 540px;" v-for="producto in this.dataproductos" :key="producto.nombre">
        <div class="row g-0">
            <div class="col-4 imagen">
                <img :src="'/src/assets/images/productos/' + `${producto.img}`" class="imgproducto" />
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

<style scoped>
.imgproducto {
    height: 80px !important;
    width: 80px !important;

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

.cproductos {
    border: 1px solid #00913D !important;

}

.hvrule {
    padding: 5px;
    margin: 5px;

}
.imagen{
    display: flex;
    justify-content: center;
    align-items: center;

}
.centrado {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex-direction: row !important;
    flex-wrap: wrap !important;
}
</style>

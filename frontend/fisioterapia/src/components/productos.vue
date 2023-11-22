<template>
<div class="container">
    <div class="row">
        <div class="col-2 col-md-2 Cproductos" v-for="(producto, index) in this.dataproductos" :key="index">

            <div class="card" data-bs-toggle="modal" data-bs-target="#ModalProductos" @click="detalles(index)">

            

                <div class="card-body">
                    <img :src="'/src/assets/images/productos/' + `${producto.img}`" class="imagenproducto" />
                </div>
                <div class="card-footer" >
                    <p class="
                    Cjz">{{ producto.nombre}}</p>
                </div>
            </div>

        </div>

    </div>
</div>
<!--  -->
<div class="modal fade" id="ModalProductos" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Detalle del Producto</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ">
                <div class="container detallesCard">

                    <div class="display-6"> <strong>
                            {{this.tituloP}}
                        </strong> </div>

                    <img :src="'/src/assets/images/productos/' + `${this.imagenP}`" class="imgP" />
                    {{ this.detalleP }}
                </div>
            </div>
            <div class="modal-footer">
                <strong>$ {{ this.precioP }}</strong>
                <div class="col-2 centrado">
                    <button class="btn btn-primary btn-sm btnwsp" v-on:click="reservaCitasW(this.tituloP, this.telefono1)">
                        <v-icon name="bi-whatsapp" /></button>
                </div>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>

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
        telefono1: "3145563439",
        imagenP: "",
        tituloP: "",
        detalleP: "",
        precioP: "",

    }),
    methods: {
        reservaCitasW(link, celular) {
            const url = `https://wa.me/${celular}?text=>%20Hola%20me%20interesa%20informacion%20acerca%20del%20producto%20( ${link} )%20desde%20tu%20pagina%20web%20<`;
            window.open(url)
        },

        detalles(id) {

            this.imagenP = this.dataproductos[id].img,
                this.tituloP = this.dataproductos[id].nombre,
                this.detalleP = this.dataproductos[id].descripcion,
                this.precioP = this.dataproductos[id].precio,
                console.log(this.detalleP);

        }

    }

}
</script>

<template>
<div class="container">
    <div class="row">
        <div class="col-6  col-sm-4 col-md-2 Cproductos" v-for="(producto, index) in this.dataproductos" :key="index">
            <div class="card vitrinaCard" data-bs-toggle="modal" data-bs-target="#ModalProductos" @click="detalles(index)">

                <img :src="'/src/assets/images/productos/' + `${producto.img}`" class="imagenproducto" />

                <div class="modal-footer">
                    <div class="col-12">
                        <p class="text-center"> {{ producto.nombre}}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
<!--  -->
<div class="modal fade" id="ModalProductos" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5 display-6" id="staticBackdropLabel"> {{this.tituloP}}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ">
                <div class="container detallesCard">

                    <img :src="'/src/assets/images/productos/' + `${this.imagenP}`" class="imgP" />
                    <hr>
                    {{ this.detalleP }}
                </div>
            </div>
            <div class="modal-footer">
                <strong>$ {{ this.precioP }}</strong>
                <div class="col-2 centrado">
                    <button class="btn btn-primary btn-sm btnwsp" v-on:click="reservaCitasW(this.tituloP, this.telefono1)">
                      </button>
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
} from '../../firebase/bd'
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
            this.imagenP = this.dataproductos[id].img;
            this.tituloP = this.dataproductos[id].nombre;
            this.detalleP = this.dataproductos[id].descripcion;
            this.precioP = this.dataproductos[id].precio;
            return

        }

    }

}
</script>

<template>
<div class="row row-cols-2 row-cols-md-3 row-cols-xl-6 g-4">
    <div class="col" v-for="(producto, index) in this.dataproductos" :key="index">
        <div class="card h-100">
            <img :src="'/src/assets/images/productos/' + `${producto.img}`" class="card-img-top imagenservicio" alt="...">
            <div class="card-body">
                <h5 class="card-title producttitlecolor">{{producto.nombre}}</h5>
                <p class="card-text"> {{ producto.descripcion }}</p>

                <div class="card-footer">
                    {{ producto.precio }}
                    <button type="button" v-on:click="reservaCitasW(producto.nombre, this.telefono1)" class="btnwsp">
                        <img width="20" height="20" src="https://img.icons8.com/fluency/48/whatsapp.png" alt="whatsapp" />
                    </button>
                </div>
            </div>
        </div>
    </div>

</div>

<!-- <div class="container">
    <div class="row">

        <div class="col-6 col-sm-4 col-md-4 col-xl-2 cardservicios" v-for="(producto, index) in this.dataproductos" :key="index">
            <div class="card">
                <div class="centrado">
                    <img width="80" height="30" :src="'/src/assets/images/productos/' + `${producto.img}`" class="imagenproducto" />
                </div>
                <div class="cardbody">
                    <h5 class="card-title titleservice"> {{producto.nombre}}</h5>
                    <p class="card-text">
                        {{ producto.descripcion }}
                    </p>

                </div>
                <div class="card-footer_tienda">
                    <div class="row">
                        <div class="col-8 text-center centrado">
                            <strong> Precio: $ {{ producto.precio }}</strong>
                        </div>
                        <div class="col-4 centrado">
                            <button class="btn btn-primary btn-sm btnwsp" v-on:click="reservaCitasW(producto.nombre, this.telefono1)">
                                <img width="20" height="20" src="https://img.icons8.com/fluency/48/whatsapp.png" alt="whatsapp" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div> -->
<!--  -->
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

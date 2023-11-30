<template>
<div class="container">

    <div class="row centrado">

        <div class="col-6 col-sm-6 col-md-4" v-for="rutina in this.datarutinas" :key="rutina.titulo">
            <div class="card cardclases mb-3 ">
                <img :src="'/src/assets/images/clasesyrutinas/'+`${rutina.url}`" class="imagenrutina" />
                <div class="card-body">
                    <h5 class="card-title">{{rutina.titulo}} </h5>
                    <p class="card-text">{{rutina.texto}}</p>
                    <hr>
                    <div class="clasesfooter">
                        <div class="row">
                            <div class="col-6 centrado">  <p class="card-text" ><strong>Precio: ${{rutina.precio}}</strong></p></div>
                            <div class="col-6 centrado ">
                                <button class="btn btn-primary btn-sm btnwsp" v-on:click="reservaCitasW(rutina.titulo, this.telefono1)">
                                    <v-icon name="bi-whatsapp" /></button>
                            </div>
                        

                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    rutinas
} from './../firebase/bd'

export default {
    data: () => ({
        datarutinas: rutinas,
        //telefonos para reservas de citas
        telefono1: "3145563439"

    }),
    methods: {
        //link wps
        reservaCitasW(link, celular) {
            const url = `https://wa.me/${celular}?text=>%20Hola%20me%20interesa%20reservar%20una%20clase%20de%20( ${link} )%20desde%20tu%20pagina%20web%20<`;
            window.open(url)
        }
    }
}
</script>

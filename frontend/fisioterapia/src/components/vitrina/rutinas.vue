<template>


    <div class="row centrado">
        <div class="col-6 col-sm-4 col-md-4 col-xl-2 cardservicios" v-for="rutina in this.datarutinas" :key="rutina.titulo">
            <div class="card">
                <img :src="'/src/assets/images/clasesyrutinas/'+`${rutina.url}`" class="imagenrutina" />
                <div class="card-body bodyservicios">
                    <h5 class="card-title">{{rutina.titulo}} </h5>
                    <p class="card-text">{{rutina.texto}}</p>
                </div>
                <div class="card-footer_rutinas">
                    <div class="row">
                        <div class="col-8 text-center centrado">
                            <p class="card-text" style="color: aliceblue;"><strong>Precio: ${{rutina.precio}}</strong></p>
                        </div>
                        <div class="col-4 centrado">
                            <button class="btn btn-primary btn-sm btnwsp" v-on:click="reservaCitasW(rutina.titulo, this.telefono1)">
                                <img width="20" height="20" src="https://img.icons8.com/fluency/48/whatsapp.png" alt="whatsapp" /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<br>

</template>

<script>
import {
    rutinas
} from '../../firebase/bd'

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

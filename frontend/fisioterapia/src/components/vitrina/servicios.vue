<template>
<div class="row centrado">
    <div class="col-6 col-sm-4 col-md-4 col-xl-2 cardservicios" v-for="servicio in this.dataservicios" :key="servicio.nombre">
        <div class="card ">
            <!--  -->
            <img :src="'/src/assets/images/servicios/' + `${servicio.url}`" class="card-img-top imagenservicio" />
            <!--  -->
            <div class="card-body bodyservicios">

                <h5 class="card-title titleservice"> {{ servicio.nombre }}</h5>

                <p class="card-text">
                    {{ servicio.desc }}

                </p>
            </div>
            <div class="card-footer">
                <div class="row">
                    <div class="col-8 text-center centrado">
                        <strong class="white"> Precio: ${{ servicio.precio }} </strong>
                    </div>
                    <div class="col-4 centrado">
                        <button type="button" v-on:click="reservaCitasW(servicio.nombre, telefono1)" class="btn btn-primary btn-sm btnwsp">
                      
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
<br>
<br>

</template>

<script>
import {
    servicios
} from "../../firebase/bd";


export default {
    data: () => ({
        dataservicios: servicios,
        telefono1: "3145563439"

    }),

    methods: {
        reservaCitasW(link, celular) {
            const url = `https://wa.me/${celular}?text=>>>>%20Hola%20me%20interesa%20reservar%20una%20cita%20de%20( ${link} )%20desde%20tu%20pagina%20web%20<<<<`;
            window.open(url)
        }

    }

}
</script>

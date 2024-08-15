<template>
<div class="row row-cols-2 row-cols-md-4 row-cols-xl-6 g-4">
    <div class="col" v-for="servicio in serviciosFiltrados" :key="servicio.nombre">
        <div class="card h-100">
            <img :src="`${servicio.img}`" class="card-img-top imagenservicio" alt="...">
            <div class="card-body">
                <h5 class="card-title serviciostitlecolor">{{ servicio.nombre }}</h5>
                <p class="card-text"> {{ servicio.desc }}.</p>
                <div class="card-footer">
                    <small class="text-body-secondary">$ {{ servicio.precio }}</small> <button type="button" v-on:click="reservaCitasW(servicio.nombre, this.telefono1)" class="btnwsp">
                        <img width="20" height="20" src="https://img.icons8.com/fluency/48/whatsapp.png" alt="whatsapp" />
                    </button>
                </div>
            </div>
        </div>
    </div>

</div>


</template>

<script>
/* import {
    servicios
} from "../../firebase/bd"; */

import {
    mapActions,
    mapState
} from "vuex";

export default {
    data: () => ({
        /*   dataservicios: servicios, */
        telefono1: "3145563439"

    }),

    methods: {
        ...mapActions('vitrina', ['load_Vitrina', 'updateVitrinaP', 'updateVitrinaS', 'createEntradaVitrina', 'DeleteItemVitrina', 'CambiarEstadoVitrina']),

        
        reservaCitasW(link, celular) {
            const url = `https://wa.me/${celular}?text=>>>>%20Hola%20me%20interesa%20reservar%20una%20cita%20de%20( ${link} )%20desde%20tu%20pagina%20web%20<<<<`;
            window.open(url)
        },
    },

        computed: {
            ...mapState({
                serviciosFiltrados: state => state.vitrina.entry.filter(v => (v.tipo == 'terapia'  ||  v.tipo == 'consulta')  &&  v.publicado==true)
            }),
        },

        created() {
        this.load_Vitrina()

    },


}
</script>

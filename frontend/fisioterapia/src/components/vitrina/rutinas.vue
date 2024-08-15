<template>
    <div class="row row-cols-2 row-cols-md-4 row-cols-xl-6 g-4">
    <div class="col" v-for="rutina in  clasesFiltradas" :key="rutina.nombre">
        <div class="card h-100">
            <img :src="`${rutina.img}`" class="card-img-top imagenservicio" alt="...">
            <div class="card-body">
                <h5 class="card-title rurinatitlecolor">{{rutina.nombre}} </h5>
                <p class="card-text">{{rutina.desc}}</p>
                <div class="card-footer">
               ${{rutina.precio}}
                <button type="button" v-on:click="reservaCitasW(rutina.nombre, this.telefono1)" class="btnwsp">
                    <img width="20" height="20" src="https://img.icons8.com/fluency/48/whatsapp.png" alt="whatsapp" /> </button>
            </div>
        </div>
        </div>
    </div>

</div>


</template>

<script>
/* import {
    rutinas
} from '../../firebase/bd' */
import {
    mapActions,
    mapState
} from "vuex";

export default {
    data: () => ({
    
        //telefonos para reservas de citas
        telefono1: "3145563439"

    }),
    methods: {
        ...mapActions('vitrina', ['load_Vitrina', 'updateVitrinaP', 'updateVitrinaS', 'createEntradaVitrina', 'DeleteItemVitrina', 'CambiarEstadoVitrina']),



        //link wps
        reservaCitasW(link, celular) {
            const url = `https://wa.me/${celular}?text=>%20Hola%20me%20interesa%20reservar%20una%20clase%20de%20( ${link} )%20desde%20tu%20pagina%20web%20<`;
            window.open(url)
        }
    },
    computed: {
        ...mapState({
            clasesFiltradas: state => state.vitrina.entry.filter(v => (v.tipo === 'clase' ) && v.publicado==true)
        }),
    },
}
</script>

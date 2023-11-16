<template>
<div class="row centrado">
    <div class="col-6 col-md-2 cardservice" v-for="servicio in this.dataservicios" :key="servicio.nombre">
        <div class="card">
            <!--  -->
            <img :src="'/src/assets/images/servicios/' + `${servicio.url}`" class="card-img-top imagenservicio" />
            <!--  -->
            <div class="card-body">
                <h5 class="card-title">{{ servicio.nombre }}</h5>
                <p class="card-text">
                    {{ servicio.desc }}
                </p>
            </div>
            <div class="card-footer">
                <div class="row">
                    <div class="col-8 text-center centrado">
                        <strong class="white"> Precio: ${{ servicio.precio }} </strong>
                    </div>
                    <div class="col-4 derecha">
                        <button type="button" v-on:click="reservaCitasW(servicio.nombre, telefono1)" class="btn btn-primary btn-sm btnwsp">
                            <v-icon name="bi-whatsapp" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    servicios
} from "../firebase/bd";
//telefonos para reservas de citas

// link wsp

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

<style>
.cardservice{
    padding: 0.2rem!important;
}
.card {
    margin: 0.5rem;
    font-size: 0.7rem;
    border-style: none !important;
    border-color: transparent !important;
}

.card-text {
    font-size: 0.6rem;
    font-style: oblique;
}

.card-title {
    font-size: 0.8rem;
}

.card-footer {
    font-size: 0.7rem;
}

.card-body {
    padding: 5px;
}

.col-6 {
    padding: 2px;
}

div.col-6.col-md-3 {
    padding: 0.2px !important;
}

.imagenservicio {
    height: 99px !important;
    width: 100% !important;

}

div.card-body {
    height: 100px !important;
    width: 100% !important;
    padding: 8px !important;
}

div.card-footer {
    background-color: #00913d;
}

.btn-primary {
    background-color: #00913d !important;
    border: 1px;
    border-color: white !important;
}

.centrado {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex-direction: row !important;
    flex-wrap: wrap !important;
}

.white {
    color: rgb(255, 255, 255) !important;
    font-size: 0.9rem;
}

.btnwsp {
    border-radius: 35px !important;
    padding: 4px !important;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1) !important;
}

.derecha {
    text-align: right;
}

.centrado {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;

}
.card{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    border-radius: 5px;
}
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
</style>

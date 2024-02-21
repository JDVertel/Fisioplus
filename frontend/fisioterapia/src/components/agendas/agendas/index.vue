<template>
<div class="container">
    <!--             <div class="container">
                <div class="row">
                    <div class="col-2"><button class="btn btn-success">-</button></div>
                    <div class="col-8">
                        <h6 class="centrado titulo">Agendas del dia</h6>
                    </div>
                    <div class="col-2"><button class="btn btn-success">+</button></div>
                </div>
            </div> -->

    <div class="container">
        <div class="sidebar">
            <br>

            <ol class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">04/02/2024</div>
                        Agenda de Fisioterapia
                    </div>
                    <span class="badge bg-primary rounded-pill">18</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">04/02/2024</div>
                        Agenda de masajes
                    </div>
                    <span class="badge bg-primary rounded-pill">23</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">04/02/2024</div>
                        Agenda de consultas
                    </div>
                    <span class="badge bg-primary rounded-pill">2</span>
                </li>
            </ol>
        </div>
    </div>

    <div class="body">
        <br>
        <h6>Detalles</h6>
        <hr>

    </div>
    <router-link to="/dashboard">Home</router-link>

</div>
</template>

<script>
import {
    mapActions
} from "vuex";
import {
    ref
} from "vue";

export default {

    data: () => ({

    }),
    methods: {
        ...mapActions('Agendas', ['load_Agendas'])
    },

    created() {
        this.load_Agendas()
    }

}

/* agenda del dia */

/* reservas */

let reserva = ref({
    tipocita: "",
    horacita: "",
    fechacita: "",
});

/* informes */

let informes = ref({
    f_inical: "",
    f_final: "",
    tipoinf: "Seleccione",
});

/* agendar dia para citas */

let agendamiento = ref({
    dia: "",
    h_inicial: "",
    h_final: "",
});

/* tipos de citas */
let tipocitas = ref([{
        nombre: "masaje espalda",
        duracion: "45",
        costo1: "",
        costo2: "",
        color: "",
    },
    {
        nombre: "masaje pierna",
        duracion: "",
        costo1: "",
        costo2: "",
        color: "",
    },
    {
        nombre: "terapia fisica",
        duracion: "",
        costo1: "",
        costo2: "",
        color: "",
    },
]);

let nuevacita = ref({
    nombre: "",
    duracion: "",
    costo1: "",
    costo2: "",
    color: "",
});
</script>

<style>

</style>

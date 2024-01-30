<template>
    <div class="container">

   
<section class="layout">
    <div class="container">
        <div class="sidebar">
            <br>
            <div class="container">
                <div class="row">
                    <div class="col-2"><button class="btn btn-success">-</button></div>
                    <div class="col-8">
                        <h6 class="centrado titulo">Agendas del dia</h6>
                    </div>
                    <div class="col-2"><button class="btn btn-success">+</button></div>
                </div>
            </div>

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

        <div class="table-responsive">
            <table class="table table-sm">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Hora</th>

                        <th>Nombre</th>
                        <th>Telefono</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>

                        <td>@mdo</td>
                        <td>
                            <div class="col-4 fechas">
                                <button class="btn btn-primary btn-sm textarea radius" type="submit">
                                    <v-icon name="hi-check" />
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Otto</td>
                        <td>@mdo</td>

                        <td>Mark</td>
                        <td>@mdo</td>
                        <td>
                            <div class="col-4 fechas">
                                <button class="btn btn-primary btn-sm textarea radius" type="submit">
                                    <v-icon name="hi-check" />
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Otto</td>
                        <td>Mark</td>
                        <td>Mark</td>

                  
                        <td>@mdo</td>
                        <td>
                            <div class="col-4 fechas">
                                <button class="btn btn-primary btn-sm textarea radius" type="submit">
                                    <v-icon name="hi-check" />
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
    <router-link to="/dashboard">Home</router-link>
</section>
     </div>
</template>

<script>
import {
    ref
} from "vue";
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
.layout {
    width: 100%;

    display: grid;
    grid:
        "sidebar body"1fr / auto 1fr;
    gap: 8px;
}

.sidebar {
    grid-area: sidebar;
}

.body {
    grid-area: body;
}
</style>

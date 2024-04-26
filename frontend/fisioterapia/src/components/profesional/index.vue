<template>
<div class="container-fluid">

    <!--  pagina de profesional
    llegan ( idprofesional - id_ips- tipoagenda)
    se cargan de entrada citas del profesional en el dia actual
    renderiza tabla y cada registro debe tener el campo de asistir y opcion de llenar hc usar el store de AUTH para registro y el de HC Para el resto de hc -->

    <div class="card w-100 mt-3 mb-3">
        <div class="card-body">
            <h5 class="card-title centrado">Agenda del Dia </h5>
            <div class="row">
                <div class="col-2">
                    <img src="..." class="img-thumbnail centrado" alt="...">
                </div>
                <div class="col-10">

                    <p>profesional: Ramon jose vertel </p>

                    <div class="row">
                        <div class="col-6 col-md-3">
                            <p>Servicio: consulta </p>
                        </div>
                        <div class="col-6 col-md-3">
                            <p>Fecha: {{this.fechaHoy}} </p>
                        </div>
                        <div class="col-6 col-md-3">
                            <p>Ips: rehabilitacion erika jasmin </p>
                        </div>
                        <div class="col-6 col-md-3">
                            <p>Nit: 123456 </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="card w-100 mb-3">
        <div class="card-body">
            <h5 class="card-title">Citas</h5>
            <p class="card-text">Pacientes Agendados el dia de hoy </p>

            <table class="table table-striped table-sm ">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">Hora</th>
                        <th scope="col">Paciente</th>
                        <th scope="col">Celular</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cita in this.dataCitas" :key="cita.id">
                        <td>{{cita.hora}}</td>
                        <td>{{cita.paciente}}</td>
                        <td>{{cita.telpaciente}}</td>
                        <td><button type="button" class="btn btn-danger btn-sm">X</button><button type="button" class="btn btn-primary btn-sm">OK</button></td>
                    </tr>

                </tbody>
            </table>
            <!--             <a href="#" class="btn btn-primary">Button</a> -->
        </div>
    </div>

    <p class="d-inline-flex gap-1">
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Historial
        </a>

    </p>
    <div class="collapse" id="collapseExample">
        <div class="card card-body">
            <table class="table table-striped table-sm ">
                <thead class="table-info">
                    <tr>
                        <th scope="col">Hora</th>
                        <th scope="col">Paciente</th>
                        <th scope="col">Celular</th>
                        <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
<br>
<br>
<div class="container home">
    <router-link to="/dashboard">Home</router-link>
</div>
</template>

<script>
import {
    mapActions,
    mapState
} from 'vuex';
import moment from "moment";
export default {
    data: () => ({
        fechaHoy: "",
        idIPS: "1",
        idProfesional: "",
        idAgenda: "",
        /* ------------------------------ */
        paramsGetAllcitas: [],

    }),
    methods: {
        ...mapActions('Agendas', ['getDatabyParam']),

        async GetAllCitasDia() {
            this.paramsGetAllcitas = [{
                bd: "citas",
                parametro: "fecha",
                valor: this.fechaHoy,
                rta: "setStateCitas",
            }]
            await this.getDatabyParam(this.paramsGetAllcitas)

        },

        fijarfechadia() {
            const ListAgendas = this.diaformatedfecha;
            this.fechaHoy = ListAgendas;
        },

        Asistencia_OptionCharge(numdoc,idagenda) {
            if (this.asistencia === "1") {
                console.log("asistio", numdoc);
            } else if (this.asistencia === "2") {
                console.log("no asistio", idagenda)
            }
        },

    },
    computed: {
        ...mapState('Agendas', ['dataCitas', ]),
        /*     ...mapState('Auth', []),

 */
        diaformatedfecha() {
            return moment(new Date).format('YYYY-MM-DD');
        },

    },

    created() {
        this.fijarfechadia();
        this.GetAllCitasDia();
    }
}
</script>

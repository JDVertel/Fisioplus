<template>
<!-- <hr>
    datos de store
{{ id_ips }}-----{{ rol }}---{{ info }}
{{ dataprofesionales }}
<hr>
{{ dataCitas }} -->
<div class="container">
    <div class="body">
        <br>
        <h6>Detalles</h6>
        <hr>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Agendas del Sistema</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">+ Gestionar - </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Parametros</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" disabled>Disabled</button>
            </li>
        </ul>
        <div class="container">
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">

                    <!--  -->
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

                    <!--  -->
                </div>
                <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                    <br>
                    <h1 class="display-6">Adicionar un Nueva agenda</h1>
                    <div class="container">
                        <div class="row">

                            <div class="col-6 col-md-3"><select class="form-select form-select-sm" aria-label="Small select example" v-model="t_reserva" @change=" filtarProf()">
                                    <option selected value="">Tipo de Reserva</option>
                                    <option value="terapia">Terapia</option>
                                    <option value="consulta">Consulta</option>
                                    <option value="clase">Clase</option>
                                </select></div>

                            <div class="col-6 col-md-3">
                                <select class="form-select form-select-sm textarea" id="inputGroupSelect02" v-model="p_reserva" @change="filtrarFechasByProf()">
                                    <option selected value="">Profesional</option>
                                    <option v-for="profactivo in this.profactivos" :key="profactivo.id" :value="profactivo.id">{{profactivo.name1}} {{profactivo.apell1}}</option>
                                </select>
                            </div>
                            <div class="col-6 col-md-3">
                                <div class="input-group input-group-sm mb-3">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">Fecha</span>
                                    <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model="fecha_agenda" >
                                </div>
                            </div>
                            <div class="col-6 col-md-3"><button type="button" class="btn btn-primary btn-sm" @click="GuardarAgenda()" :disabled="isButtonDisabled" >+ Adicionar</button></div>
                        </div>
                    </div>
                    <hr>
                    GuardarAgenda()
                    <h3 class="display-6">Listado de agendas del profesional </h3>

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">fecha</th>
                                <th scope="col">clase</th>
                                <th scope="col">Asignadas</th>

                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="fecha in fechasActivas" :key="fecha.id">
                                <td>{{fecha.fecha}}</td>
                                <td>{{fecha.clase}}</td>
                                <td>ok</td>

                                <td>
                                    <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                        <button type="button" class="btn btn-danger">X </button>
                                        <button type="button" class="btn btn-warning">Edit</button>
                                        <button type="button" class="btn btn-success">Reasig</button>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>
                <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">2

                    <hr>

                    crear y eliminar un tipo de agenda (bloquear)
                </div>
                <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">3</div>
            </div>

        </div>

    </div>
    <br>
    <router-link to="/dashboard">Home</router-link>

</div>
</template>

<!-- ======================================================================================== -->

<script>
import {
    mapActions,
    mapGetters,
    mapState,
} from "vuex";
import moment from 'moment';
export default {
    /* --------------------------------------------------------------------------------------------------- */
    data: () => ({
        t_reserva: "",
        profactivos: "",
        paramsgetAllAgendas: [],
        p_reserva: "",
        fechasActivas: "",
        fecha_agenda: "",
        params_GuardarFechaAgenda: [],

    }),
    /* --------------------------------------------------------------------------------------------------- */

    methods: {

        ...mapActions('Agendas', ['getDataUsersbyParam', 'getDataByRangoSuperior', 'CreateAgendaNueva','getDatabyParam']),

        BuscarProfesionales() {
            this.paramsProfesionales = [{
                bd: "profesionales",
                parametro: "id_ips",
                valor: this.id_ips,
                rta: "setStateProfesionales"
            }]
            this.getDataUsersbyParam(this.paramsProfesionales);
            this.filtarFechas()
        },

        filtarProf() {
            console.log(this.t_reserva)
            this.profactivos = this.dataprofesionales.filter(profesional => profesional.tipo == this.t_reserva)
            console.log(this.profactivos)

        },
        /* ---------------------------------------------------------- */
        filtarFechas() {
            const fecha = this.fechahoy()

            this.paramsFechasCitas = [{
                bd: "agendas",
                parametro: "fecha",
                valor: fecha,
                rta: "setStateCitas"
            }]
            this.getDataByRangoSuperior(this.paramsFechasCitas);

        },
        /*  */
        fechahoy() {
            const date = new Date();
            const options = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            };
            const formatter = new Intl.DateTimeFormat('es-ES', options);
            const formattedDate = formatter.format(date);
            return formattedDate
        },




        filtrarFechasByProf() {
                this.fechasActivas = this.dataCitas.filter(registro => registro.id_profesional === this.p_reserva && registro.clase === this.t_reserva);

            console.log("Fechas Activas:", this.fechasActivas[0]);
        },
        /* -------------------------------------------------------------------------------------------------------------------------------------- */
        GuardarAgenda() {
            this.params_GuardarFechaAgenda = [{
                id_profesional: this.p_reserva,
                fecha: this.formattedDate,
                Id_ips: this.id_ips,
                clase: this.t_reserva,
                bd: "agendas",
                /*        rta: "UpdateStateCitas" */
            }]
            this.CreateAgendaNueva(this.params_GuardarFechaAgenda[0]);
           this.VerListadoAgendas() 
        },

        /*  */
        async VerListadoAgendas() {
            this.params_Agendas_Dia = [{
                bd: "agendas",
                parametro: "id_profesional",
                valor: this.p_reserva,
                rta: "setStateAgendas"
            }]
            this.desord_ListaCitasDia = await this.getDatabyParam(this.params_Agendas_Dia[0]);
            //ordenamos la cita por hora
        },


     

    },

    /* --------------------------------------------------------------------------------------------------- */
    computed: {
        ...mapState('Auth', ['user', 'id_ips', 'rol', 'info', ]),
        ...mapState('Agendas', ['dataprofesionales', 'dataCitas']),

        formattedDate() {
            return moment(this.fecha_agenda).format('DD/MM/YYYY');
        },

        isButtonDisabled() {
            return !this.t_reserva || !this.p_reserva || !this.fecha_agenda;
        }

    },
    /* --------------------------------------------------------------------------------------------------- */
    created() {
        this.BuscarProfesionales()
    }
    /* --------------------------------------------------------------------------------------------------- */
}
</script>

<style>

</style>

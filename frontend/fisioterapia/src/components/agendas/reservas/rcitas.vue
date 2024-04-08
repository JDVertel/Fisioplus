<template>
datos del store auth
<hr>
{{ user }}
<hr>

<hr>
id_ips :{{ id_ips }} - id_user: {{ id_user }}- rol: {{ rol }}- info:{{ info }}
<hr>
{{ dataCitas }}

<br>
<div>

    <div class="container">
        <h6 class="display-6">Realizar una reserva </h6>
        <h6>Buscar o crear un usuario</h6>

        <div class="row">
            <div class="col-3">
                <select class="form-select form-select-sm textarea" id="inputGroupSelect01" v-model="B_tipodoc">
                    <option selected value="">Tipo</option>
                    <option value="cc">CC</option>
                    <option value="ti">TI</option>
                    <option value="ce">CE</option>
                    <option value="pa">PASAPORTE</option>
                </select>
            </div>
            <div class="col-4">
                <input type="number" class="form-control form-control-sm textarea" id="text_numdoc" placeholder="Numero Documento" v-model="B_numdoc" />
            </div>
            <div class="col-3 ">
                <button class="btn btn-success btn-sm" @click="Buscarpaciente">Buscar</button>
            </div>

            <div class="col-2 text-center">
                <!--    <button class="btn btn-warning btn-sm">+</button> -->
            </div>
        </div>
    </div>

    <!--  aqui componente de registro de usuario -->
    <div v-if="this.existepaciente == 2">
        <registroPaciente />
    </div>
    <br>
    <div class="container" v-if="this.existepaciente == 1">

        <div class="card">
            <div class="card-header">
                Datos del usuario
            </div>
            <table class="table table-sm">
                <thead>
                    <tr>
                        <th>Documento</th>
                        <th>Nombre</th>

                        <th>Opc</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="pac in datapaciente" :key="pac.id">
                        <td>{{pac.numdoc}}</td>
                        <td>{{pac.name1}} {{pac.apell1}}</td>
                        <td> <button class="btn btn-success btn-sm" @click=" BuscarProfesionales">Reservar</button> <button class="btn btn-success btn-sm" @click=" Verhistorial">Historial</button></td>
                    </tr>
                </tbody>

            </table>
        </div>

        <br>

        <div class="container" v-if="existeprofesionales">
            <div class="row">

                <h6 class="display-6">Seleccione tipo y fecha de consulta </h6>
                <div class="row">
                    <div class="col-6 col-md-3"> <select class="form-select form-select-sm textarea" id="inputGroupSelect01" v-model="t_reserva" @change="filtarProf()">
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
                        <select class="form-select form-select-sm textarea" id="inputGroupSelect03" v-model="f_reserva">
                            <option selected value="">Dia de reserva</option>
                            <option v-for="fecha in this.fechasActivas" :key="fecha.id" :value="fecha.id">{{fecha.fecha}} </option>
                        </select>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="row">
                            <div class="col-4">

                                <select class="form-select form-select-sm textarea" id="inputGroupSelectHora">
                                    <option selected>H</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            <div class="col-4">
                                <select class="form-select form-select-sm textarea" id="inputGroupSelectMin">
                                    <option selected>M</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                    <option value="40">40</option>
                                    <option value="50">50</option>
                                </select>
                            </div>
                            <div class="col-4">
                                <select class="form-select form-select-sm textarea" id="inputGroupSelectJornada">
                                    <option selected>J</option>
                                    <option value="am">AM</option>
                                    <option value="pm">PM</option>
                                </select>
                            </div>
                            <div class="col3"></div>
                        </div>

                    </div>
                    <button type="button " class="btn btn-success btn-sm">Reservar</button>
                </div>
                <br>
                <div class="container">
                    <h6 class="display-6">Agenda del tipo y dia seleccionado</h6>
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th scope="col">fecha</th>
                                <th scope="col">hora</th>
                                <th scope="col">nombre</th>
                                <th scope="col">tipo</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
    <router-link to="/dashboard">Home</router-link>
</div>
</template>

<!-- --------------------------------------------------------------------------------------------------- -->

<script>
import registroPaciente from '@/components/usuarios/registro.vue'

import {
    mapActions,
    mapState,
} from 'vuex';

export default {

    data: () => ({
        //Auth
        //parametros de consulta de paciente
        B_tipodoc: "",
        B_numdoc: "",
        id: "",
        //formulario de reservas---
        t_reserva: "",
        p_reserva: "",
        f_reserva: "",
        profactivos: "",

        //-----------------------------
        //  list  -  parametro - valor
        //parametros de consulta pacientes
        paramsPaciente: [],
        //parametros de consulta profesionales
        paramsProfesionales: [],
        //parametros para buscar citas por fechas
        paramsFechasCitas: [],
        //--------------agendamiento
        fechasActivas: "",

    }),

    /* --------------------------------------------------------------------------- */

    components: {
        registroPaciente,
    },

    /* ------------------------------------------------------------------------ */

    methods: {
        ...mapActions('Agendas', ['getDatabyParam', 'loadProfesionales', 'getDataByRangoSuperior', ]),

        Buscarpaciente() {
            const idpaciente = this.B_tipodoc + this.B_numdoc;
            this.paramsPaciente = [{
                bd: "pacientes",
                parametro: "numdoc",
                valor: idpaciente,
                rta: "setStatePaciente"
            }]
            this.getDatabyParam(this.paramsPaciente);
        },

        BuscarProfesionales() {
            this.paramsProfesionales = [{
                bd: "profesionales",
                parametro: "id_ips",
                valor: this.id_ips,
                rta: "setStateProfesionales"
            }]
            this.getDatabyParam(this.paramsProfesionales);
            this.filtarFechas()
        },

        filtarProf() {
            console.log(this.t_reserva)
            this.profactivos = this.dataprofesionales.filter(profesional => profesional.tipo == this.t_reserva)
            console.log(this.profactivos)

        },

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
        }

    },

    /* 
    ------------------------------------------------------------------------ */
    computed: {

        ...mapState('Agendas', ['datapaciente', 'existepaciente', 'dataprofesionales', 'existeprofesionales', 'dataCitas']),
        ...mapState('Auth', ['user', 'id_ips', 'id_user', 'rol', 'info']),

    },

    /* ------------------------------------------------------------------------ */

    created() {

    },

}
</script>

<template>
<!-- datos del store auth
<hr>
{{ user }}
<hr>

<hr>
id_ips :{{ id_ips }} - id_user: {{ id_user }}- rol: {{ rol }}- info:{{ info }}
<hr>

<hr>
{{ datapaciente }}
<hr> -->

<div class="container">

    <div class="container centrado mt-5">
        <h6 class="display-5">Reservas</h6>
    </div>
    <hr>
    <div class="card text-left">
        <div class="card-body">
            <h5 class="card-title">Realizar una reserva </h5>
            <p class="card-text">Ingrese la identificacion del paciente</p>
            <br>
            <div class="row">
                <div class="col-4 col-md-3">
                    <select class="form-select form-select-sm textarea" id="inputGroupSelect01" v-model="B_tipodoc">
                        <option selected value="">Tipo Doc</option>
                        <option value="CC">CC</option>
                        <option value="TI">TI</option>
                        <option value="CE">CE</option>
                        <option value="PA">PAS</option>
                    </select>
                </div>
                <div class="col-5 col-md-3">
                    <input type="number" class="form-control form-control-sm textarea" id="text_numdoc" placeholder="# Documento" v-model="B_numdoc" />
                </div>

                <div class="col-3 col-md-3 ">
                    <button class="btn btn-success btn-sm" @click="Buscarpaciente()" :disabled="BuscarP_isButtonDisabled">Buscar</button>
                </div>

            </div>

        </div>
    </div>

    <h6 class="display-6"></h6>

</div>

<!--  aqui componente de registro de usuario -->
<div v-if="this.existepaciente == 2">
    <br>
    <div class="container">
        <div class="card text-center">
            <div class="card-body">
                <h5 class="card-title">Registro de nuevo paciente</h5>
                <p class="card-text">Paciente no encontrado, ingrese los siguientes datos para
                    registarlo y poder realizar una reserva</p>
                <br>
                <div class="row">

                    <div class="col-6">
                        <div class="input-group mb-1">
                            <input type="text" class="form-control form-control-sm textarea" id="text_1nombre" placeholder="1 Nombre" v-model="name1" />
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="input-group mb-1">
                            <input type="text" class="form-control form-control-sm textarea" id="text_2nombre" placeholder="2 Nombre" v-model="name2" />
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="input-group mb-1">
                            <input type="text" class="form-control form-control-sm textarea" id="text_1apelli" placeholder="1 Apellido" v-model="apell1" />
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="input-group mb-1">
                            <input type="text" class="form-control form-control-sm textarea" id="text_2apell" placeholder="2 Apellido" v-model="apell2" />
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="input-group mb-1">
                            <input type="number" class="form-control form-control-sm textarea" id="text_tel" placeholder="Celular" v-model="celular" />
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="input-group mb-1">
                            <input type="text" class="form-control form-control-sm textarea" id="text_direccion" placeholder="Email" v-model="email" />
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="input-group mb-1">
                            <input type="text" class="form-control form-control-sm textarea" id="text_direccion" placeholder="Direccion" v-model="dir" />
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">F Nacimiento:</span>
                            <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model="fnacimiento">
                        </div>
                    </div>
                </div>
                <button class="btn btn-warning btn-sm" @click=" cerrarmodal()">
                    Cancelar
                </button>
                <button class="btn btn-success btn-sm" @click=" registarPaciente()" :disabled="Guardar_p_isButtonDisabled">
                    Registrar cliente
                </button>
            </div>
        </div>
    </div>
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
                    <td> <button class="btn btn-success btn-sm" @click=" BuscarProfesionales">Reservar </button> </td>
                </tr>
            </tbody>

        </table>
        <div class="container" style="background-color:#97BFB4">
            <br>
            <div>
                <h5 class="display-6">Citas Vigentes del paciente</h5>
            </div>
            <br>
            <table class="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">Fecha</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Profesional</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>

                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>

                    </tr>

                </tbody>
            </table>
        </div>
    </div>

    <br>

    <div class="container" v-if="existeprofesionales">
        <div class="row">
            <div class="container">

                <h6 class="display-6">Seleccione tipo , profesional y fecha de consulta </h6>
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
                        <select class="form-select form-select-sm textarea" id="inputGroupSelect03" v-model="f_reserva" @change="VerListadoCitas()">
                            <option selected value="">Dia de reserva</option>
                            <option v-for="fecha in this.fechasActivas" :key="fecha.id" :value="fecha.fecha" >{{fecha.fecha}} </option>
                        </select>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Hora:</span>
                            <input type="time" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model="listahora">
                        </div>

                    </div>

                    <button type="button " class="btn btn-success btn-sm" @click="GuardarCita()" :disabled="GuardarR_isButtonDisabled">Guardar Reservar</button>
                </div>
            </div>
            <br>
            <div class="container">
                <h6 class="display-6">Agenda del tipo, profesional y dia seleccionado</h6>
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Hora</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Celular</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Opc</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cita in this.sortedListaCitasDia" :key="cita.id">
                            <th>{{cita.hora}}</th>
                            <td>{{cita.paciente}}</td>
                            <td>{{cita.telpaciente}}</td>
                            <td>{{cita.tipo}}</td>
                            <td><button class="btn btn-danger m-1 btn-sm" @click="deleteItemC(cita.id)">X</button></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>
<div class="container">
    <router-link to="/dashboard">Home</router-link>
</div>
</template>

<!-- --------------------------------------------------------------------------------------------------- -->

<script>
import registroPaciente from '@/components/usuarios/registro.vue'

import {
    mapActions,
    mapGetters,
    mapState,
} from 'vuex';
import moment from 'moment';
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
        //----------------parametros para guardar citas
        params_GuardarFechaCita: [],
        //---variables de fecha
        paramsDelCitas: [],
        listahora: "",
        //---parametros consulta de tabla de citas del dia seleccionado
        params_citasDia: [],
        ListaCitasDia: [],
        desord_ListaCitasDia: [],
        paramsClear: [],
        // adicionar usuario
        name1: "",
        name2: "",
        apell1: "",
        apell2: "",
        celular: "",
        email: "",
        dir: "",
        fnacimiento: "",
        paramsGuardarPaciente: [],
        paramsClosetModalPac: [],
        paramsCitasPaciente:[],

    }),

    /* --------------------------------------------------------------------------- */

    components: {
        registroPaciente,
    },

    /* ------------------------------------------------------------------------ */

    methods: {
        ...mapActions('Agendas', ['getDatabyParam', 'loadProfesionales', 'getDataByRangoSuperior', 'createEntradaCitaNueva', 'getDatarCitasFecha', 'getDataUsersbyParam', 'DeleteItem', 'clearDataStoreA', 'createEntradanewPaciente', 'ClosetModalNewPaciente']),

        /*  */
        Buscarpaciente() {
            const idpaciente = this.B_tipodoc + this.B_numdoc;
            this.paramsPaciente = [{
                bd: "pacientes",
                parametro: "numdoc",
                valor: idpaciente,
                rta: "setStatePaciente"
            }]
            this.getDataUsersbyParam(this.paramsPaciente);
            /* this.buscarAllCitasPAciente(); */
        },

        /*  */
        BuscarProfesionales() {
            this.paramsProfesionales = [{
                bd: "profesionales",
                parametro: "id_ips",
                valor: this.id_ips,
                rta: "setStateProfesionales"
            }]
            this.getDataUsersbyParam(this.paramsProfesionales);
            this.filtarFechasAgendas()
        },
        /*  */
        filtarProf() {
            console.log(this.t_reserva)
            this.profactivos = this.dataprofesionales.filter(profesional => profesional.tipo == this.t_reserva)
            console.log(this.profactivos)

        },
        /*  */
        filtarFechasAgendas() {
            this.paramsFechasCitas = [{
                bd: "agendas",
                parametro: "fecha",
                valor: this.diaformatedfecha,
                rta: "setStateAgendas"
            }]
            this.getDataByRangoSuperior(this.paramsFechasCitas);
        },

        filtrarFechasByProf() {
            this.fechasActivas = this.dataAgendas.filter(registro => registro.id_profesional === this.p_reserva && registro.clase === this.t_reserva);

            console.log("Fechas Activas:", this.fechasActivas[0]);
        },

        async GuardarCita() {
            this.params_GuardarFechaCita = [{
                paciente: this.datapaciente[0].name1 + " " + this.datapaciente[0].apell1,
                numdoc: this.datapaciente[0].numdoc,
                telpaciente: this.datapaciente[0].celular,
                estado: "0",
                hora: this.listahora,
                id_agenda: this.f_reserva,
                tipo: this.t_reserva,
                fecha:this.fecha,
                bd: "citas",
                /*        rta: "UpdateStateCitas" */
            }]
            await this.createEntradaCitaNueva(this.params_GuardarFechaCita[0]);
            this.VerListadoCitas();
        },
        /*  */

        async VerListadoCitas() {
            this.params_citasDia = [{
                bd: "citas",
                parametro: "id_agenda",
                valor: this.f_reserva,
                rta: "setStateCitas"
            }]
            this.desord_ListaCitasDia = await this.getDatabyParam(this.params_citasDia);
            //ordenamos la cita por hora
        },

        async deleteItemC(id) {
            this.paramsDelCitas = [{
                id: id,
                bd: "citas"
            }]

            await this.DeleteItem(this.paramsDelCitas[0]);
            this.VerListadoCitas();
        },

        clearStore() {
            this.paramsClear[{
                ruta: "ClearStoreM"
            }]
            this.clearDataStoreA(this.paramsClear)
        },

        async registarPaciente() {
            const idpaciente = this.B_tipodoc + this.B_numdoc;
            this.paramsGuardarPaciente = [{
                numdoc: idpaciente,
                name1: this.name1,
                name2: this.name2,
                apell1: this.apell1,
                apell2: this.apell2,
                celular: this.celular,
                email: this.email,
                dir: this.dir,
                fnacimiento: this.fnacimento,
                bd: "pacientes",
            }]
            await this.createEntradanewPaciente(this.paramsGuardarPaciente[0])
            this.Buscarpaciente()
        },

        CerrarModalNewPaciente() {
            this.name1 = ""
            this.name2 = "",
                this.apell1 = "",
                this.apell2 = "",
                this.celular = "",
                this.email = "",
                this.dir = "",
                this.fnacimiento = "",
                this.paramsClosetModalPac = [{
                    existepaciente: "0",
                    rta: "ClosetModalP"
                }],
                this.ClosetModalNewPaciente(this.paramsClosetModalPac[0])
            console.log("cerrando modal")
        },

        buscarAllCitasPAciente() {
            const idpaciente = this.B_tipodoc + this.B_numdoc;
            this.paramsCitasPaciente = [{
                bd: "citas",
                parametro1: "numdoc",
                valor1: idpaciente,
                parametro2:"fecha",
                valor2: this.diaformatedfecha,
                rta: "setStateCitasPaciente"
            }]
            this.getDataUsersbyParam(this.paramsCitasPaciente);

        }

    },

    computed: {
        ...mapState('Agendas', ['datapaciente', 'existepaciente', 'dataprofesionales', 'existeprofesionales', 'dataCitas', 'dataAgendas']),
        ...mapState('Auth', ['user', 'id_ips', 'id_user', 'rol', 'info']),

        sortedListaCitasDia() {
            return this.desord_ListaCitasDia.sort((a, b) => {
                const hourA = a.hora.split(':')[0];
                const hourB = b.hora.split(':')[0];
                return hourA - hourB;
            });
        },

        BuscarP_isButtonDisabled() {
            return !this.B_tipodoc || !this.B_numdoc;
        },

        GuardarR_isButtonDisabled() {
            return !this.t_reserva || !this.p_reserva || !this.listahora || !this.f_reserva;
        },

        Guardar_p_isButtonDisabled() {
            return !this.name1 || !this.apell1 || !this.celular || !this.email || !this.dir || !this.fnacimiento;
        },

        /*  */
        formattedDate() {
            return moment(this.fecha_agenda).format('YYYY-MM-DD');
        },
        diaformatedfecha() {
            return moment(new Date).format('YYYY-MM-DD');
        },

    },

    /* ------------------------------------------------------------------------ */

    created() {
        this.clearStore()
    }

}
</script>

<style>
centrado {
    align-content: center;
}
</style>

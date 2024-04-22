<template>
<!-- datos del store auth
<hr>
{{ user }}
<hr>

<hr>
id_ips :{{ id_ips }} - id_user: {{ id_user }}- rol: {{ rol }}- info:{{ info }}
<hr>
{{ dataCitas }}
<hr>
{{ datapaciente }}
<hr> -->

<div class="container">
    <h6 class="display-6">Realizar una reserva </h6>
    <h6>Buscar o crear un usuario</h6>

    <div class="row">
        <div class="col-6 col-md-3">
            <select class="form-select form-select-sm textarea" id="inputGroupSelect01" v-model="B_tipodoc">
                <option selected value="">Tipo Documento</option>
                <option value="cc">CC</option>
                <option value="ti">TI</option>
                <option value="ce">CE</option>
                <option value="pa">PASAPORTE</option>
            </select>
        </div>
        <div class="col-6 col-md-3">
            <input type="number" class="form-control form-control-sm textarea" id="text_numdoc" placeholder="Numero Documento" v-model="B_numdoc" />
        </div>
        <div class="col-6 col-md-3 ">
            <button class="btn btn-success btn-sm" @click="Buscarpaciente" :disabled="BuscarP_isButtonDisabled"  >Buscar</button>
        </div>

        <!--    <div class="col-6  col-md-3 text-center">
            <button class="btn btn-warning btn-sm">+ crear nuevo</button>
        </div> -->
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
                    <td> <button class="btn btn-success btn-sm" @click=" BuscarProfesionales">Reservar </button> </td>
                </tr>
            </tbody>

        </table>
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
                        <select class="form-select form-select-sm textarea" id="inputGroupSelect03" v-model="f_reserva" @change=" VerListadoCitas()">
                            <option selected value="">Dia de reserva</option>
                            <option v-for="fecha in this.fechasActivas" :key="fecha.id" :value="fecha.id">{{fecha.fecha}} </option>
                        </select>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Hora:</span>
                            <input type="time" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" v-model="listahora">
                        </div>

                    </div>

                    <button type="button " class="btn btn-success btn-sm" @click="GuardarCita()"  :disabled="GuardarR_isButtonDisabled" >Guardar Reservar</button>
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

    }),

    /* --------------------------------------------------------------------------- */

    components: {
        registroPaciente,
    },

    /* ------------------------------------------------------------------------ */

    methods: {
        ...mapActions('Agendas', ['getDatabyParam', 'loadProfesionales', 'getDataByRangoSuperior', 'createEntradaCitaNueva', 'getDatarCitasFecha', 'getDataUsersbyParam', 'DeleteItem', 'clearDataStoreA']),

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
            this.filtarFechas()
        },
        /*  */
        filtarProf() {
            console.log(this.t_reserva)
            this.profactivos = this.dataprofesionales.filter(profesional => profesional.tipo == this.t_reserva)
            console.log(this.profactivos)

        },
        /*  */
        filtarFechas() {
         
            this.paramsFechasCitas = [{
                bd: "agendas",
                parametro: "fecha",
                valor:this.diaformatedfecha,
                rta: "setStateCitas"
            }]
            this.getDataByRangoSuperior(this.paramsFechasCitas);
        },


        filtrarFechasByProf() {
            this.fechasActivas = this.dataCitas.filter(registro => registro.id_profesional === this.p_reserva && registro.clase === this.t_reserva);

            console.log("Fechas Activas:", this.fechasActivas[0]);
        },

        async GuardarCita() {
            this.params_GuardarFechaCita = [{
                paciente: this.datapaciente[0].name1 + " " + this.datapaciente[0].apell1,
                telpaciente: this.datapaciente[0].celular,
                estado: true,
                hora: this.listahora,
                id_agenda: this.f_reserva,
                tipo: this.t_reserva,
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
                rta: "setStateAgendas"
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
/*  */
        formattedDate() {
            return moment(this.fecha_agenda).format('YYYY-MM-DD');
        },
        diaformatedfecha(){
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

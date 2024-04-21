<template>
<div class="container centrado mt-5">
    <h6 class="display-5">Menu FisioterapiApp</h6>
</div>
<hr>
<div class="centrado">
    <router-link to="/">Home</router-link>
</div>

<div class="container menu">

    <div class="row">
        <div class="col-12 col-md-6">

            <router-link to="/agendas"><a class="nav-link-menu" aria-current="page">
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="container">
                            <div class="row g-0">
                                <div class="col-2 centrado">
                                    <h1 class="display-1"><svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 448 512">
                                            <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" /></svg></h1>
                                </div>
                                <div class="col-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Agendas </h5>
                                        <p class="card-text">Desde este módulo se visualizan las agendas de fisioterapia. </p>

                                    </div>
                                </div>
                                <div class="col-2 centrado">
                                    <h1 class="display-4">5</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </a></router-link>
        </div>


        <div class="col-12 col-md-6">
            <router-link :to="{name:'reservas', params:{id_user: this.id_user}}"><a class="nav-link-menu" aria-current="page">
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="container">

                            <div class="row g-0">
                                <div class="col-2 centrado">
                                    <h1 class="display-1"><svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 448 512">
                                            <path d="M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32zM208 112v48H160c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224h48c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H272V112c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16z" /></svg></h1>
                                </div>
                                <div class="col-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Reservas de Citas</h5>
                                        <p class="card-text">Desde aqui se realiza la reserva de las citas de los distintos consultorios </p>

                                    </div>
                                </div>
                                <div class="col-2 centrado">
                                    <h1 class="display-4">9</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </a></router-link>
        </div>
        <div class="col-12 col-md-6">
            <router-link to="/vitrina"><a class="nav-link-menu" aria-current="page">
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="container">

                            <div class="row g-0">
                                <div class="col-2 centrado">
                                    <h1 class="display-1"><svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 448 512">
                                            <path d="M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32zM208 112v48H160c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224h48c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H272V112c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16z" /></svg></h1>
                                </div>
                                <div class="col-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Vitrina</h5>
                                        <p class="card-text">Este modulo permite gestionar los productos y servicios que se visualizaran en el inicio del sitio </p>

                                    </div>
                                </div>
                                <div class="col-2 centrado" v-if="cant">

                                    <h1 class="display-4">{{ cant }}</h1>
                                </div>
                                <div class="col-2 centrado" v-else>
                                    <h1>...</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </a></router-link>
        </div>
        <div class="col-12 col-md-6">
            <router-link to="/ventas"><a class="nav-link-menu" aria-current="page">
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="container">

                            <div class="row g-0">
                                <div class="col-2 centrado">
                                    <h1 class="display-1"><svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 448 512">
                                            <path d="M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32zM208 112v48H160c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224h48c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H272V112c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16z" /></svg></h1>
                                </div>
                                <div class="col-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Ventas</h5>
                                        <p class="card-text">Desde aqui se realiza el registro de las ventas de productos </p>

                                    </div>
                                </div>
                                <div class="col-2 centrado">
                                    <h1 class="display-4">9</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </a></router-link>
        </div>



        <div class="col-12 col-md-6">
            <router-link to="/hc"><a class="nav-link-menu" aria-current="page">
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="container">

                            <div class="row g-0">
                                <div class="col-2 centrado">
                                    <h1 class="display-1"><svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 448 512">
                                            <path d="M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32zM208 112v48H160c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224h48c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H272V112c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16z" /></svg></h1>
                                </div>
                                <div class="col-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Historia clinica</h5>
                                        <p class="card-text">permite el Registro digital de las actividades relacionadas con la atención de los pacientes</p>

                                    </div>
                                </div>
                                <div class="col-2 centrado">
                                    <div class="display-4">5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a></router-link>
        </div>
  
        <div class="col-12 col-md-6">
            <router-link to="/parametros"><a class="nav-link-menu" aria-current="page">
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="container">

                            <div class="row g-0">
                                <div class="col-2 centrado">
                                    <h1 class="display-1"><svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 448 512">
                                            <path d="M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32zM208 112v48H160c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224h48c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H272V112c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16z" /></svg></h1>
                                </div>
                                <div class="col-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Parametros</h5>
                                        <p class="card-text">Desde aqui se realiza la gestion de los valores y parametreos de entrada y salida de los distintos procesos </p>

                                    </div>
                                </div>
                                <div class="col-2 centrado">
                                    <h1 class="display-4">9</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </a></router-link>
        </div>

    </div>
    <div class="container">
        <h4>stores</h4> <br>
        <hr>
        <hr>
        store de auth :>
        {{ auth }} {{ id_ips }} {{ id_user }} {{ rol }} {{ info }}
        <hr>
        store de vitrina
        {{ cant }}
        <hr>

    </div>

</div>
<br>
</template>

<script>
import {
    mapGetters,
    mapState,
    mapActions
} from 'vuex';
/* import {
    userAuth
} from "./store/auth/getters"; */

export default {
    data: () => ({

    }),

    computed: {
        ...mapState('vitrina', ['cant']),
        ...mapState('Auth', ['auth', 'id_ips', 'id_user', 'rol', 'info']),
/*         ...mapState('Agendas',['dataprofesionales','dataCitas']) */
    },

    methods: {
        ...mapActions('vitrina', ['load_Vitrina']),
/*         ...mapActions('Agendas', ['getDatabyParam', 'loadProfesionales', 'getDataByRangoSuperior', 'createEntradaCitaNueva', 'getDatarCitasFecha', 'getDataUsersbyParam', 'DeleteItem']), */

    /*     BuscarProfesionales() {
            this.paramsProfesionales = [{
                bd: "profesionales",
                parametro: "id_ips",
                valor: this.id_ips,
                rta: "setStateProfesionales"
            }]
            this.getDataUsersbyParam(this.paramsProfesionales);

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
        }, */





    },

    created() {
        this.load_Vitrina()
/*         this.BuscarProfesionales()
        this.filtarFechas() */
    }

}
</script>

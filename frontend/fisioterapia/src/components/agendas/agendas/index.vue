<template>
datos de store
<hr>
{{ id_ips }}-----{{ rol }}---{{ info }}
{{ dataprofesionales }}
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

                            <div class="col-3"><select class="form-select form-select-sm" aria-label="Small select example" v-model="t_reserva" @change=" filtarProf()">
                                    <option selected value="">Tipo de Reserva</option>
                                    <option value="terapia">Terapia</option>
                                    <option value="consulta">Consulta</option>
                                    <option value="clase">Clase</option>
                                </select></div>

                            <div class="col-3">
                                <select class="form-select form-select-sm textarea" id="inputGroupSelect02">
                                    <option selected value="">Profesional</option>
                                    <option v-for="profactivo in this.profactivos" :key="profactivo.id" :value="profactivo.id">{{profactivo.name1}} {{profactivo.apell1}}</option>
                                </select>
                            </div>
                            <div class="col-3">
                                <div class="input-group input-group-sm mb-3">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">Fecha</span>
                                    <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                                </div>
                            </div>
                            <div class="col-3"><button type="button" class="btn btn-primary btn-sm">Small button</button></div>
                        </div>
                    </div>
                    <hr>

                    <h3 class="display-6">Listado de agendas</h3>

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>
                                    <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                        <button type="button" class="btn btn-danger">X </button>
                                        <button type="button" class="btn btn-warning">Edit</button>
                                        <button type="button" class="btn btn-success">Reasig</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>
                                    <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                        <button type="button" class="btn btn-danger">X </button>
                                        <button type="button" class="btn btn-warning">Edit</button>
                                        <button type="button" class="btn btn-success">Reasig</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>

                                <td>@twitter</td>
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


export default {
    /* --------------------------------------------------------------------------------------------------- */
    data: () => ({
        t_reserva: "",
    }),
    /* --------------------------------------------------------------------------------------------------- */
    
    
    
    methods: {

        ...mapActions('Agendas', ['getDataUsersbyParam']),

        BuscarProfesionales() {
            this.paramsProfesionales = [{
                bd: "profesionales",
                parametro: "id_ips",
                valor: this.id_ips,
                rta: "setStateProfesionales"
            }]
            this.getDataUsersbyParam(this.paramsProfesionales);

        },

        filtarProf() {

            console.log(this.t_reserva)
            this.profactivos = this.dataprofesionales.filter(profesional => profesional.tipo == this.t_reserva)
            console.log(this.profactivos)

        },
    },

    /* --------------------------------------------------------------------------------------------------- */
    computed: {
        ...mapState('Auth', ['user', 'id_ips', 'rol', 'info',]),
        ...mapState('Agendas', ['dataprofesionales',]),

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

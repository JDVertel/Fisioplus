<template>
<div>
    <h2>Configuracion de App</h2>
    usuarios
    tipos de citas
    empresa ( nombre - direccion - nit -telefono- email)
    profesionales y areas

    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Usuarios del Sistema ({{ existeusuarios }})
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="row">
                        <div class="col-6">
                            <h6>Tabla de usuarios del sistema</h6>
                        </div>
                        <div class="col-6"> <button class="btn btn-success btn-sm" @click="btn_adduser">+ add</button> </div>
                    </div>
                    <div class="container" v-if="this.form_user">
                        formulario usuarios
                        <div class="row">
                            <div class="col-4">
                                <div class="mb-3">
                                    <select class="form-select" aria-label="Default select example" v-model="user_tipodoc">
                                        <option value="" selected>Tipo de Documento</option>
                                        <option value="CC">Cedula</option>
                                        <option value="TI">T Identidad</option>
                                        <option value="PA">Pasaporte</option>
                                    </select>
                                </div>

                            </div>
                            <div class="col-4">
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="numero documento" v-model="user_numdoc">
                                </div>

                            </div>
                            <div class="col-4">
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="nombre" v-model="user_nombre">
                                </div>

                            </div>
                            <div class="col-4">
                                <div class="mb-3">

                                    <select class="form-select" aria-label="Default select example" v-model="user_rol">
                                        <option value="0" selected>Rol</option>
                                        <option value="admin">Administrador</option>
                                        <option value="registro">Registro</option>
                                        <option value="prof">Profesional</option>
                                    </select>
                                </div>

                            </div>
                            <div class="col-4">
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="pass" v-model="user_pass1">
                                </div>

                            </div>
                            <div class="col-4">
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="re-pass" v-model="pass2">
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-success btn-sm" @click="adduser">guardar</button>
                        </div>
                    </div>
                    <hr>
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Rol</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Documento</th>
                                <th scope="col">Estado</th>
                                <th>Opc</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in datausuarios" :key="user.id">
                                <th>{{user.rol}}</th>
                                <td>{{user.nombre}}</td>
                                <td>{{user.doc}}</td>
                                <td>{{user.estado}}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- ----------------------------------- -->
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Profesionales ( {{ existeprofesionales }} )
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="row">
                        <div class="col-6">
                            <h6>Tabla de profesionales del sistema</h6>
                        </div>
                        <div class="col-6"> <button class="btn btn-success btn-sm" @click=" btn_addprof">+ add</button> </div>
                    </div>
                    <div class="container" v-if="this.form_prof">
                        formulario profesionales
                        <div class="row">
                            <div class="col-4">
                                <div class="mb-3">
                                    <select class="form-select" aria-label="Default select example" v-model="pro_tipodoc">

                                        <option value="" selected>Tipo de Documento</option>
                                        <option value="CC">Cedula</option>
                                        <option value="TI">T Identidad</option>
                                        <option value="PA">Pasaporte</option>
                                    </select>
                                </div>

                            </div>
                            <div class="col-4">
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="numero documento" v-model="pro_numdoc">
                                </div>

                            </div>
                            <div class="col-4">
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="1nombre" v-model="pro_name1">
                                </div>

                            </div>
                            <div class="col-4">
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="nombre2" v-model="pro_name2">
                                </div>

                            </div>
                            <div class="col-4">
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="1apellido" v-model="pro_apell1">
                                </div>

                            </div>
                            <div class="col-4">
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="2apellido" v-model="pro_apell2">
                                </div>

                            </div>

                            <div class="col-4">
                                <div class="mb-3">
                                    <input type="email" class="form-control" placeholder="correo" v-model="pro_correo">
                                </div>

                            </div>

                            <div class="col-4">
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="registro medico" v-model="pro_reg_medico">
                                </div>

                            </div>

                            <div class="col-4">
                                <div class="mb-3">
                      
                                    <select class="form-select" aria-label="Default select example"  v-model="pro_tipo">
                                        <option selected>Tipo profesional</option>
                                        <option value="fisioterapia">Fisioterapia</option>
                                        <option value="consulta">Consulta</option>
                                        <option value="clases">Clases</option>
                                      </select>
                                </div>
                            </div>
                            <div class="col-4">
                                <button class="btn btn-success btn-sm" @click="addprof">guardar</button>
                            </div>
                        </div>

                    </div>
                    <hr>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">tipo</th>
                                <th scope="col">nombre</th>
                                <th scope="col">cel</th>
                                <th scope="col">opc</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="prof in dataprofesionales" :key="prof.id">
                                <th scope="row">{{prof.tipo}}</th>
                                <td>{{prof.name1}} {{prof.apell1}}</td>
                                <td>{{prof.cel}}</td>
                                <td></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- ----------------------------------- -->
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Datos Empresa
                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
    </div>

</div>
<router-link to="/dashboard">Home</router-link>
</template>

<script>
import {
    mapActions,
    mapState
} from 'vuex';
export default {
    data: () => ({
        form_user: false,
        form_prof: false,
        /* ---------------- */
        paramsProfesionales: [{
            bd: "profesionales",
            parametro: "id_ips",
            valor: 1,
            rta: "setStateProfesionales"

        }],

        paramsUsuarios: [{
            bd: "usuarios",
            parametro: "id_ips",
            valor: "1",
            rta: "setStateUsuarios"

        }],

        /* --------------------------------------- */
        Data_adduser: [{

        }],
        Data_addprof: [{

        }]
        /* --------------------------------------- */

    }),
    methods: {
        btn_adduser() {
            this.form_user = !this.form_user;
            console.log("ejecutandometodo add user", this.form_user);
        },

        btn_addprof() {
            this.form_prof = !this.form_prof;
            console.log("ejecutandometodo add prof", this.form_prof);

        },

        adduser() {

        },

        addprof() {

        },

        /* _---------------------------------------------------------------------------- */

        ...mapActions('Agendas', ['getDatabyParam']),

    },
    computed: {
        ...mapState('Agendas', ['dataprofesionales', 'existeprofesionales', 'datausuarios', 'existeusuarios']),
    },

    created() {

        this.getDatabyParam(this.paramsProfesionales);
        this.getDatabyParam(this.paramsUsuarios);
    },

}
</script>

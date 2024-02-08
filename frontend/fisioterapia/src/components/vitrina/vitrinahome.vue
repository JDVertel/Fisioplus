<template>
<br />
<div class="container config">
    <h3 class="display-6 text-center">--Gestion de la vitrina--</h3>

    <div class="container">
        <br />

        <ul class="nav nav-tabs nav justify-content-end" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Vitrina</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Inventario</button>
            </li>

        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                <h6 class="display-6">Servicios y Clases</h6>
                <hr />
                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                    + Agregar nuevo item de servicio
                </button>
                <div class="col-12">
                    <div class="table-responsive">
                        <table class="table table-sm">
                            <thead>
                                <tr>
                                    <th>img</th>
                                    <th scope="col">Categ</th>
                                    <th scope="col">Titulo</th>
                                    <th>Precio</th>
                                    <th scope="col">Opciones</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr v-for="articulo in vitrinaservicios" :key="articulo.id">
                                    <td><img src="..." class="img-thumbnail" alt="..."></td>
                                    <td>{{ articulo.tipo }}</td>
                                    <td>{{ articulo.nombre }}</td>
                                    <td>{{ articulo.precio }}</td>
                                    <td>
                                        <button class="btn btn-warning m-1" data-bs-toggle="modal" data-bs-target="#exampleModal2"> edit</button>
                                        <button class="btn btn-danger m-1">delete</button>
                                        <button class="btn btn-success m-1">publicar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- modal 2  servicios-->
                    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel2">Agregar nuevo item de servicio</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="container">
                                        <br>
                                        <h6>Ingrese los datos para crear un nuevo item de servicio </h6>
                                        <br>
                                        <div class="row">
                                            <div class="col-8 col-md-9">

                                                <div class="col">
                                                    <div>
                                                        <div class="col"> <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre" v-model="s_nombre" />
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="col">
                                                    <select class="form-select form-select-sm" aria-label="Default select example" v-model="s_categoria">
                                                        <option selected value="">Categoria</option>
                                                         <option value="citasm">Citas</option>
                                                        <option value="servicio">Clases</option>
                                                   

                                                    </select>
                                                </div>
                                                <div class="col"> <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Detalle" v-model="s_detalle"></textarea> </div>

                                                <div class="col"> <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Precio" v-model="s_precio" />

                                                </div>

                                                <div class="col">
                                                    <div class="row">
                                                        <div class="mb-3">
                                                            <input class="form-control" type="file" id="formFile" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4 col-md-3">
                                                <img src="..." class="img-thumbnail" alt="...">
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" v-on:click="guardarservicio">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                <!-- Button trigger modal -->
                <h6 class="display-6">Articulos Tienda</h6>
                <hr />
                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    + Agregar nuevo producto a la tienda
                </button>
                <div class="container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Img</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in productosFiltrados" :key="item.id">
                                <th scope="row">{{item.cant}}</th>
                                <td><img src="..." class="img-thumbnail" alt="..."></td>
                                <td>{{item.nombre}}</td>
                                <td>{{ item.precio}}</td>
                                <td> <button class="btn btn-warning m-1"> edit</button>
                                    <button class="btn btn-danger m-1">delete</button>
                                    <button class="btn btn-success m-1">publicar</button></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <!-- Modal 1  productos-->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Agregar nuevo articulo a la tienda</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="container">
                                    <br>
                                    <h6>Ingrese los datos para crear un nuevo articulo </h6>
                                    <br>
                                    <div class="row">
                                        <div class="col-8 col-md-9">

                                            <div class="col">
                                                <div>
                                                    <div class="col"> <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre" v-model="p_nombre" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col"> <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Detalle" v-model="p_detalle"></textarea> </div>

                                            <div class="col"> <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Precio" v-model="p_precio" />

                                            </div>
                                            <div class="col"> <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Cantidad" v-model="p_cant" />

                                            </div>
                                            <div class="col">
                                                <div class="row">
                                                    <div class="mb-3">
                                                        <input class="form-control" type="file" id="formFile" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-3">
                                            <img src="..." class="img-thumbnail" alt="...">
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" v-on:click="guardarArticulo">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <router-link to="/dashboard">Home</router-link>

    </div>

    <br>
</div>

<!-- modal crear/edit/ver-->
</template>

<script>
import {
    Articulos
} from "./../../firebase/bd";

import {
    mapActions,
    mapState
} from "vuex";

export default {
    data: () => ({
        //servicios
        s_nombre: "",
        s_categoria: "",
        s_detalle: "",
        s_precio: "",
        Servicio: [],

        //Articulos
        p_nombre: "",
        p_detalle: "",
        p_precio: "",
        p_cant: "",
        Producto: [],

    }),

    methods: {
        ...mapActions('vitrina', ['load_Vitrina']),

        guardarArticulo() {

            // Agregar una copia de los datos al array
            this.Producto.push({
                id_ips: "1",
                tipo:"producto",
                nombre: this.p_nombre,
                desc: this.p_detalle,
                precio: this.p_precio,
                cant: this.p_cant

            });
            // Limpiar los campos después de agregar la persona

            this.p_nombre = '';
            this.p_detalle = '';
            this.p_precio = '';
            this.p_cant = '';
            console.log("guardando articulo", this.Producto)

        },
        guardarservicio() {
            this.Servicio.push({
                id_ips:"1",
                nombre: this.s_nombre,
                tipo: this.s_categoria,
                desc: this.s_detalle,
                precio: this.s_precio,
             

            });
            // Limpiar los campos después de agregar la persona

            this.s_nombre = '';
            this.s_detalle = '';
            this.s_categoria = '';
            this.s_precio = '';
            this.s_cant = '';

            console.log("guardando servicio", this.Servicio)
        }
    },

    computed: {
        ...mapState({
            vitrinaservicios: state => state.vitrina.entry.filter(v => v.tipo != 'producto')

        }),
        ...mapState({
            productosFiltrados: state => state.vitrina.entry.filter(v => v.tipo === 'producto')
        }),

    },

    created() {
        this.load_Vitrina()
    },

}
</script>

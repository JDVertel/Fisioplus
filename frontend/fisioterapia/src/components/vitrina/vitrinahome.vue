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
        <!-- ====================================================================================== -->
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                <h6 class="display-6">Clases Consultas y Terapias</h6>
                <hr />
                <!-- Boton modal1 -->
                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal2" @click=" B_nuevo()">
                    + Agregar nuevo item de servicio
                </button>
                <!--  -->
                <div class="col-12">
                    <div class="table-responsive">
                        <table class="table table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">Img</th>
                                    <th scope="col">Categ</th>
                                    <th scope="col">Titulo</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">publicado</th>
                                    <th scope="col">Opciones</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr v-for="articulo in vitrinaservicios" :key="articulo.id">
                                    <td><img src="..." class="img-thumbnail" alt="..."></td>
                                    <td>{{ articulo.tipo }}</td>
                                    <td>{{ articulo.nombre }}</td>
                                    <td>{{ articulo.precio }}</td>
                                    <td>{{articulo.publicado}} {{articulo.id}}</td>
                                    <td>
                                        <button class="btn btn-warning m-1" data-bs-toggle="modal" data-bs-target="#exampleModal2" @click="M_editarservicios(articulo)"> edit</button>

                                        <button class="btn btn-danger m-1" @click="eliminaritem(articulo.id)">delete</button>

                                        <button class="btn btn-success m-1" @click="cambiarEstadoItem(articulo)">publicar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                <!-- inicio modal 1  servicios-->
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
                                                    <div class="col"> <input type="text" class="form-control" placeholder="Nombre" v-model="s_nombre" />
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="col">
                                                <select class="form-select form-select-sm" aria-label="Default select example" v-model="s_tipo">
                                                    <option selected value="">Categoria</option>
                                                    <option value="terapia">Terapia</option>
                                                    <option value="consulta">Consulta</option>
                                                    <option value="clase">Clase</option>

                                                </select>
                                            </div>
                                            <div class="col"> <textarea class="form-control" rows="2" placeholder="Detalle" v-model="s_detalle"></textarea> </div>

                                            <div class="col"> <input type="number" class="form-control" placeholder="Precio" v-model="s_precio" />

                                            </div>

                                            <div class="col">

                                                <div class="mb-3">
                                                    <input class="form-control" type="file" id="formFile" @change="onSelectImage" accept="image/png,  image/jpeg,  image/jpg" />
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-4 col-md-3">
                                            <img :src="local_Image" class="img-thumbnail" alt="...">
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click=" limpiarmodal()">Close</button>

                                <button type="button" v-if="modalOption =='U'" class="btn btn-primary" v-on:click="BM_updateServicios()" data-bs-dismiss="modal">Actualizar</button>

                                <button type="button" v-if="modalOption =='N'" class="btn btn-primary" v-on:click="B_guardarServicios()" data-bs-dismiss="modal">Guardar</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- fin modal servicios-->
            <!-- ============================================================================================================================ -->
            <!-- ============================================================================================================================ -->
            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">

                <h6 class="display-6">Articulos Tienda</h6>
                <hr />
                <!-- Button modal 2  articulos -->
                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" @click=" B_nuevo()">
                    + Agregar nuevo producto a la tienda
                </button>
                <!--  -->
                <div class="container">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Img</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Publicado</th>
                                    <th scope="col">Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in productosFiltrados" :key="item.id">
                                    <td><img src="..." class="img-thumbnail" alt="..."></td>
                                    <th scope="row">{{ item.cant }}</th>
                                    <td>{{item.nombre}}</td>
                                    <td>{{ item.precio}}</td>
                                    <td>{{item.publicado}} {{item.id}}</td>
                                    <td>
                                        <div>
                                            <button class="btn btn-warning m-1" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="M_editarproductos(item)"> edit</button>

                                            <button class="btn btn-danger m-1" @click=" eliminaritem(item.id)">delete</button>

                                            <button class="btn btn-success m-1" @click="cambiarEstadoItem(item)">publicar</button>
                                        </div>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!--INICIO  Modal 2  productos-->
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
                                                    <div class="col"> <input type="text" class="form-control" placeholder="Nombre" v-model="p_nombre" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col"> <textarea class="form-control" rows="2" placeholder="Detalle" v-model="p_detalle"></textarea> </div>

                                            <div class="col"> <input type="number" class="form-control" placeholder="Precio" v-model="p_precio" />

                                            </div>
                                            <div class="col"> <input type="number" class="form-control" placeholder="Cantidad" v-model="p_cant" />

                                            </div>
                                            <div class="col">
                                                <div class="row">
                                                    <div class="mb-3">
                                                        <input class="form-control" type="file" id="formFile" @change="onSelectImage" accept="image/png,  image/jpeg,  image/jpg" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-3">
                                            <img :src="local_Image" class="img-thumbnail" alt="...">
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click=" limpiarmodal()">Close</button>

                                <button type="button" v-if="modalOption == 'U'" class="btn btn-primary" v-on:click="BM_updateProductos()" data-bs-dismiss="modal">Actualizar</button>
                                <button type="button" v-if="modalOption == 'N'" class="btn btn-primary" v-on:click="B_guardarProductos()" data-bs-dismiss="modal">Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- fin modal1 productos-->

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
    mapActions,
    mapState
} from "vuex";

export default {
    data: () => ({

        //Articulos
        p_nombre: "",
        p_detalle: "",
        p_precio: "",
        p_cant: "",
        p_tipo: "",
        Productos: [],

        //servicios
        s_nombre: "",
        s_categoria: "",
        s_detalle: "",
        s_precio: "",
        Servicios: [],
        s_tipo: "",
        //swiches
        modalOption: "",
        //images
        local_Image: null,
        file: null

    }),

    methods: {
        ...mapActions('vitrina', ['load_Vitrina', 'updateVitrinaP', 'updateVitrinaS', 'createEntradaVitrina', 'DeleteItemVitrina', 'CambiarEstadoVitrina']),
        /*    ...mapActions('vitrina', ['updateVitrina']), */

        B_nuevo() {
            this.limpiarmodal(),
                this.modalOption = 'N'
        },

        limpiarmodal() {

            /* limpia los campos de los modales de la vitrina */
            this.p_id = "";
            this.p_id_ips = "";
            this.p_tipo = "";
            this.p_nombre = '';
            this.p_detalle = '';
            this.p_precio = '';
            this.p_cant = '';
            this.p_publicado = "";

            this.s_id = "";
            this.s_id_ips = "";
            this.s_nombre = '';
            this.s_detalle = '';
            this.s_tipo = "";
            this.s_precio = '';
            this.s_cant = '';
            this.s_publicado = "";

            this.Servicios = [];
            this.Productos = [];
            this.Opc = "";
            this.local_Image = null;
            this.data = null;
            this.modalOption = "";
            this.file = null;

        },

        //----------SERVICIOS-----------------------------------------
        B_guardarServicios() {
            this.modalOption = 'N'
            this.Servicios.push({
                id_ips: "1",
                //cambia a variable de sesion en produccion
                nombre: this.s_nombre,
                tipo: this.s_tipo,
                desc: this.s_detalle,
                precio: this.s_precio,
                img: this.s_img,
                publicado: true,
            });
            // Limpiar los campos después de agregar la persona
            this.createEntradaVitrina(this.Servicios[0]);
            console.log("guardando servicio", this.Servicios[0])
            this.limpiarmodal();
        },

        M_editarservicios(data) {
            this.modalOption = 'U'
            this.s_id = data.id;
            this.s_id_ips = data.id_ips;
            this.s_publicado = data.publicado
            this.s_tipo = data.tipo;
            //
            this.s_nombre = data.nombre;
            this.s_detalle = data.desc;
            this.s_precio = data.precio;

        },

        BM_updateServicios() {
            this.Servicios.push({
                id: this.s_id,
                id_ips: this.s_id_ips,
                tipo: this.s_tipo,
                publicado: this.s_publicado,
                nombre: this.s_nombre,
                desc: this.s_detalle,
                precio: this.s_precio,
            });
            this.saveVitrinaS();
            this.limpiarmodal();
        },

        async saveVitrinaS() {
            this.updateVitrinaP(this.Servicios[0])
            /* console.log(this.Productos); */
        },

        //-----------PRODUCTOS-----------------------------------------

        M_editarproductos(data) {
            this.modalOption = 'U'
            this.p_id = data.id
            this.p_id_ips = data.id_ips
            this.p_tipo = data.tipo
            this.p_publicado = data.publicado
            /*  */
            this.p_nombre = data.nombre;
            this.p_detalle = data.desc;
            this.p_precio = data.precio;
            this.p_cant = data.cant;
        },
        /* ------------------------------------------------------------------ */

        B_guardarProductos() {
            this.modalOption = 'N'
            this.Productos.push({
                id_ips: "1",
                //cambia a variable de sesion en produccion
                tipo: "producto",
                nombre: this.p_nombre,
                desc: this.p_detalle,
                precio: this.p_precio,
                cant: this.p_cant,
                img: this.p_img,
                publicado: true,
            });
            // Limpiar los campos después de agregar la persona
            this.createEntradaVitrina(this.Productos[0]);
            console.log("guardando el producto", this.Productos)
            this.limpiarmodal();
        },
        /* ---------------------------------------------------------------- */

        BM_updateProductos() {
            this.Productos.push({
                id: this.p_id,
                id_ips: this.p_id_ips,
                tipo: this.p_tipo,
                publicado: this.p_publicado,
                /*  */
                nombre: this.p_nombre,
                desc: this.p_detalle,
                precio: this.p_precio,
                cant: this.p_cant

            });

            //llamado al action
            this.saveVitrinaP();
            this.limpiarmodal();
        },
        /* -------------------------------------------------------------------- */
        async saveVitrinaP() {
            this.updateVitrinaP(this.Productos[0])
            /* console.log(this.Productos); */
        },

        //--------ITEMS-----------------------------------------

        eliminaritem(item) {
            this.DeleteItemVitrina(item);
            console.log(item);
        },

        /* -------------------------------- */

        cambiarEstadoItem(item) {
            this.CambiarEstadoVitrina(item)

        },

        //----- IMAGEN-------------------------------------------
        onSelectImage(event) {
            const file = event.target.files[0]
            if (!file) {
                return
                this.file = null;
            } else {
                const fr = new FileReader()
                fr.onload = () => this.local_Image = fr.result
                fr.readAsDataURL(file)
                this.file = file;
            }
        },

    },

    //===================================================================

    computed: {
        ...mapState({
            vitrinaservicios: state => state.vitrina.entry.filter(v => v.tipo != 'producto')

        }),
        ...mapState({
            productosFiltrados: state => state.vitrina.entry.filter(v => v.tipo === 'producto')
        }),
    },

    //=====================================================================
    created() {
        this.load_Vitrina()
    },

}
</script>

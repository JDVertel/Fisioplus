<template>
<br />
<div class="container config">
    <h3 class="display-6 text-center">Gestion de la vitrina</h3>
    <div class="container">
        <br />

        <h6 class="display-6">Articulos Publicados</h6>
        <hr />

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
                <div class="row">
                    <div class="col-4">

                        <div>
                            <select class="form-select form-select-sm" aria-label="Default select example">
                                <option selected>Categoria</option>
                                <option value="1">Servicios</option>
                                <option value="2">Clases</option>

                            </select>
                        </div>

                        <div>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Nombre"></textarea>
                        </div>
                        <div>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Detalle"></textarea>
                        </div>
                        <div class="col"> <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Precio" />

                        </div>
                        <div class="row">
                            <div class="mb-3">
                                <input class="form-control" type="file" id="formFile" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <img src="..." class="img-thumbnail" alt="...">
                            </div>
                            <div class="col-6"> <button type="button" class="btn btn-primary">Guardar</button></div>

                        </div>
                    </div>

                    <div class="col-8">
                        <div class="table-responsive">
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Categ</th>
                                        <th scope="col">Titulo</th>
                                        <th>Precio</th>
                                        <th scope="col">Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="articulo in  dataarticulos" :key="articulo.id">
                                        <td>{{ articulo.categ }}</td>
                                        <td>{{ articulo.titulo }}</td>
                                        <td>5000</td>
                                        <td>
                                            <button class="btn btn-warning m-1"> edit</button>
                                            <button class="btn btn-danger m-1">delete</button>
                                            <button class="btn btn-success m-1">publicar</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    + Agregar nuevo producto
                </button>

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Agrrgar nuevo articulo al inventario</h1>
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
                                                    <div class="col"> <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Nombre" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col"> <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Detalle"></textarea> </div>

                                            <div class="col"> <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Precio" />

                                            </div>
                                            <div class="col"> <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Cantidad" />

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
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>

                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
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
        <v-icon name="fa-home" fill="blue" />
        <router-link to="/dashboard">Home</router-link>

    </div>

    <br>
</div>

<!-- modal crear/edit/ver-->
</template>

<script>
import {
    Articulos
} from "./../../firebase/bd"

export default {
    data: () => ({

        dataarticulos: Articulos

    })

}
</script>

<template>
<br />
<div class="container config">
    <h3 class="display-6 text-center">Gestion de la Configuracion de la App</h3>
    <div class="container">
        <br />

      

        <h6 class="display-6">Articulos Publicados</h6>
        <hr />

        <ul class="nav nav-tabs nav justify-content-end" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Vitrina</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">+Nuevo</button>
            </li>

        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">

                <div class="table-responsive">
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Categ</th>
                                <th scope="col">Titulo</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="articulo in  dataarticulos" :key="articulo.id">
                                <td>{{ articulo.categ }}</td>
                                <td>{{ articulo.titulo }}</td>
                                <td>
                                    <button class="btn btn-danger" v-if="`${articulo.estado}` == 0">
                                        {{ articulo.estado }}
                                    </button>
                                    <button class="btn btn-success" v-else>
                                        {{ articulo.estado }}
                                    </button>
                                </td>
                                <td>
                                    <button>
                                        edit</button><button>delete</button> <button>ver</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">

                <div class="container">
                    <br>
                    <h6>Ingrese los datos para crear un nuevo articulo en tu vitrina</h6>
                    <br>
                    <div class="row">
                        <div class="col-8 col-md-9">
                            <div class="col">
                                <div>
                                    <select class="form-select form-select-sm" aria-label="Default select example">
                                        <option selected>Categoria</option>
                                        <option value="1">Servicios</option>
                                        <option value="2">Clases</option>
                                        <option value="3">Productos</option>
                                    </select>
                                </div>

                            </div>
                            <div class="col">
                                <div>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Titulo"></textarea>
                                </div>
                            </div>
                            <div class="col"> <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Detalle"></textarea> </div>

                            <div class="col"> <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Precio" />

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
                        <button type="button" class="btn btn-primary">Guardar</button>
                    </div>
                 
                </div>

            </div>

        </div>

    </div>
    
        <v-icon name="fa-home" fill="blue" /><router-link to="/dashboard">Home</router-link>
</div>

<!-- modal crear/edit/ver-->


</template>

<script>
import homebutton from "../../components/homebutton.vue";
import {
    Articulos
} from "./../../firebase/bd"

export default {
    data: () => ({

        dataarticulos: Articulos

    })

}
</script>

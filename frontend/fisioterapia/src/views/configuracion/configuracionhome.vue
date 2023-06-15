<template>
  <br />
  <div class="container config">
    <h3 class="display-6 text-center">Gestion de la Configuracion de la App</h3>
    <div class="container">
      <br />

      <button class="btn btn-success" data-bs-toggle="modal"
      data-bs-target="#Modaleditarticulo">+ Nuevo</button>

      <h6 class="display-6">Articulos Publicados</h6>
      <hr />
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
            <tr v-for="articulo in Articulos" :key="articulo.id">
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
                <button
                  
                >
                  edit</button
                ><button>delete</button> <button>ver</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {{ Articulos }}
    <homebutton />
  </div>

  <!-- modal crear/edit/ver-->

  <div
    class="modal fade"
    id="Modaleditarticulo"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Articulo</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <div class="col-2"></div>
              <div class="col-5">
                <div>
                  <select
                    class="form-select form-select-sm"
                    aria-label="Default select example"
                  >
                    <option selected>Categoria</option>
                    <option value="1">Servicios</option>
                    <option value="2">Clases</option>
                    <option value="3">Productos</option>
                  </select>
                </div>
                <div>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                    placeholder="Titulo"
                  ></textarea>
                </div>
              </div>

              <div class="col-5">
                <div>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                    placeholder="Detalle"
                  ></textarea>
                </div>
                <div>
                  <div>
                    <input
                      v-if="categoria == Productos"
                      type="number"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Precio"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="mb-3">
                <input class="form-control" type="file" id="formFile" />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancelar
          </button>
          <button type="button" class="btn btn-primary">Guardar</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from "vue";
import homebutton from "../../components/homebutton.vue";

let Articulos = ref([
  {
    id: 1,
    categ: "servicio",
    titulo: "titulo del servicio",
    precio: "",
    detalle: "",
    img: "",
    estado: "1",
  },
  {
    id: 2,
    categ: "clases",
    titulo: "titulo de la clase",
    precio: "",
    detalle: "",
    img: "",
    estado: "0",
  },
  {
    id: 3,
    categ: "productos",
    titulo: "titulo del producto",
    precio: "",
    detalle: "",
    img: "",
    estado: "1",
  },
  {
    id: 4,
    categ: "servicio",
    titulo: "titulo servicio",
    precio: "",
    detalle: "",
    img: "",
    estado: "0",
  },
]);
</script>

<style>
.config {
  font-size: 0.6rem;
  background: fixed;
}
textarea,
select,
input,
button {
  font-size: 0.6rem !important;
}

.display-6 {
  font-size: 1.4rem !important;
}
</style>

<template>
  <div class="container config">
    <h3 class="display-6 text-center">Gestion de la Configuracion de la App</h3>
    <div class="container">
      <div class="row">
        <div class="col-6">
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
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Nombre"
            />
          </div>
          <div>
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Precio"
            />
          </div>
        </div>

        <div class="col-6">
          <div>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="2"
              placeholder="Detalle"
            ></textarea>
          </div>
          <div>
            <div class="mb-3">
              <input class="form-control" type="file" id="formFile" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <button type="button" class="btn btn-success btn-sm">Crear Articulo</button>
      </div>

      <br />
      <hr>
<p>Articulos Publicados</p>
      <div class="table-responsive">
        <table class="table table-sm">
          <thead>
            <tr>
              <th scope="col">categ</th>
              <th scope="col">titulo</th>
              <th scope="col">estado</th>
              <th scope="col">opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>@mdo</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@twitter</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <homebutton />
  </div>
</template>

<script setup>
import homebutton from "../../components/homebutton.vue";
</script>

<style>

.config {
  font-size: 0.6rem;
  background: fixed;
}
textarea , select, input, button {
  font-size: 0.6rem !important;
  }
  
</style>

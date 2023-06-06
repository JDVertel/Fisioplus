<template>
  <div class="container">
    <br />

    <div class="container">
      <h6 class="display-6">Registro de nuevo paciente</h6>
      <div class="row">
        <div class="col-6">
          <select class="form-select" aria-label="Default select example">
            <option selected>Tipo Documento</option>
            <option value="1">CC</option>
            <option value="2">TI</option>
            <option value="3">CE</option>
          </select>
        </div>
        <div class="col-6">
          <input
            class="form-control form-control-sm"
            type="text"
            placeholder="Numero Documento"
            aria-label=".form-control-sm example"
          />
        </div>
        <div class="col-6">
          <input
            class="form-control form-control-sm"
            type="text"
            placeholder="Primer Nombre"
            aria-label=".form-control-sm example"
          />
        </div>
        <div class="col-6">
          <input
            class="form-control form-control-sm"
            type="text"
            placeholder="Segundo Nombre"
            aria-label=".form-control-sm example"
          />
        </div>
        <div class="col-6">
          <input
            class="form-control form-control-sm"
            type="text"
            placeholder="Primer Apellido"
            aria-label=".form-control-sm example"
          />
        </div>
        <div class="col-6">
          <input
            class="form-control form-control-sm"
            type="text"
            placeholder="Segundo Apellido"
            aria-label=".form-control-sm example"
          />
        </div>
        <div class="col-6">
          <select class="form-select" aria-label="Default select example">
            <option selected>Sexo</option>
            <option value="1">M</option>
            <option value="2">F</option>
          </select>
        </div>
        <div class="col-6">
          <input
            class="form-control form-control-sm"
            type="date"
            placeholder="Fecha de Nacimiento"
            aria-label=".form-control-sm example"
          />
        </div>
        <div class="col-6">
          <select class="form-select" aria-label="Default select example">
            <option selected>Tipo Sangre</option>
            <option value="1">A+</option>
            <option value="2">A-</option>
            <option value="3">B+</option>
            <option value="4">B-</option>
            <option value="5">AB+</option>
            <option value="6">AB-</option>
            <option value="7">O+</option>
            <option value="8">O-</option>
          </select>
        </div>
        <div class="col-6">
          <input
            class="form-control form-control-sm"
            type="text"
            placeholder="E Civil"
            aria-label=".form-control-sm example"
          />
        </div>
        <div class="col-6">
          <input
            class="form-control form-control-sm"
            type="text"
            placeholder="Escolaridad"
            aria-label=".form-control-sm example"
          />
        </div>
        <div class="col-6">
          <input
            class="form-control form-control-sm"
            type="text"
            placeholder="Ocupacion"
            aria-label=".form-control-sm example"
          />
        </div>
        <div class="col-6">
          <input
            class="form-control form-control-sm"
            type="text"
            placeholder="Direccion"
            aria-label=".form-control-sm example"
          />
        </div>
        <div class="col-6">
          <input
            class="form-control form-control-sm"
            type="text"
            placeholder="Barrio"
            aria-label=".form-control-sm example"
          />
        </div>
        <div class="col-6">
          <input
            class="form-control form-control-sm"
            type="mail"
            placeholder="Email"
            aria-label=".form-control-sm example"
          />
        </div>
        <div class="col-6">
          <input
            class="form-control form-control-sm"
            type="text"
            placeholder="Telefono"
            aria-label=".form-control-sm example"
          />
        </div>
      </div>
      <br />
      <button type="button" class="btn btn-primary">Registar</button>
    </div>
  </div>
  <div class="col-6"><v-icon name="fa-home"  fill="blue"/>     <router-link to="/">Home</router-link></div>
</template>

<script>
export default {};
</script>

<style>
</style>
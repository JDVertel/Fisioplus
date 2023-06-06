<template>
  <div class="container">
    <h4 class="display-6">Buscar Paciente</h4>

    <div class="row">
      <div class="col-5">
        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01"
            >Tipo Documento</label
          >
          <select class="form-select" id="inputGroupSelect01">
            <option selected>Seleccione...</option>
            <option value="1">CC</option>
            <option value="2">TI</option>
            <option value="3">CE</option>
          </select>
        </div>
      </div>
      <div class="col-5">
        <input type="text" class="form-control" aria-label="Text input" />
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-primary">Buscar</button>
      </div>
    </div>
    <br />
  </div>

  <!-- condicion se cumple si no encuentra registro
   -->
  <div class="container text-center" style="background-color: orange">
    <div class="row">
      <div class="col">
        <img src="./../images/noregistrado.jpg" class="redondo" alt="...">
           <h4>
        usuario no registrado
        <button type="button"  @click="$router.push('/uregister')" class="btn btn-primary">Registrar</button>
      </h4>
      </div>
   
    </div>
  </div>
<br>
  <!-- condicion se cumple si encuentra registro -->

  <div class="container" style="background-color: green">
    <button type="button" class="btn btn-primary" @click="$router.push('/hc')">+ Nuevo registro en HC</button>
    <hr />
    <h2 class="display-6">historial</h2>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Fecha</th>
      <th scope="col">Diagnostico</th>
      <th scope="col">Ver</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>

      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
     
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
    
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
<br>
      
  </div>
  <div class="col-6"><v-icon name="fa-home"  fill="blue"/>     <router-link to="/">Home</router-link></div>
</template>

<script>
export default {};
</script>

<style>
</style>
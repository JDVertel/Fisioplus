<template>
    <div class="container credenciales">
        <div class="row">
          <div class="col-4 etiq">
            <h6 class="display-6 etiq">Credenciales</h6>
          </div>
          <div class="col-4">
            <div class="input-group mb-1">
              <input
                type="password"
                class="form-control form-control-sm textarea"
                id="text_imc"
                placeholder="Contraseña"
                v-model="variable.pass"
              />
            </div>
          </div>
          <div class="col-4">
            <div class="input-group mb-1">
              <input
                type="password"
                class="form-control form-control-sm textarea"
                id="text_imc"
                placeholder="Confirma Contraseña"
                v-model="variable.pass2"
              />
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
import { ref } from "vue";
 let variable=ref({
    origen:"externo",
    pass:"",
    pass2:"",
 })

</script>

<style>
.credenciales {
    background-color: #225d03;
    padding: 10px 12px 8px 10px;
    border-radius: 15px;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-flow: row;
  }
  .etiq {
    color: antiquewhite;
    text-align: center;
  }
</style>
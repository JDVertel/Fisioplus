<template>
<div class="accordion-item">
    <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse11" aria-expanded="false" aria-controls="panelsStayOpen-collapse11">
            <v-icon name="fa-user-check" fill="blue" /> Diagnostico
        </button>
    </h2>
    <div id="panelsStayOpen-collapse11" class="accordion-collapse collapse">
        <div class="accordion-body">
            <div class="container">
                <div class="row mt-3">
                    <div class="col-4"> <select class="form-select form-select-sm" aria-label="Small select example">
                            <option selected>Cie-10</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select></div>
                    <div class="col-4"> <select class="form-select form-select-sm" aria-label="Small select example">
                            <option selected>Tipo de Diagnostico</option>
                            <option value="1">Diagnostico Principal</option>
                            <option value="2">Diagnostico Secunadario</option>
                            <option value="3">Diagnostico Terciario</option>
                        </select></div>
                    <div class="col-4"> <button class="btn btn-warning">agregar</button></div>

                </div>
           
                <table class="table table-sm mt-3">
                    <thead>
                        <tr>
                            <th scope="col">Tipo diagnostico</th>
                            <th scope="col">Codigo</th>
                            <th scope="col">Detalle</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <th scope="row">Mark</th>
                            <td>Otto</td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <th scope="row">Mark</th>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <th scope="row">Mark</th>
                            <td>Otto</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr>
            <button class="btn btn-warning">+ Guardar</button>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style >

</style>

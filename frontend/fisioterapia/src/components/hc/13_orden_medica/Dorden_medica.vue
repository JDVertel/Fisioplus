<template>
<div class="accordion-item">
    <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse13" aria-expanded="false" aria-controls="panelsStayOpen-collapse13">
            <v-icon name="fa-user-check" fill="blue" />Orden medica
        </button>
    </h2>
    <div id="panelsStayOpen-collapse13" class="accordion-collapse collapse">
        <div class="accordion-body">
            <div class="container">
                <div class="row mt-3">
                    <div class="col-3"> <select class="form-select form-select-sm" aria-label="Small select example">
                            <option selected>CUPS</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select></div>
                    <div class="col-3">
                        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="cantidad">

                    </div>
                    <div class="col-3"> <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Frecuencia (dias)"></div>
                    <div class="col-3"> <button class="btn btn-warning">agregar</button></div>

                </div>

                <table class="table table-sm mt-3">
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Nombre</th>
                            <th>Cantidad</th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    

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

<template>
       <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse2" aria-expanded="false" aria-controls="panelsStayOpen-collapse2">
                <v-icon name="fa-user-check" fill="blue" />
                Observacion
            </button>
        </h2>
        <div id="panelsStayOpen-collapse2" class="accordion-collapse collapse">
            <div class="accordion-body">
                <!--  -->
                <p>
                    Inventario general y sistematico a nivel corporal, emocional,personal y social
                    desde el primer contactovisual con la persona que asiste
                </p>
                <br />
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-homeB" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                            Marcha/Deambulacion
                        </button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profileB" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                            Movilidad/Traslados
                        </button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-homeB" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                        <div class="container">
                            <br />

                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modalhc1">
                                +add
                            </button>
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
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
                    </div>
                    <div class="tab-pane fade" id="nav-profileB" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <div class="container">
                            <br />

                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modalhc1">
                                +add
                            </button>
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
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
                    </div>
                </div>
            </div>
        </div>
    </div>

        <!-- modal -->

        <div class="modal fade" id="Modalhc1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
               
                    <div class="mb-1">
                        <select class="form-select form-select-sm" aria-label="Small select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="informeacion"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>

</style>
<script>

</script>

<template>
<div class="container mt-5">
    <h6 class="display-6">productos</h6>

    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Diponibles</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">+Nuevo</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Agotados</button>
        </li>

    </ul>
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
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

        <div class="tab-pane fade mt-3" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
            <div class="card">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body pd-4">
                    <div class="container">
                        <div class="row ">
                            <div class="col-6">
                                <input class="form-control form-control-sm" type="text" placeholder="Nombre" aria-label=".form-control-sm example">
                            </div>
                            <div class="col-6">
                                <input class="form-control form-control-sm" type="text" placeholder="Descripcion" aria-label=".form-control-sm example">
                            </div>
                            <div class="col-6">
                                <input class="form-control form-control-sm" type="text" placeholder="Precio compra" aria-label=".form-control-sm example">
                            </div>
                            <div class="col-6 ">
                                <input class="form-control form-control-sm" type="text" placeholder="precio Venta" aria-label=".form-control-sm example">
                            </div>
                            <div class="col-12">
                                <div class="input-group">
                                    <input type="file" class="form-control form-control-sm" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                                    <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
                                    <br>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>

    </div>
</div>
</template>

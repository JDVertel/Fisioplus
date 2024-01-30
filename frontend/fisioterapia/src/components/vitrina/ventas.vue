<template>
<div class="container mt-4">

    <h6 class="display-6">Registrar una venta </h6>
    <h6>Buscar o crear un usuario</h6>

    <div class="row">

        <div class="col-2">
            <select class="form-select form-select-sm textarea" id="inputGroupSelect01">
                <option selected>Tipo Documento</option>
                <option value="cc">CC</option>
                <option value="ti">TI</option>
                <option value="ce">CE</option>
            </select>
        </div>
        <div class="col-6">
            <div class="row">
                <div class="col-6">
                    <input type="number" class="form-control form-control-sm textarea" id="text_numdoc" placeholder="Numero Documento" />

                </div>
                <div class="col-6">
                    <button class="btn btn-success btn-sm" style="margin-right:4px">Buscar</button>
                </div>

            </div>
        </div>

        <div class="col-4 text-center">

            <button class="btn btn-warning btn-sm">+ Registrar Nuevo</button>
        </div>
    </div>

    <!--     <div class="container">
        <p>
            Paciente no encontrado, ingrese los siguientes datos para
            registarlo y poder realizar una reserva
        </p>
        <div class="row">
            <div class="col-6">
                <div class="input-group mb-1">
                    <input type="text" class="form-control form-control-sm textarea" id="text_1nombre" placeholder="1 Nombre" />
                </div>
            </div>
            <div class="col-6">
                <div class="input-group mb-1">
                    <input type="text" class="form-control form-control-sm textarea" id="text_2nombre" placeholder="2 Nombre" />
                </div>
            </div>
            <div class="col-6">
                <div class="input-group mb-1">
                    <input type="text" class="form-control form-control-sm textarea" id="text_1apelli" placeholder="1 Apellido" />
                </div>
            </div>
            <div class="col-6">
                <div class="input-group mb-1">
                    <input type="text" class="form-control form-control-sm textarea" id="text_2apell" placeholder="2 Apellido" />
                </div>
            </div>
            <div class="col-6">
                <div class="input-group mb-1">
                    <input type="number" class="form-control form-control-sm textarea" id="text_tel" placeholder="Telefono" />
                </div>
            </div>
            <div class="col-6">
                <div class="input-group mb-1">
                    <input type="text" class="form-control form-control-sm textarea" id="text_direccion" placeholder="Direccion" />
                </div>
            </div>
        </div>
        <button class="btn btn-success btn-sm">
            Registrar cliente
        </button>
    </div> -->
    <div class="container">

        <div class="row">

            <h6 class="display-6">Registro de ventas de articulos</h6>
            <hr>

            <div class="col-sm-6 col-md-4">

                <div class="row  mt-3">
                    <select class="form-select form-select-sm textarea" id="inputGroupSelect01">
                        <option selected>Seleccione producto</option>
                        <option value="cc">Terapia</option>
                        <option value="ti">Consulta</option>
                        <option value="ti">Clase</option>

                    </select>
                    <div class="col-4"><input type="number" class="form-control" placeholder="cantidad"> </div>
                    <div class="col-5">
                        <h6 class="m-2">Subtotal:</h6>
                    </div>
                    <div class="col-3 mt-1"><button class="btn btn-warning btn-sm">+ Agregar</button></div>

                    <div class="row mt-3">

                        <br>
                        <h6 class="display-6"> Factura de Venta</h6>
                        <hr>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Cant</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Subtotal</th>
                                    <th scope="col">Opc</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td><button class="btn btn-danger btn-sm Bredondo">-</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td><button class="btn btn-danger btn-sm Bredondo">-</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td><button class="btn btn-danger btn-sm Bredondo">-</button></td>
                                </tr>
                            </tbody>
                        </table>
                        <button class="btn btn-success btn-sm">Registrar Venta</button>
                    </div>

                </div>
            </div>
            <div class="col-sm-6 col-md-8">
                <div class="container">
                    <h6 class="display-6">Ventas diarias </h6>
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">factura</th>
                                    <th scope="col">Articulo</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Cliente</th>
                                    <th scope="col">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Otto</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>Jacob</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>@twitter</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <router-link to="/dashboard">Home</router-link>
</div>
</template>

<script>
export default {

}
</script>

<style >

</style>

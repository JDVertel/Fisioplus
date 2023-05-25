<script>


</script>

<template>
  <div id="AppHC">
    <div class="container-fluid fondo">
      <h4>Datos personales</h4>
      <div class="container">
        <div class="row">
          <div class="col-2">
            <img src="./../images/usuario.jpg" class="redondo" alt="..." />
          </div>
          <div class="col-10">
            <div class="container">
              <div class="row">
                <div class="col-6 col-md-3">NOMBRE1</div>
                <div class="col-6 col-md-3">NOMBRE2</div>
                <div class="col-6 col-md-3">APELLIDO1</div>
                <div class="col-6 col-md-3">APELLIDO2</div>
                <div class="col-6 col-md-3">SEXO</div>
                <div class="col-6 col-md-3">EDAD</div>
                <div class="col-6 col-md-3">TIPO SANGRE</div>
                <div class="col-6 col-md-3">E CIVIL</div>
                <div class="col-6 col-md-3">ESCOLARIDAD</div>
                <div class="col-6 col-md-3">OCUPACION</div>
                <div class="col-6 col-md-3">DOMICILIO</div>
                <div class="col-6 col-md-3">TELEFONO</div>
                <div class="col-6 col-md-3">EMAIL</div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <br />
        </div>
      </div>

      <div class="accordion custom-header" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse1"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapse1"
            >
              DATOS DE CONSULTA
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapse1"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    class="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profileA"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Motivo
                  </button>
                  <button
                    class="nav-link"
                    id="nav-contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contactA"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    S vitales y M fisicas
                  </button>
                  <button
                    class="nav-link"
                    id="nav-disabled-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-disabledA"
                    type="button"
                    role="tab"
                    aria-controls="nav-disabled"
                    aria-selected="false"
                  >
                    Ant Heredofamiliares
                  </button>
                  <button
                    class="nav-link"
                    id="nav-disabled2-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-disabled2A"
                    type="button"
                    role="tab"
                    aria-controls="nav-disabled"
                    aria-selected="false"
                  >
                    Ant Patológicos
                  </button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade"
                  id="nav-profileA"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabindex="0"
                >
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label"
                      >Example textarea</label
                    >
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label"
                      >Diagnostico Medico</label
                    >
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label"
                      >Tratamientos Previos</label
                    >
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label"
                      >Medicamentos Preinscrios</label
                    >
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <button type="button" class="btn btn-outline-primary">
                    Guardar
                  </button>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-contactA"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                  tabindex="0"
                >
                  <div class="container">
                    <br />
                    <div class="row">
                      <div class="col-5">
                        <p>Medidas Fisicas</p>

                        <div class="input-group input-group-sm mb-3">
                          <span
                            class="input-group-text"
                            id="inputGroup-sizing-sm"
                            >Peso</span
                          >
                          <input
                            type="number"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                          />
                        </div>
                        <div class="input-group input-group-sm mb-3">
                          <span
                            class="input-group-text"
                            id="inputGroup-sizing-sm"
                            >Talla</span
                          >
                          <input
                            type="number"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                          />
                        </div>
                        <div class="input-group input-group-sm mb-3">
                          <span
                            class="input-group-text"
                            id="inputGroup-sizing-sm"
                            >Estatura</span
                          >
                          <input
                            type="number"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                          />
                        </div>
                        <div class="input-group input-group-sm mb-3">
                          <span
                            class="input-group-text"
                            id="inputGroup-sizing-sm"
                            >(IMC)</span
                          >
                          <input
                            type="number"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                          />
                        </div>
                      </div>

                      <div class="col-5">
                        <p>Signos Vitales</p>
                        <div class="input-group input-group-sm mb-3">
                          <span
                            class="input-group-text"
                            id="inputGroup-sizing-sm"
                            >Temperatura</span
                          >
                          <input
                            type="text"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                          />
                        </div>
                        <div class="input-group input-group-sm mb-3">
                          <span
                            class="input-group-text"
                            id="inputGroup-sizing-sm"
                            >F. Cardiaca</span
                          >
                          <input
                            type="text"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                          />
                        </div>
                        <div class="input-group input-group-sm mb-3">
                          <span
                            class="input-group-text"
                            id="inputGroup-sizing-sm"
                            >F.Respiratoria</span
                          >
                          <input
                            type="text"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                          />
                        </div>
                        <div class="input-group input-group-sm mb-3">
                          <span
                            class="input-group-text"
                            id="inputGroup-sizing-sm"
                            >T.Arterial</span
                          >
                          <input
                            type="text"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-disabledA"
                  role="tabpanel"
                  aria-labelledby="nav-disabled-tab"
                  tabindex="0"
                >
                  <br />
                  <p>Antecedentes Heredofamiliares</p>
                  <div class="row">
                    <div class="col-6">
                      <div class="container">
                        <div class="mb-1">
                          <select
                            class="form-select form-select-sm"
                            aria-label="Default select example"
                          >
                            <option selected>Enfermedad</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div class="mb-1">
                          <input
                            type="email"
                            class="form-control form-control-sm"
                            id="exampleFormControlInput1"
                            placeholder="Parentesco"
                          />
                        </div>
                        <div class="mb-1">
                          <textarea
                            class="form-control form-control-sm"
                            id="exampleFormControlTextarea1"
                            placeholder="Detalle"
                            rows="2"
                          ></textarea>
                        </div>
                        <button class="btn btn-primary btn-sm" type="submit">
                          Adicionar
                        </button>
                      </div>
                    </div>

                    <div class="col-6">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Enfermedad</th>
                            <th scope="col">Parentesco</th>
                            <th scope="col">Detalle</th>
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
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-disabled2A"
                  role="tabpanel"
                  aria-labelledby="nav-disabled-tab"
                  tabindex="0"
                >
                  <br />
                  <p>Antecedentes Patologicos</p>
                  <div class="row">
                    <div class="col-6">
                      <div class="container">
                        <div class="mb-1">
                          <select
                            class="form-select form-select-sm"
                            aria-label="Default select example"
                          >
                            <option selected>Enfermedad</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div class="mb-1">
                          <input
                            type="email"
                            class="form-control form-control-sm"
                            id="exampleFormControlInput1"
                            placeholder="Parentesco"
                          />
                        </div>
                        <div class="mb-1">
                          <textarea
                            class="form-control form-control-sm"
                            id="exampleFormControlTextarea1"
                            placeholder="Detalle"
                            rows="2"
                          ></textarea>
                        </div>
                        <button class="btn btn-primary btn-sm" type="submit">
                          Adicionar
                        </button>
                      </div>
                    </div>

                    <div class="col-6">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Enfermedad</th>
                            <th scope="col">Parentesco</th>
                            <th scope="col">Detalle</th>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse2"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapse2"
            >
              EVALUACION POSTURAL
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapse2"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
              <!--  -->
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    class="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-homeB"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    lateral
                  </button>
                  <button
                    class="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profileB"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    posterior
                  </button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-homeB"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                  tabindex="0"
                >
                  lateral
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profileB"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabindex="0"
                >
                  posterior
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse3"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapse3"
            >
              INSPECCION DINAMICA
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapse3"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
              fase de apoyo fase de balanceo adaptaci1s del cuerpo durante la
              marcha análisis cuantitativo de la marcha
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse4"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapse4"
            >
              ESCALA VISUAL ANALOGICA DEL DOLOR (EVA)
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapse4"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse5"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapse5"
            >
              EXPLORACION FISICA
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapse5"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
              inspección y palpación (sistema óseo) valoración de rangos de
              movimiento (miembro superior) valoración de rangos de movimiento
              (miembro inferior)
              <!--  -->
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    class="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-homeE"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    inspección y palpación (sistema óseo)
                  </button>
                  <button
                    class="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profileE"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    valoración de rangos de movimiento (miembro superior)
                  </button>
                  <button
                    class="nav-link"
                    id="nav-contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contactE"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    valoración de rangos de movimiento (miembro inferior)
                  </button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-homeE"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                  tabindex="0"
                >
                  inspección y palpación (sistema óseo)
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profileE"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabindex="0"
                >
                  valoración de rangos de movimiento (miembro superior)
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-contactE"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                  tabindex="0"
                >
                  valoración de rangos de movimiento (miembro inferior)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse6"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapse6"
            >
              SISTEMA MUSCULAR
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapse6"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
              inspección y palpación fuerza muscular evaluación muscular (escala
              Daniels) (cuello-tronco-hombro-codo-muñeca-cadera-dedos de la
              mano-rodilla, tobillos dedos de los pies)

              <!--  -->

              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    class="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Home
                  </button>
                  <button
                    class="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Profile
                  </button>
                  <button
                    class="nav-link"
                    id="nav-contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contact"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    Contact
                  </button>
                  <button
                    class="nav-link"
                    id="nav-disabled-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-disabled"
                    type="button"
                    role="tab"
                    aria-controls="nav-disabled"
                    aria-selected="false"
                    disabled
                  >
                    Disabled
                  </button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                  tabindex="0"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabindex="0"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                  tabindex="0"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-disabled"
                  role="tabpanel"
                  aria-labelledby="nav-disabled-tab"
                  tabindex="0"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse7"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapse7"
            >
              MANIOBRAS, ESCALAS O TEST EXPLORATORIOS
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapse7"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse8"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapse8"
            >
              PRUEBAS DE IMAGEN O EXAMENES COMPLEMENTARIOS
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapse8"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse9"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapse9"
            >
              PLAN ANALITICO DE ATENCION FISIOTERAPEUTICA
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapse9"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
              procedimiento actual diagnostico(funcional)fisioterapéutico
              pronóstico de enfermedad objetivos del tratamiento (generales y
              específicos) plan de atención y tratamientos observaciones

              <!--  -->

              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    class="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Home
                  </button>
                  <button
                    class="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Profile
                  </button>
                  <button
                    class="nav-link"
                    id="nav-contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contact"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    Contact
                  </button>
                  <button
                    class="nav-link"
                    id="nav-disabled-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-disabled"
                    type="button"
                    role="tab"
                    aria-controls="nav-disabled"
                    aria-selected="false"
                    disabled
                  >
                    Disabled
                  </button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                  tabindex="0"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabindex="0"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                  tabindex="0"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-disabled"
                  role="tabpanel"
                  aria-labelledby="nav-disabled-tab"
                  tabindex="0"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapse10"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapse10"
            >
              TRATAMIENTO
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapse10"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<style>
#AppHC {
  font-size: 0.7rem;
  background: fixed;
}

.redondo {
  border-radius: 50px 50px 50px 50px;
  width: 70px;
  height: 70px;
}

button.accordion-button {
  padding: 2px;
  background-color: rgb(83, 159, 121);
  color: aliceblue;
  font-size: 0.7rem;
}



</style>

<template>

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
          <v-icon name="fa-user-check" fill="blue" /> Datos de Consulta
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
                class="nav-link active"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profileA"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="true"
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
          <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-profileA"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabindex="0"
            >
              <div class="mb-3">
                <p>Breve descripcion</p>
                <label for="text_motivoconsulta" class="form-label"
                  >Motivo de Consulta</label
                >

                <textarea
                  class="form-control textarea"
                  id="text_motivoconsulta"
                  rows="3"
                ></textarea>
              </div>

              <div class="mb-3">
                <label for="text_diagnosticomedico" class="form-label"
                  >Diagnostico Medico</label
                >
                <textarea
                  class="form-control textarea"
                  id="text_diagnosticomedico"
                  rows="3"
                ></textarea>
              </div>

              <div class="mb-3">
                <label for="text_tratamientosprevios" class="form-label"
                  >Tratamientos Previos</label
                >
                <textarea
                  class="form-control textarea"
                  id="text_tratamientosprevios"
                  rows="3"
                ></textarea>
              </div>

              <div class="mb-3">
                <label
                  for="text_medicamentospreinscritos"
                  class="form-label"
                  >Medicamentos Preinscrios</label
                >
                <textarea
                  class="form-control textarea"
                  id="text_medicamentospreinscritos"
                  rows="3"
                ></textarea>
              </div>
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
                    <div class="container">
                      <div class="input-group mb-1">
                        <input
                          type="number"
                          class="form-control form-control-sm textarea"
                          id="text_peso"
                          placeholder="Peso (kg)"
                        />
                      </div>
                      <div class="input-group mb-1">
                        <input
                          type="number"
                          class="form-control form-control-sm textarea"
                          id="text_talla"
                          placeholder="talla (Cm)"
                        />
                      </div>
                      <div class="input-group mb-1">
                        <input
                          type="number"
                          class="form-control form-control-sm textarea"
                          id="text_estatura"
                          placeholder="Estatura (Cm)"
                        />
                      </div>
                      <div class="input-group mb-1">
                        <input
                          type="number"
                          class="form-control form-control-sm textarea"
                          id="text_imc"
                          placeholder="IMC"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="col-5">
                    <p>Signos Vitales</p>
                    <div class="mb-1">
                      <input
                        type="number"
                        class="form-control form-control-sm textarea"
                        id="text_temp"
                        placeholder="Temp (C)"
                      />
                    </div>
                    <div class="mb-1">
                      <input
                        type="number"
                        class="form-control form-control-sm textarea"
                        id="text_fcardiaca"
                        placeholder="F.cardiaca"
                      />
                    </div>
                    <div class="mb-1">
                      <input
                        type="number"
                        class="form-control form-control-sm textarea"
                        id="text_frespiratoria"
                        placeholder="F.respiraotria"
                      />
                    </div>
                    <div class="mb-1">
                      <input
                        type="number"
                        class="form-control form-control-sm textarea"
                        id="text_tarterial"
                        placeholder="T.Arterial"
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
                        class="form-select form-select-sm textarea"
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
                        class="form-control form-control-sm textarea"
                        id="exampleFormControlInput1"
                        placeholder="Parentesco"
                      />
                    </div>
                    <div class="mb-1">
                      <textarea
                        class="form-control form-control-sm textarea"
                        id="exampleFormControlTextarea1"
                        placeholder="Detalle"
                        rows="2"
                      ></textarea>
                    </div>
                    <button
                      class="btn btn-primary btn-sm textarea"
                      type="submit"
                    >
                      Adicionar
                    </button>
                  </div>
                </div>

                <div class="col-6">
                  <div class="table-responsive">
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
                        class="form-select form-select-sm textarea"
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
                        class="form-control form-control-sm textarea"
                        id="exampleFormControlInput1"
                        placeholder="Parentesco"
                      />
                    </div>
                    <div class="mb-1">
                      <textarea
                        class="form-control form-control-sm textarea"
                        id="exampleFormControlTextarea1"
                        placeholder="Detalle"
                        rows="2"
                      ></textarea>
                    </div>
                    <button
                      class="btn btn-primary btn-sm textarea"
                      type="submit"
                    >
                      Adicionar
                    </button>
                  </div>
                </div>

                <div class="col-6">
                  <div class="table-responsive">
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
          <v-icon name="io-construct-sharp" fill="red" scale="0.7" />

          Evaluacion Postural
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
          <v-icon name="io-construct-sharp" fill="red" scale="0.7" />
          Inspeccion Dinamica
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapse3"
        class="accordion-collapse collapse"
      >
        <div class="accordion-body">
          fase de apoyo fase de balanceo adaptaci1s del cuerpo durante
          la marcha análisis cuantitativo de la marcha
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
          <v-icon name="io-construct-sharp" fill="red" scale="0.7" />
          Escala Visual Analogica del dolor (EVA)
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapse4"
        class="accordion-collapse collapse"
      >
        <div class="accordion-body">
          <strong>This is the first item's accordion body.</strong> It
          is shown by default, until the collapse plugin adds the
          appropriate classes that we use to style each element. These
          classes control the overall appearance, as well as the showing
          and hiding via CSS transitions. You can modify any of this
          with custom CSS or overriding our default variables. It's also
          worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit
          overflow.
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
          <v-icon name="io-construct-sharp" fill="red" scale="0.7" />
          Exploracion Fisica
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapse5"
        class="accordion-collapse collapse"
      >
        <div class="accordion-body">
          inspección y palpación (sistema óseo) valoración de rangos de
          movimiento (miembro superior) valoración de rangos de
          movimiento (miembro inferior)
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
          <v-icon name="io-construct-sharp" fill="red" scale="0.7" />
          Sistema muscular
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapse6"
        class="accordion-collapse collapse"
      >
        <div class="accordion-body">
          inspección y palpación fuerza muscular evaluación muscular
          (escala Daniels)
          (cuello-tronco-hombro-codo-muñeca-cadera-dedos de la
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
          <v-icon name="ai-biorxiv-square" fill="blue" /> Pruebas de
          Imagen o Examenes Complementarios
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapse7"
        class="accordion-collapse collapse"
      >
        <div class="accordion-body">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class="nav-link active"
                id="nav-b-radiografia"
                data-bs-toggle="tab"
                data-bs-target="#nav-radiografia"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Radiografia
              </button>
              <button
                class="nav-link"
                id="nav-b-ecografia"
                data-bs-toggle="tab"
                data-bs-target="#nav-ecografia"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Ecografia
              </button>
              <button
                class="nav-link"
                id="nav-b-resonancia"
                data-bs-toggle="tab"
                data-bs-target="#nav-resonancia"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Resonancia
              </button>
              <button
                class="nav-link"
                id="nav-b-tag"
                data-bs-toggle="tab"
                data-bs-target="#nav-tag"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                TAG
              </button>
              <button
                class="nav-link"
                id="nav-b-otros"
                data-bs-toggle="tab"
                data-bs-target="#nav-otros"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Otros
              </button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-radiografia"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabindex="0"
            >
              <div class="mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label"
                  >Breve descripcion de la Radiografia</label
                >
                <textarea
                  class="form-control textarea"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="nav-ecografia"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabindex="0"
            >
              <div class="mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label"
                  >Breve descripcion de la Ecografia</label
                >
                <textarea
                  class="form-control textarea"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="nav-resonancia"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabindex="0"
            >
              <div class="mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label"
                  >Breve descripcion de la Resonancia</label
                >
                <textarea
                  class="form-control textarea"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="nav-tag"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabindex="0"
            >
              <div class="mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label"
                  >Breve descripcion del TAG</label
                >
                <textarea
                  class="form-control textarea"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="nav-otros"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabindex="0"
            >
              <div class="mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label"
                  >Breve descripcion de Otros</label
                >
                <textarea
                  class="form-control textarea"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
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
          data-bs-target="#panelsStayOpen-collapse8"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapse8"
        >
          <v-icon name="io-construct-sharp" fill="red" scale="0.7" />
          Maniobras, Escalas o Tests Exploratorios
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapse8"
        class="accordion-collapse collapse"
      >
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It
          is hidden by default, until the collapse plugin adds the
          appropriate classes that we use to style each element. These
          classes control the overall appearance, as well as the showing
          and hiding via CSS transitions. You can modify any of this
          with custom CSS or overriding our default variables. It's also
          worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit
          overflow.
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
          <v-icon name="io-construct-sharp" fill="red" scale="0.7" />
          Plan Analitico de Atencion Fisioterapeutica
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapse9"
        class="accordion-collapse collapse"
      >
        <div class="accordion-body">
          procedimiento actual diagnostico(funcional)fisioterapéutico
          pronóstico de enfermedad objetivos del tratamiento (generales
          y específicos) plan de atención y tratamientos observaciones

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
          <v-icon name="fa-hand-holding-medical" fill="blue" />
          Tratamiento
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapse10"
        class="accordion-collapse collapse"
      >
        <div class="accordion-body">
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Descripcion</label
            >
            <textarea
              class="form-control textarea"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>
    </div> 
             </div>
 
</template>

<script>

</script>

<style>

</style>
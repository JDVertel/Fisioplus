<script setup>

</script>

<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="@/assets/logo.svg" id="icon" alt="User Icon"
            style="width: 25px;" />Menu</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page">Home</a>
            </li>
            <li class="nav-item">
              <router-link to="/login"> <a class="nav-link">Login</a></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about"> <a class="nav-link">Acerca de</a></router-link>
            </li>

            <li class="nav-item">
              <hr class="navbar-divider">
            </li>
            <li class="nav-item">
              <router-link to="/admin"> <a class="nav-link">Admin</a></router-link>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  </div>
</template>

<style scoped></style>

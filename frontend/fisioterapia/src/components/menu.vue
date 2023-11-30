<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>Menu
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link-menu" aria-current="page"> Login</a>
                </li>

                <li class="nav-item">
                    <router-link to="/about"><a class="nav-link-menu" aria-current="page">Acerca de</a></router-link>
                </li>

                <li class="nav-item">
                    <hr class="navbar-divider" />
                </li>
                <li class="nav-item">
                    <router-link to="/dashboard"><a class="nav-link-menu" aria-current="page">Dashboard</a></router-link>
                </li>

            </ul>
        </div>
    </div>+
    
</nav>
</template>

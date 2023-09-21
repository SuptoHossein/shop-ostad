<script setup>
const date = new Date().getFullYear()
</script>

<template>
  <div class="container">
    <div class="row">
      <header class="mb-5 border-bottom">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Shop-M</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="d-flex justify-content-end collapse navbar-collapse" id="navbarSupportedContent">
              <div class=" " role="search">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/products" class="nav-link">Products</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>


      <router-view></router-view>

      <footer>
        <div class="container">
          <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
              <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                <svg class="bi" width="30" height="24">
                  <use xlink:href="#bootstrap"></use>
                </svg>
              </a>
              <span class="mb-3 mb-md-0 text-body-secondary">© {{ date }} Company, Inc</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li class="ms-3"><a class="text-body-secondary" href="#">
                <svg class="bi" width="24" height="24">
                  <use xlink:href="#twitter"></use>
                </svg>
              </a></li>
              <li class="ms-3"><a class="text-body-secondary" href="#">
                <svg class="bi" width="24" height="24">
                  <use xlink:href="#instagram"></use>
                </svg>
              </a></li>
              <li class="ms-3"><a class="text-body-secondary" href="#">
                <svg class="bi" width="24" height="24">
                  <use xlink:href="#facebook"></use>
                </svg>
              </a></li>
            </ul>
          </footer>
        </div>
      </footer>

    </div>
  </div>
</template>

<script setup>
import {reactive, onBeforeMount, ref} from "vue";
import axios from "axios";

const products = ref()

onBeforeMount(() => {
  axios.get(`https://dummyjson.com/products?limit=20`)
      .then(res => {
        products.value = res.data.products
      })
})
function loadMore() {
    axios.get(`https://dummyjson.com/products?limit=10&skip=10`)
        .then(res=>{
            products.value = [...products.value, ...res.data.products]
        })
}
</script>

<template>
  <section class="py-1 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Product Page</h1>
        <p class="lead text-body-secondary">Something short and leading about the collection below—its contents, the
          creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
      </div>
    </div>
  </section>

  <section>
    <div class="row">
      <div class="col-4 mb-3" v-for="product in products" :key="product.id">
        <div class="card shadow-sm">
          <router-link :to="{name: 'product', params: {id: product.id}}">
            <img :src="product.thumbnail" width="300" height="250" class="p-2 mx-auto" alt="">
          </router-link>
          <div class="card-body border-top">
            <router-link :to="{name: 'product', params: {id: product.id}}">
              <p class="card-text">{{ product.description }}</p>
            </router-link>
          </div>
        </div>
      </div>

        <div class="mt-5 text-center">
            <button @click="loadMore()" class="btn btn-outline-primary">Load More</button>
        </div>
    </div>
  </section>
</template>

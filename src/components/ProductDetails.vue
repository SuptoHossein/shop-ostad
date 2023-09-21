<script setup>
import {useRoute} from "vue-router";
import {onBeforeMount, reactive} from "vue";
import axios from "axios";

const product = reactive({})
const route = useRoute()
const id = route.params.id;
onBeforeMount(() => {
  axios.get(`https://dummyjson.com/products/${id}`)
      // .then(res => res.json())
      .then(data => {
        product.brand = data.data.brand
        product.category = data.data.category
        product.title = data.data.title
        product.description = data.data.description
        product.price = data.data.price
        product.discountPercentage = data.data.discountPercentage
        product.rating = data.data.rating
        product.stock = data.data.stock
        product.thumbnail = data.data.thumbnail
        product.images = data.data.images
        console.log(product.images)
      })
})
</script>

<template>
  <section class="py-1 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto border-bottom">
        <h1 class="fw-light">{{ product.title }}</h1>

      </div>
    </div>
  </section>

  <section>
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-6">
              <div class="row">
                  <div class="col-2">
                      <p v-for="image in product.images" :key="image.index">
                          <router-link to="#"><img class="border border-primary" style="margin-right: 5px;" width="70" :src="image"  alt=""></router-link>
                      </p>
                  </div>
                  <div class="col-10">
                      <img :src="product.thumbnail" width="400" alt="">
                  </div>
              </div>
          </div>

          <div class="col-6">
            <p>{{ product.rating }}</p>
            <p>${{ product.price }}</p>
            <p>{{ product.description }}</p>
            <p><input type="number" style="width: 80px" value="1">
              <button class="btn btn-info btn-sm">Add to Cart</button>
            </p>
            <div class="pt-10 border-top">
              <p class="mt-2">Availability: {{ product.stock }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

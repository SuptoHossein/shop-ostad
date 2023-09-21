import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import ProductList from "../components/ProductList.vue";
import ProductDetails from "../components/ProductDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',
      name: '',
      component: Home
    },
    {
      path:'/products',
      component: ProductList
    },
    {
      path:'/products/:id',
      name: 'product',
      component: ProductDetails
    },
  ]
});

export default router

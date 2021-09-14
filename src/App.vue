<template>
  <div id="app">
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'

export default {
  components: { 
    'product-list-one': ProductListOne, 
    'product-list-two': ProductListTwo },
  name: 'app',
  data () {
    return {
      products: [
        {title: 'T-Shirt', price: 12},
        {title: 'Pant', price: 9},
        {title: 'Sharee', price: 20},
        {title: 'Shirt', price: 15},
        {title: 'Cap', price: 5},
      ]
    }
  }
}
</script>

<style>
body{
    font-family: Ubuntu;
    color: #555;
}
</style>

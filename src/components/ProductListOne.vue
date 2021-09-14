<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in saleProducts">
        <span class="title"> {{ product.title }}</span>
        <span class="price"> ${{ product.price.toFixed(2) }}</span>
      </li>
    </ul>
    <button @click="reducePrice(2)">Reduce Price</button>
  </div>
</template>

<script>
export default {
  computed: {
      products() {
          return this.$store.state.products
      },
      saleProducts() {
        //   This logic is transferred to store in getters
        /*
           var saleProducts = this.$store.state.products.map(product => {
              return {
                  title: '**' + product.title,
                  price: product.price / .30
              }
          })
          return saleProducts
        */
        return this.$store.getters.saleProducts
      }
  },
  methods: {
      reducePrice: function (amount) {
          /*
          this.$store.state.products.forEach(product => {
              product.price -= 1;
          });
          */
        //   this.$store.commit('REDUCE_PRICE')

        // After adding actions in store, use dispatching to the actions
        this.$store.dispatch('reducePrice', amount)
      }
  }
};
</script>

<style scoped>
#product-list-one {
  background: hsl(9, 83%, 77%);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul {
  padding: 0;
}
#product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #e8800c;
}
</style>

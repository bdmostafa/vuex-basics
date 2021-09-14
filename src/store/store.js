import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        products: [
            {title: 'T-Shirt', price: 12},
            {title: 'Pant', price: 9},
            {title: 'Sharee', price: 20},
            {title: 'Shirt', price: 15},
            {title: 'Cap', price: 5},
          ]
    },
    getters: {
        saleProducts: state => {
            var saleProducts = state.products.map(product => {
                return {
                    title: '**' + product.title + ' (30% OFF)',
                    price: product.price * .70
                }
            })
            return saleProducts
        }
    },
    mutations: {
        reducePrice: state => {
            state.products.forEach(product => {
                product.price -= 1;
            });
        }
    }
})
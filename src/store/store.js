import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            {title: 'T-Shirt', price: 12},
            {title: 'Pant', price: 9},
            {title: 'Sharee', price: 20},
            {title: 'Shirt', price: 15},
            {title: 'Cap', price: 5},
          ]
    }
})
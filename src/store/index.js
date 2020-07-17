import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
////////////////////////////////////////////////////////////////////////
import firebase from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCIV6osXOxS2vHhOib98y5xDbIl7Lle0bs",
  authDomain: "napolle-3719b.firebaseapp.com",
  databaseURL: "https://napolle-3719b.firebaseio.com",
  projectId: "napolle-3719b",
  storageBucket: "napolle-3719b.appspot.com",
  messagingSenderId: "158369612288",
  appId: "1:158369612288:web:2ec41744659eb4552f0ee5",
};
require("firebase/auth");
let app = firebase.initializeApp(firebaseConfig);
/////////////////////////////////////////////////////////////////////////

export default new Vuex.Store({
  state: {
    items: [{
        nombre: "chocolate",
        cantidad: 0,
        price: 350,
        existencia: 3,
      },
      {
        nombre: "capuchino",
        cantidad: 0,
        price: 350,
        existencia: 3,
      },
      {
        nombre: "chocolate",
        cantidad: 0,
        price: 350,
        existencia: 3,
      },
      {
        nombre: "capuchino",
        cantidad: 0,
        price: 350,
        existencia: 3,
      },
      {
        nombre: "chocolate",
        cantidad: 0,
        price: 350,
        existencia: 3,
      },
      {
        nombre: "capuchino",
        cantidad: 0,
        price: 350,
        existencia: 3,
      },
      {
        nombre: "chocolate",
        cantidad: 0,
        price: 350,
        existencia: 3,
      },
      {
        nombre: "capuchino",
        cantidad: 0,
        price: 350,
        existencia: 3,
      },
      {
        nombre: "cafe frio de ayer",
        cantidad: 0,
        price: 350,
        existencia: 3,
      },
      {
        nombre: "pan duro que añuga y mata",
        cantidad: 0,
        price: 350,
        existencia: 3,
      },
    ],


    datos_user: {
      name: "",
      last: null,
      pass: "",
      user: "",
    },



  },
  mutations: {
    aumentar(state, index) {
      var pan = state.items[index];
      if (pan.cantidad < pan.existencia) {
        return pan.cantidad++;
      }
    },
    disminuir(state, index) {
      var pan = state.items[index];
      if (pan.cantidad > 0) {
        return pan.cantidad--;
      }
    },
    valor_por_cantidad(state, index) {
      var pan = state.items[index];
      return pan.cantidad * pan.price;

    },


  },
  actions: {},
  modules: {},
});
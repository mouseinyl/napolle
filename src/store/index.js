import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
////////////////////////////////////////////////////////////////////////
import firebase from "firebase/app";
import db from "./db.js"
/////////////////////////////////////////////////////////////////////////

export default new Vuex.Store({
  state: {
    items: [],
    selecion: [],
    espera: false
  },
  mutations: {
    cargando(state, dato) {
      state.items = dato
    },
    estado(state, estado) {
      state.espera = estado
    },
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
  actions: {
    recuperando({
      commit
    }) { //recuperandos datos lista de productos
      commit("estado", true)
      db.once('value', snapshot => {
        const documents = snapshot.val();
        commit("cargando", documents);
        commit("estado", false)
      })
    }
  },
  modules: {},
});
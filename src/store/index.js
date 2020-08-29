import Vue from "vue";
import Vuex from "vuex";
import generalM from "./generales";
import databaseM from "./database";
import authM from './auth'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        generalM,
        databaseM,
        authM
    },
});
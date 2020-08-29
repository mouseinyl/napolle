import { db, auth } from "./firebase"
import generalM from "./generales";
import databaseM from "./database";



const state = {
    Is_logged: false
};
const mutations = {
    sign_swich(state, estado) {
        state.Is_logged = estado
    }
};
const actions = {
    outsign({ commit }) {
        auth.signOut()
        commit("sign_swich", false)
        commit("databaseM/clearinfouser")
    },
    signin({ commit }, info) {
        return auth.signInWithEmailAndPassword(info.user, info.pass)
    },
    signup({ commit }, info) {
        return auth.createUserWithEmailAndPassword(info.user, info.pass)
    }
};
const modules = {
    generalM,
    databaseM

};
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    modules
}
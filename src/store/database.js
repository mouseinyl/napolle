import { db } from "./firebase"
import generalM from "./generales";
const state = {
    items: [],
    temp_list_shop: [],
    user_info: { name: "", pass: "", email: "", uid: "" }
}
const mutations = {
    cargarItems(state, snapshop) {
        state.items = snapshop;
    },
    cargar_list_temp(state, temp) {
        state.temp_list_shop = temp
    },
    getinfouser(state) {
        return state.user_info
    },
    cargarinfouser(state, info) {
        console.log("aqui")
        state.user_info = info
        state.temp_list_shop = info.list_car
    },
    clearinfouser(state) {
        state.user_info = { name: "", pass: "", email: "", uid: "", list_car: "" };

    }
}
const actions = {
    getItems({ commit }) {
        db.ref('items/productos').on('value', (snap) => {
            const doc = snap.val()
            commit('cargarItems', doc)
            generalM.mutations.Isloadding()
        })
    },
    setinfouser({ commit }, info) {
        console.log(info)
        db.ref("user/" + info.uid).set({
            name: info.name,
            last: info.last,
            uid: info.uid,
            email: info.email
        }, (resp) => {
            if (resp) {
                console.log(resp)
            } else {
                console.log("creado")
            }
        })
    },

    getinfouser({ commit }, info_data) {
        db.ref("user/" + info_data.uid).on("value", (snap) => {
            const doc = snap.val()
            console.log(doc)
            const info = {
                name: doc.name,
                last: doc.last,
                uid: doc.uid,
                email: doc.email,
                list_car: doc.list_car
            }
            console.log("aqui2")
            commit("cargarinfouser", info)
        })
    },
    setlistcart({ commit }, info_data) {
        db.ref("user/" + info_data.datos.uid + "/list_car").set(info_data.list)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
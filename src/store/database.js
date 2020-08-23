import {db} from "./firebase"
import generalM from "./generales";
const state={
    items:[],
    temp_list_shop:[]
    
}
const mutations={
    cargarItems(state,snapshop){
        state.items=snapshop;
    },
    cargar_list_temp(state,temp){
        console.log("exito")
        state.temp_list_shop=temp
        console.log("exito", state.temp_list_shop)
    }
}
const actions={
    getItems({commit}){
       db.ref('items').on('value',(snap)=>{
            const doc=snap.val()
            commit('cargarItems',doc)
            generalM.mutations.Isloadding()
        })
    },
}

 export default{
    namespaced:true,
    state,
    mutations,
    actions
 }
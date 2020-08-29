const state = {
    loadding: true,
}
const mutations = {
    Isloadding() {
        state.loadding = !state.loadding;
    },
    setAlertMessage(state, data) {
        M.toast({ html: data.menssage });
    }
}
const actions = {}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
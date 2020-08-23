const state = {
    loadding: true,
}
const mutations = {
    Isloadding() {
        state.loadding = !state.loadding;
    }
}
const actions = {}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
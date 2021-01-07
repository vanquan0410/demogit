const state = {
    reloadPage: false,
};
const mutations ={
    UPLOAD_RELOAD: (state, data) =>{
        state.reloadPage = data;
    },
};
const actions = {
    updateReload({commit}, data){
        commit('UPLOAD_RELOAD', data);
    }
};
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
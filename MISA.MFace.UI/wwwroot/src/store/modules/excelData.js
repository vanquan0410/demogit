const state = {
    listExcel:[],
    listErrorExcel:[],
    listDuplicateExcel:[],
    listDuplicateDB:[],
};
const mutations ={
    ADD_LIST_EXCELS: (state, list) => {
        state.listExcel = list;
    },
    ADD_LIST_ERROR_EXCELS: (state, list) => {
        state.listErrorExcel = list;
    },
    ADD_LIST_DUPLICATE_EXCELS: (state, list) => {
        state.listDuplicateExcel = list;
    },
    ADD_LIST_DUPLICATE_DB: (state, list) => {
        state.listDuplicateDB = list;
    }
};
const actions = {
    addListExcels({commit}, list){
        commit('ADD_LIST_EXCELS', list);
    },
    addListErrorExcels({commit}, list){
        commit('ADD_LIST_ERROR_EXCELS', list);
    },
    addListDuplicateExcels({commit}, list){
        commit('ADD_LIST_DUPLICATE_EXCELS', list);
    },
    addListDuplicateDB({commit}, list){
        commit('ADD_LIST_DUPLICATE_DB', list);
    }
};
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
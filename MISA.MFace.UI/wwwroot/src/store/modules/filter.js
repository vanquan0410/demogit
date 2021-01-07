const state = {
    filter: {
        month: 0,
        year: 0,
        keyword: "",
        declarationStatus: 0,
        taxType: 0,
        deleteMulti: false,
        signMulti: false,
        refresh: false
    }
}

const mutations = {
    ADD_FILTER: (state, filter) => {
        if (filter.refresh == undefined) filter = { refresh: false, ...filter }
        state.filter = filter;
    },
    ADD_DELETEMULTI: (state, val) => {
        state.filter.deleteMulti = val
    },
    ADD_REFRESH: (state, val) => {
        state.filter.refresh = val
    },
    ADD_SIGNMULTI: (state, val) => {
        state.filter.signMulti = val
    }
}

const actions = {
    addFilter({ commit }, filter) {
        commit('ADD_FILTER', filter)
    },
    addDeleteMulti({ commit }, val) {
        commit('ADD_DELETEMULTI', val)
    },
    addRefresh({ commit }, val) {
        commit('ADD_REFRESH', val)
    },
    addSignMulti({ commit },val) {
        commit('ADD_SIGNMULTI', val)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
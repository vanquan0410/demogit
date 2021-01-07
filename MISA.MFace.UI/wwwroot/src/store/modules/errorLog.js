const state = {
  logs: [],
  statusLog: false,
};

const mutations = {
  ADD_ERROR_LOG: (state, log) => {
    state.logs.push(log);
    state.statusLog = true;
  },
  CLEAR_ERROR_LOG: (state) => {
    state.logs.splice(0);
    state.statusLog = false;
  },
};

const actions = {
  addErrorLog({ commit }, log) {
    commit("ADD_ERROR_LOG", log);
  },
  clearErrorLog({ commit }) {
    commit("CLEAR_ERROR_LOG");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

import Cookie from "js-cookie"

const state = {
  mode: Cookie.get('mode') ? Cookie.get('mode') : "",
  dataOfRow: [],
  data: [],
  createdDate: "",
  TemporaryTaxType: "",
};

const mutations = {
  setData(state, data) {
    state.data = data;
  },

  setDataOfRow(state, data) {
    state.dataOfRow = data;
  },

  setTaxInfo(state, data) {
    state.createdDate = data.CreatedDate;
    state.TemporaryTaxType = data.TemporaryTaxType;
  },
};

const actions = {
  setMode({ state }, value) {
    state.mode  = value;
    Cookie.set('mode', value)
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

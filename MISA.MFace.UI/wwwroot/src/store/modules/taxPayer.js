
const state = {
  secretInfor:{},
};

const mutations = {
    ADD_TAX_PAYER: (state, obj) => {
        state.secretInfor = obj;
      },
};

const actions = {
    addTaxPayerInfor({ commit }, obj) {
      commit('ADD_TAX_PAYER', obj);
    }
  };

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

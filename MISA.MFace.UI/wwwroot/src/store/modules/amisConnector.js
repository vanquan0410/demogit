const state = {
  loginInfo: {
    unique_name: "admin",
    jti: "66da228b-1cf1-4669-a237-2c0e6b107bfe",
    iat: "8/26/2020 8:46:30 AM",
    session_id: "1bf89d2b6566459caf0207e4f6a0d9fa",
    tenant_id: "test01",
    fullname: "Hưng Nguyễn Tuấn",
    nbf: 1598431590,
    exp: 1598517945,
    iss: "http://auth.misa.com.vn",
    aud: "http://auth.misa.com.vn"
  },
  token: {},
};

const mutations = {
  ADD_LOGIN_INFO: (state, loginInfo) => {
    state.loginInfo.push(loginInfo);
  },
  CLEAR_ERROR_LOG: (state) => {
    state.logs.splice(0);
  },
  ADD_TOKEN: (state, token) => {
    state.token = token;
  },
};

const actions = {
  addLoginInfo({ commit }, loginInfo) {
    commit("ADD_LOGIN_INFO", loginInfo);
  },
  clearErrorLog({ commit }) {
    commit("CLEAR_ERROR_LOG");
  },
  addToken({ commit }, token) {
    commit("ADD_TOKEN", token);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

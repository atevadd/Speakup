import { createStore } from "vuex";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    userToken: (state) => state.userDetails.token,
  },
});

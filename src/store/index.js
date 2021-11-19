import { createStore } from 'vuex'

export default createStore({
  state: {
    userDetails:{
      token: '',
      userId: null,
      firstname: '',
      lastname: '',
      email: '',
      gender: '',
      userImage: '',
      dept: '',
      address: '',
      created: ''
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters:{
    userToken: (state) => state.userDetails.token
  }
})

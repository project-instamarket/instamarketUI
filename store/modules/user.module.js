const SET_USER = 'SET_USER'

const userModule = {
  namespaced: true,
  mutations: {
    [SET_USER](state, payload) {
      state.user = payload
    }
  },
  state: {
    user: {},
    pending: false
  },
  actions: {
    setLoggedinUser({ commit }, payload) {
      commit(SET_USER, payload)
    }
  }
}

export default userModule

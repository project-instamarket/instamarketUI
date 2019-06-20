const SET_USER = 'SET_USER'
const SET_LOADING = 'SET_LOADING'
const SET_MEDIA = 'SET_MEDIA'

const userModule = {
  namespaced: true,
  mutations: {
    [SET_USER](state, payload) {
      state.user = payload
    },
    [SET_LOADING](state, payload) {
      state.loading = payload
    },
    [SET_MEDIA](state, payload) {
      state.media = payload
    }
  },
  state: () => ({
    user: {},
    media: [],
    loading: false
  }),
  actions: {
    setLoggedinUser({ commit }, payload) {
      commit(SET_USER, payload)
    },
    async fetchUserMedia({ commit, dispatch }) {
      try {
        commit(SET_LOADING, true)
        const { data: userMedia } = await this.$axios.$get('/user/media')
        commit(SET_MEDIA, userMedia)
        commit(SET_LOADING, false)
        return dispatch()
      } catch (error) {
        commit(SET_LOADING, false)
        return Promise.reject(error)
      }
    }
  },
  getters: {
    userInfo: state => state.user
  }
}

export default userModule

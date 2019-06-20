import cookies from 'js-cookie'
import decode from 'jwt-decode'

const SET_LOGIN_STATE = 'SET_LOGIN_STATE'
const SET_LOGOUT_STATE = 'SET_LOGOUT_STATE'
const SET_LOADING = 'SET_LOADING'

const authModule = {
  namespaced: true,
  mutations: {
    /**
     * Set application state isAuthenticated to true
     *
     * @param {any} state
     */
    [SET_LOGIN_STATE](state) {
      state.isAuthenticated = true
    },

    [SET_LOGOUT_STATE](state) {
      state.isAuthenticated = false
    },

    [SET_LOADING](state, payload) {
      state.loading = payload
    }
  },
  actions: {
    async authenticateUser({ commit, dispatch }, payload) {
      try {
        commit(SET_LOADING, true)
        const { data } = await this.$axios.$post('/auth', payload)
        commit(SET_LOADING, false)
        return dispatch('onSuccessfulLogin', data)
      } catch (error) {
        commit(SET_LOADING, false)
        return Promise.reject(error)
      }
    },

    onSuccessfulLogin({ commit, dispatch }, payload) {
      commit(SET_LOGIN_STATE)
      cookies.set('im-token', payload.token)
      this.$axios.setToken(payload.token, 'Bearer')
      dispatch('userModule/setLoggedinUser', decode(payload.token), { root: true })
    }
  },
  state: () => ({
    isAuthenticated: false,
    loading: false
  }),
  getters: {
    isUserAuthenticated: state => state.isAuthenticated
  }
}

export default authModule

import cookies from 'js-cookie'
import decode from 'jwt-decode'

const SET_LOGIN_STATE = 'SET_LOGIN_STATE'
const SET_LOGOUT_STATE = 'SET_LOGOUT_STATE'

const apiBaseUrl = process.env.API_BASE_URL
console.log(apiBaseUrl, '<==== API BASE URL')

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
    }
  },
  actions: {
    async authenticateUser({ commit, dispatch }, payload) {
      try {
        const response = await this.$axios.$post('/auth', payload)
        return dispatch('onSuccessfulLogin', response.data)
      } catch (error) {
        return Promise.reject(error)
      }
    },

    onSuccessfulLogin({ commit, dispatch }, payload) {
      commit(SET_LOGIN_STATE)
      cookies.set('im-token', payload.token)
      dispatch('userModule/setLoggedinUser', decode(payload.token), { root: true })
    }
  },
  state: () => ({ isAuthenticated: false }),
  getters: {
    isUserAuthenticated: state => state.isAuthenticated
  }
}

export default authModule

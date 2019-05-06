import { Store } from 'vuex'

// modules
import authModule from './modules/auth.module'
import userModule from './modules/user.module'

const store = () => new Store({
  state: {},
  modules: {
    authModule,
    userModule
  }
})

export default store

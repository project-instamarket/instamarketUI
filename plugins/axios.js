import cookies from 'js-cookie'
import camelcaseKeys from 'camelcase-keys'

export default ({ $axios, store, redirect }) => {
  if (process.server) {
    return
  }

  $axios.interceptors.request.use((config) => {
    const token = cookies.get('im-token')

    // Update token axios header
    if (token) {
      // eslint-disable-next-line dot-notation
      config.headers.common['Authorization'] = `Bearer ${token}`
    }
    return config
  })

  $axios.interceptors.response.use((response) => {
    return camelcaseKeys(response, { deep: true })
  }, (err) => {
    if (err.response.status === 401 && err.response.statusText === 'Unauthorized') {
      store.dispatch('authModule/logout')
      return redirect('/')
    } else {
      return Promise.reject(err)
    }
  })
}

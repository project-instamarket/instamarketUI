import cookies from 'js-cookie'

export default ({ store, redirect, route }) => {
  const isUserAuthenticated = store.state.authModule.isAuthenticated
  const isRouteRoot = (route.path === '/')
  const token = cookies.get('im-token')

  if (isRouteRoot && !isUserAuthenticated) {
    return {}
  } else if (!isRouteRoot && (!isUserAuthenticated || !token)) {
    return redirect('/')
  }
}

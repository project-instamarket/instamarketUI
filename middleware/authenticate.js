export default ({ store, redirect, route }) => {
  const isUserAuthenticated = store.state.authModule.isAuthenticated
  const isRouteRoot = (route.path === '/')

  if (isRouteRoot && !isUserAuthenticated) {
    return {}
  } else if (!isRouteRoot && !isUserAuthenticated) {
    return redirect('/')
  }
}

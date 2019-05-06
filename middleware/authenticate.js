export default function ({ store, redirect, route }) {
  const doesRouteNeedAuth = !(route.path === '/')
  // If the user is not authenticated
  if (!store.state.authenticated && doesRouteNeedAuth) {
    return redirect('/')
  }
}

export default function ({ store, redirect }) {
  if (store.state.auth.config.auth === false) {
    return redirect('/login')
  }
  return null
}

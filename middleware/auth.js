export default function ({ store, redirect }) {
  if (store.state.auth.auth === false) {
    return redirect('/')
  }
  return null
}

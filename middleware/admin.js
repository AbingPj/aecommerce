export default function ({ store, redirect }) {
  if (! store.state.auth.token) {
    return redirect('/');
  } else {
    if(store.state.auth.role_id !== 1){
      return redirect('/');
    }
  }
}

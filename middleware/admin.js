export default function ({ store, redirect }) {
  if (! store.state.token) {
    return redirect('/');
  } else {
    if(! store.state.role === 4){
      return redirect('/');
    }
  }
}

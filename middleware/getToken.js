import cookies from 'js-cookie';

export default function ({ store, redirect }) {
  const token = cookies.get('x-access-token');
  if (token) {
    console.log('naay_token')
    store.dispatch('auth/check', {token})
    .catch(errors => {
      console.dir(errors);
      store.dispatch('auth/removeToken');
    });
  }else{
    console.log('walay token')
    store.dispatch('auth/removeToken');
  }
}

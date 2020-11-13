import cookies from 'js-cookie';

export default function ({ store, redirect }) {
  const token = cookies.get('x-access-token');
  if (token) {
    console.log('naay_token')
    let expiresIn = 86400;
    store.dispatch('setToken', {token, expiresIn});
  }else{
    store.dispatch('logout');
  }
}

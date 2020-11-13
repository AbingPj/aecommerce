import cookies from 'js-cookie';

export default function ({ store, redirect }) {
  const token = cookies.get('x-access-token');
  if (token) {
    console.log('naay_token')
    let expiresIn = 86400;
    store.dispatch('auth/setToken', {token, expiresIn});
  }else{
    console.log('walay token')
    store.dispatch('auth/logout');
  }
}

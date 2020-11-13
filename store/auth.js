import cookies from 'js-cookie';

export const state = () => ({
  token: null,
  role: null,
});

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },

  REMOVE_TOKEN(state) {
    state.token = null;
  }
};

export const actions = {
  setToken({commit}, {token}) {
    this.$axios.setToken(token, 'Bearer');
    const expiryTime = new Date(new Date().getTime() + 86400 * 1000);
    cookies.set('x-access-token', token, {expires: expiryTime});
    commit('SET_TOKEN', token);
  },

  login({ commit, state, dispatch }, data) {
    return new Promise((resolve, reject) => {
      console.log(data)
      this.$axios.post('/api/login', data)
        .then(res => {
          let token = res.data.token;
          dispatch('setToken', {token});
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  logout({commit}) {
    this.$axios.setToken(false);
    cookies.remove('x-access-token');
    commit('REMOVE_TOKEN');
  }
};

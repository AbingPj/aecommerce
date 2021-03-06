import cookies from 'js-cookie';

export const state = () => ({
  me:{},
  token: null,
  role_id: null,
  isLogin: false,
  num1: 1,
  num2: 2,
});

export const getters = {
  getNum1Num2(state) {
    return (state.num1 + state.num2);
  },
  getIsLogin(state) {
    return state.isLogin;
  },
  getIsAdmin(state) {
    return state.role_id === 1;
  },
};

export const mutations = {
  SET_DATA(state, data) {
    state.me = data;
  },

  SET_TOKEN(state, token) {
    state.token = token;
  },

  REMOVE_TOKEN(state) {
    state.token = null;
  },

  SET_ROLE_ID(state, role_id) {
    state.role_id = role_id;
  },

  REMOVE_ROLE_ID(state) {
    state.role_id = null;
  },

  SET_LOGIN_IN(state) {
    state.isLogin = true;
  },

  SET_LOGIN_OUT(state) {
    state.isLogin = false;
  },
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
      this.$axios.post('/api/login', data)
        .then(res => {
          let token = res.data.data.token;
          // console.log(token);
          dispatch('setToken', {token});
          dispatch('me', {token});
          commit('SET_ROLE_ID', res.data.data.role_id);
          commit('SET_LOGIN_IN');
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  async me({commit}, {token}) {
    const res = await this.$axios.$get('/api/me');
    commit('SET_DATA', res);
  },
  logout({commit}) {
    console.log('logout')
    this.$axios.setToken(false);
    cookies.remove('x-access-token');
    commit('REMOVE_TOKEN');
    commit('REMOVE_ROLE_ID');
    commit('SET_LOGIN_OUT');
  },
  async check({dispatch,commit}, {token}) {
    this.$axios.setToken(token, 'Bearer');
    const expiryTime = new Date(new Date().getTime() + 86400 * 1000);
    cookies.set('x-access-token', token, {expires: expiryTime});
    cookies.set('x-access-role_id', token, {expires: expiryTime});
    commit('SET_TOKEN', token);
    const res = await this.$axios.$get('/api/me');
    console.log('me');
    commit('SET_DATA', res);
    commit('SET_ROLE_ID', res.role_id);
    commit('SET_LOGIN_IN');
  },
  removeToken({commit}) {
    this.$axios.setToken(false);
    cookies.remove('x-access-token');
    commit('REMOVE_TOKEN');
    commit('REMOVE_ROLE_ID');
    commit('SET_LOGIN_OUT');
  }
};

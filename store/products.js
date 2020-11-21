// http://52.74.70.6:88/api/store/products

export const state = () => ({
  products: []
});

export const getters = {
  getProducts(state) {
    return state.products;
  },
};

export const mutations = {
  SET_PRODUCTS(state, data) {
    state.products = data;
  },
};

export const actions = {
  async addProduct({dispatch,commit}, data) {
   const res = await this.$axios.$post('/api/admin/addProduct', data);
   dispatch('retrieveProducts')
 },
  async retrieveProducts({ commit }) {
    const data = await this.$axios.$get('/api/admin/products');
    commit('SET_PRODUCTS', data);
  },
};

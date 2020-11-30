// http://52.74.70.6:88/api/store/products

export const state = () => ({
  products: [],
  categories: [],
  productsDetail: {
    category:{}
  }
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
  SET_PRODUCT_DETAIL(state, data) {
    state.productsDetail = data;
  },
  SET_CATEGORIES(state, data) {
    state.categories = data;
  },
};

export const actions = {
  async addProduct({dispatch,commit}, data) {
   const res = await this.$axios.$post('/api/admin/addProduct', data);
   dispatch('retrieveProducts')
 },

 async getProductDetails({dispatch,commit}, id) {
  const data = await this.$axios.$get('/api/getProductDetailsCustomer?product_id='+id);
  commit('SET_PRODUCT_DETAIL', data);
 },
  async retrieveProducts({ commit }) {
    const data = await this.$axios.$get('/api/products');
    commit('SET_PRODUCTS', data);
  },
  async retrieveCategories({dispatch,commit}) {
    const data = await this.$axios.$get('/api/customer/getCategories');
    commit('SET_CATEGORIES', data)
  },



};

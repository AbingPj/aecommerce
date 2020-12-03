// http://52.74.70.6:88/api/store/products

export const state = () => ({
  cart: [],
});

export const getters = {
  // getProducts(state) {
  //   return state.products;
  // },
};

export const mutations = {
  SET_CART(state, data) {
    state.cart = data;
  },
};

export const actions = {
  async getCartContent({commit}) {
    const data = await this.$axios.$get('/api/customer/getCartContent');
    commit('SET_CART', data);
  },
  async addToCart({dispatch,commit}, data) {
   const res = await this.$axios.$post('/api/customer/addToCart', data);
   dispatch('getCartContent')
 },

 async checkout({dispatch,commit}, data) {
  const res = await this.$axios.$post('/api/customer/testing', data);
  // dispatch('getCartContent')
},

};

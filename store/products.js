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
  retrieveProducts({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios.get('/api/store/products')
        .then(res => {
          let products = res.data.data;
          commit('SET_PRODUCTS', products);
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
};

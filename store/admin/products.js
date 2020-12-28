// http://52.74.70.6:88/api/store/products

export const state = () => ({
  products: [],
  selected_product: {},
  form: {},
  preview: ""
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
  SET_PREVIEW(state, data) {
    state.preview = data;
  },
  SET_SELECTED_PRODUCT(state, data) {
    state.selected_product = data;
    state.preview = data.image_link;
    state.form = {
      name : data.product_name,
      category_id : data.category_id,
      description : data.description,
      image : data.image,
      price : data.price,
      product_status : data.product_status,
      unit : data.unit,
    };
  },
};

export const actions = {
  async addProduct({dispatch,commit}, data) {
   const res = await this.$axios.$post('/api/admin/addProduct', data);
   dispatch('retrieveProducts')
 },
 async getSelectedProduct({commit}, id) {
  const data = await this.$axios.$get('/api/admin/getProductDetails/'+id);
  commit('SET_SELECTED_PRODUCT', data);
},
  async retrieveProducts({ commit }) {
    const data = await this.$axios.$get('/api/admin/products');
    commit('SET_PRODUCTS', data);
  },
};

// http://52.74.70.6:88/api/store/products

export const state = () => ({
  categories: []
});

export const getters = {
  getCategories(state) {
    return state.categories;
  },
};

export const mutations = {
  SET_CATEGORIES(state, data) {
    state.categories = data;
  },
};

export const actions = {
   async addCategory({dispatch,commit}, data) {
    const res = await this.$axios.$post('/api/admin/addCategory', data);
    dispatch('retrieveCategories')
  },
  async retrieveCategories({dispatch,commit}) {
    const data = await this.$axios.$get('/api/admin/getCategories');
    commit('SET_CATEGORIES', data)
  },
};

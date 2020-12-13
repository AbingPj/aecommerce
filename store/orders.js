// http://52.74.70.6:88/api/store/products

export const state = () => ({
  orders: [],
  selectedOrder:{
    order_details:[],
    user:{}
  },
  order_details:[]
});

export const mutations = {
  SET_ORDERS(state, data) {
    state.orders = data;
  },
  SET_SELECTED_ORDER(state, data) {
    state.selectedOrder = data;
    state.order_details = data.order_details;
  },
};

export const actions = {
  async getOrders({ commit }) {
    const data = await this.$axios.$get('api/customer/getOrderListCustomer');
    commit('SET_ORDERS', data);
  },
  async getOrderDetails({ commit },id) {
    const data = await this.$axios.$get('api/customer/getOrderListDetailsCustomer?order_id='+id);
    commit('SET_SELECTED_ORDER', data);
  },
};

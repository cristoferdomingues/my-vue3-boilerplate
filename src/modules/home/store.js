export const HomeStore = {
  namespaced: true,
  state: {
    title: 'Home',
  },
  getters: {
    title(state) {
      return state.title;
    },
  },
  mutations: {
    setTitle(state, payload) {
      state.title = payload;
    },
  },
  actions: {
    setTitle(context, payload) {
      context.commit('setTitle', payload);
    },
  },
};

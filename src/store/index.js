import 'es6-promise/auto';
import { createStore } from 'vuex';
import { HomeStore } from '../modules';

const store = createStore({
  modules: {
    home: HomeStore,
  },
});

export default store;

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    jokes: [],
  },
  mutations: {
    increment() {
      this.state.count += 1;
    },
    API_DATA_SUCCESS(state, jokes) {
      state.jokes = jokes;
    },
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    },
    getJokes() {
      return axios.get('http://api.icndb.com/jokes/random/10')
        .then((response) => {
          store.commit('API_DATA_SUCCESS', response.data.value);
        });
    },
  },
});

export default store;

import { createStore, createLogger } from 'vuex';

export interface State {
  name: string;
}

export default createStore({
  plugins: [createLogger()],
  state: {
    name: 'roy'
  } as State,
  mutations: {
    UPDATE_NAME(state, payload) {
      state.name = payload.name;
    }
  },
  actions: {
    changeName({ commit }, payload) {
      commit('UPDATE_NAME', payload);
    }
  },
  modules: {}
});

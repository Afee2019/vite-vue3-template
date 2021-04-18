import { createStore } from 'vuex'

const defaultState = {
  count: 0
}

export default createStore({
  state() {
    return defaultState
  },

  mutations: {
    increament(state: typeof defaultState) {
      state.count++
    }
  },

  actions: {
    increament(context) {
      context.commit('increament')
    }
  },

  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})

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
      const s = state
      s.count += 1
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

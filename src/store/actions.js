export default {
  setAnswer ({ commit }, payload) {
    commit('setAnswer', payload)
  },

  setCurrent ({ commit }, payload) {
    commit('setCurrent', payload)
  },

  setHistory ({ commit }, payload) {
    commit('setHistory', payload)
  },

  setIsMobile ({ commit }, payload) {
    commit('setIsMobile', payload)
  }
}
export default {
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
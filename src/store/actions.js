export default {
  setCurrent ({ commit }, payload) {
    commit('setCurrent', payload)
  },

  setHistory ({ commit }, payload) {
    commit('setHistory', payload)
  }
}
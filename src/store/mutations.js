export default {
  setCurrent (state, payload) {
    state.current = payload
  },

  setHistory (state, payload) {
    state.history = payload
  },

  setIsMobile (state, payload) {
    state.isMobile = payload
  }
}
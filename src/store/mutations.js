export default {
  setAnswer (state, payload) {
    state.answer = payload
  },

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
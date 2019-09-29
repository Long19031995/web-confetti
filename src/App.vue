<template>
  <div class="web-confetti">
    <list-history></list-history>
    <current></current>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ListHistory from './components/ListHistory/Index.vue'
import Current from './components/Current/Index.vue'
import io from 'socket.io-client'
import history from './history'
import axios from 'axios'

export default {
  name: 'WebConfetti',

  components: { ListHistory, Current },

  data () {
    return {
      socket: io('https://socket.pikalongstudio.com/')
    }
  },

  mounted () {
    this.listenSocket()
    this.checkMobile()
    window.addEventListener('resize', () => this.checkMobile())
  },

  methods: {
    ...mapActions({
      setAnswer: 'setAnswer',
      setCurrent: 'setCurrent',
      setHistory: 'setHistory',
      setIsMobile: 'setIsMobile'
    }),

    async listenSocket () {
      this.socket.on('answer', (data) => {
        this.setAnswer(data)
      })

      this.socket.on('question', (data) => {
        this.setCurrent(data)
      })

      this.setHistory(history)

      const response = await axios.get('https://api.pikalongstudio.com/')
      const output = response.data.output[0]
      this.setAnswer(output.answer)
      this.setCurrent(output.current)
    },

    checkMobile () {
      if (window.innerWidth < 768) {
        this.setIsMobile(true)
      } else {
        this.setIsMobile(false)
      }
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Archivo', sans-serif;
  color: #6E7A81;
  font-size: 14px;
}
body {
  overflow: hidden;
}
.web-confetti {
  width: 100%;
  float: left;
  overflow-x: hidden;
  @media (min-width: 1024px) {
    width: 960px;
  }
  @media (min-width: 1366px) {
    width: 1024px;
  }
  @media (min-width: 1440px) {
    width: 1366px;
  }
  @media (min-width: 1920px) {
    width: 1440px;
  }
}
</style>
<template>
  <div class="web-confetti">
    <list-history></list-history>
    <current></current>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import { mapActions } from 'vuex'
import ListHistory from './components/ListHistory/Index.vue'
import Current from './components/Current/Index.vue'

export default {
  name: 'WebConfetti',

  components: { ListHistory, Current },

  data () {
    return {
      db: firebase.database()
    }
  },

  mounted () {
    this.listenFirebase()
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

    listenFirebase () {
      this.db.ref('/data/answer').on('value', (res) => {
        this.setAnswer(res.val())
      })

      this.db.ref('/data/current').on('value', (res) => {
        this.setCurrent(res.val())
      })

      this.db.ref('/data/history').once('value', (res) => {
        this.setHistory(res.val())
      })
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
.web-confetti {
  width: 100%;
  margin: auto;
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
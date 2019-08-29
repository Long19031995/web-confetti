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
  },

  methods: {
    ...mapActions({
      setCurrent: 'setCurrent',
      setHistory: 'setHistory'
    }),

    listenFirebase () {
      this.db.ref('/data/current').on('value', (res) => {
        this.setCurrent(res.val())
      })

      this.db.ref('/data/history').on('value', (res) => {
        this.setHistory(res.val())
      })
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
  @media (min-width: 1024px) {
    width: 1024px;
  }
  @media (min-width: 1366px) {
    width: 1366px;
  }
}
</style>
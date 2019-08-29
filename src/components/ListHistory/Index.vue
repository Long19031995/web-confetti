<template>
  <div class="web-confetti__list-history">
    <div class="web-confetti__list-history__title">
      <div></div>
      Confetti
    </div>

    <div class="web-confetti__list-history__welcome">
      <p>Good Afternoon!</p>
      <p>Welcome back to Confetti, we missed you!</p>
    </div>

    <vue-custom-scrollbar class="web-confetti__list-history__wrapper">
      <history v-for="history in listHistory" :history="history"></history>
    </vue-custom-scrollbar>
  </div>
</template>

<script>
import VueCustomScrollbar from 'vue-custom-scrollbar'
import { mapGetters } from 'vuex'
import History from './History.vue'

export default {
  name: 'ListHistory',

  components: { History, VueCustomScrollbar },

  computed: {
    ...mapGetters({
      listHistory: 'getListHistory'
    })
  }
}
</script>

<style lang="scss">
.web-confetti__list-history {
  float: left;
  width: 380px;
  height: 100vh;
  padding: 8px;
  padding-top: 80px;
  &__title {
    display: flex;
    align-items: center;
    margin-bottom: 80px;
    color: #1a1f23;
    font-size: 24px;
    font-weight: 600;
    &> div {
      height: 16px;
      width: 48px;
      border-radius: 8px;
      background: linear-gradient(90deg, rgba(0,147,237,0) 0%, #0093ED 100%);
      margin-right: 16px;
    }
  }
  &__welcome {
    margin-bottom: 80px;
    &> p:nth-child(1) {
      font-size: 36px;
      color: #1a1f23;
      font-weight: 600;
      margin-bottom: 8px;
    }
  }
  &__wrapper {
    height: calc(100% - 250px);
  }
}
</style>
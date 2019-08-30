<template>
  <div class="web-confetti__list-history">
    <div v-show="isMobile" @click="showHistory()" class="web-confetti__list-history__bars">
      <img src="@/assets/bars.svg" alt="bars">
    </div>
    <div class="web-confetti__list-history__title">
      <div></div>
      Confetti
    </div>

    <div class="web-confetti__list-history__welcome">
      <p>{{ textHello }}</p>
      <p>Welcome back to Confetti, we missed you!</p>
    </div>

    <vue-custom-scrollbar v-show="isShowHistory && isMobile" class="web-confetti__list-history__wrapper">
      <div class="web-confetti__list-history__wrapper__title">
        Question
        <div @click="hideHistory()" class="web-confetti__list-history__wrapper__title__icon-close">
          <img src="@/assets/close.svg" alt="close">
        </div>
      </div>
      <history v-for="history in listHistory" :history="history"></history>
    </vue-custom-scrollbar>
  </div>
</template>

<script>
import VueCustomScrollbar from 'vue-custom-scrollbar'
import { mapGetters, mapState } from 'vuex'
import History from './History.vue'

export default {
  name: 'ListHistory',

  components: { History, VueCustomScrollbar },

  computed: {
    ...mapGetters({
      listHistory: 'getListHistory'
    }),

    ...mapState({
      isMobile: 'isMobile'
    }),

    textHello () {
      const hours = new Date().getHours()

      if (hours < 8) {
        return 'Good Morning!'
      } else if (hours < 16) {
        return 'Good Afternoon!'
      } else {
        return 'Good Evening!'
      }
    }
  },

  data () {
    return {
      isShowHistory: false
    }
  },

  methods: {
    toggleHistory () {
      this.isShowHistory = !this.isShowHistory
    },

    showHistory () {
      this.isShowHistory = true
    },

    hideHistory () {
      this.isShowHistory = false
    }
  }
}
</script>

<style lang="scss">
.web-confetti__list-history {
  width: 100%;
  height: auto;
  padding: 32px 8px 8px 8px;
  float: left;
  position: relative;
  @media (min-width: 768px) {
    width: 380px;
    height: 100vh;
    padding: 16px 8px 8px 8px;
  }
  &__bars {
    position: absolute;
    top: 20px;
    padding: 16px;
  }
  &__title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
    font-size: 18px;
    @media (min-width: 768px) {
      justify-content: flex-start;
      font-size: 24px;
    }
    color: #1a1f23;
    font-weight: 600;
    &> div {
      height: 10px;
      width: 32px;
      margin-right: 12px;
      @media (min-width: 768px) {
        height: 16px;
        width: 48px;
        margin-right: 16px;
      }
      border-radius: 8px;
      background: linear-gradient(90deg, rgba(0,147,237,0) 0%, #0093ED 100%);
    }
  }
  &__welcome {
    display: none;
    @media (min-width: 768px) {
      display: block !important;
    }
    margin-bottom: 32px;
    &> p:nth-child(1) {
      font-size: 36px;
      color: #1a1f23;
      font-weight: 600;
      margin-bottom: 8px;
    }
  }
  &__wrapper {
    background-color: #C2E6FA;
    margin-left: -8px;
    margin-right: -8px;
    margin-top: -84px;
    padding: 96px 16px;
    height: calc(100% - 160px);
    @media (min-width: 768px) {
      display: block !important;
      background-color: transparent;
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding: 0;
    }
    &__title {
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      padding: 30px 0 46px;
      color: white;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #C2E6FA;
      &__icon-close {
        position: absolute;
        top: 10px;
        right: -8px;
        padding: 24px;
      }
      @media (min-width: 768px) {
        display: none;
      }
    }
  }
}
</style>
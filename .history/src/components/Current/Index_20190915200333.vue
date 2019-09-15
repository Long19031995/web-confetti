<template>
  <div class="web-confetti__current" :class="{ 'background-red': isShowWaiting }">
    <waiting v-if="isShowWaiting" :count="count"></waiting>
    <start v-else></start>
  </div>
</template>

<script>
import Start from './Start/Index.vue'
import Waiting from './Waiting/Index.vue'

export default {
  name: 'Current',

  components: { Waiting, Start },

  data () {
    return {
      count: {},
      isShowWaiting: true
    }
  },

  mounted () {
    this.count = this.getCount()

    if (this.count.hours >= 0) {
      this.countDown()
    } else {
      this.isShowWaiting = false
    }
  },

  methods: {
    getCount () {
      const date = new Date()

      const hours = date.getHours()
      const minutes = date.getMinutes()
      const seconds = date.getSeconds()

      const count = {
        hours: 20 - hours,
        minutes: 59 - minutes,
        seconds: 59 - seconds
      }

      return count
    },

    countDown () {
      const interval = setInterval(() => {
        if (this.count.seconds > 0) {
          this.count.seconds--
        } else if (this.count.minutes > 0 || this.count.hours > 0) {
          this.count.seconds = 59
          if (this.count.minutes > 0) {
            this.count.minutes--
          } else if (this.count.hours > 0) {
            this.count.minutes = 59
            if (this.count.hours > 0) {
              this.count.hours--
            }
          }
        }

        if (this.count.hours <= 0 && this.count.minutes <= 0 && this.count.seconds <= 0) {
          this.isShowWaiting = false
          clearInterval(interval)
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
.web-confetti__current {
  float: left;
  width: 100%;
  height: calc(100vh - 40px);
  padding: 0 16px;
  @media (min-width: 768px) {
    width: calc(100% - 380px);
    height: calc(100vh - 32px);
    background-color: #C2E6FA;
    padding: 24px;
    margin-top: 16px;
  }
  border-radius: 24px;
  position: relative;
  @media (min-width: 1366px) {
    width: calc(100% - 392px);
    margin-left: 12px;
  }
  @media (min-width: 1440px) {
    width: calc(100% - 520px);
    margin-left: 140px;
  }
  .background-red {
    background-color: #FF4500;
  }
}
</style>
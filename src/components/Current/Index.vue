<template>
  <div class="web-confetti__current">
    <waiting v-if="count" :count="count"></waiting>
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
      count: 5
    }
  },

  mounted () {
    const interval = setInterval(() => {
      this.count--

      if (this.count === 0) {
        clearInterval(interval)
      }
    }, 1000)
  }
}
</script>

<style lang="scss">
.web-confetti__current {
  float: left;
  width: 100%;
  height: calc(100vh - 108px);
  padding: 0 16px;
  @media (min-width: 768px) {
    width: calc(100% - 380px);
    height: calc(100vh - 32px);
    background-color: #C2E6FA;
    padding: 40px;
  }
  border-radius: 24px;
  margin-top: 16px;
  position: relative;
  @media (min-width: 1366px) {
    width: calc(100% - 392px);
    margin-left: 12px;
  }
  @media (min-width: 1440px) {
    width: calc(100% - 520px);
    margin-left: 140px;
  }
}
</style>
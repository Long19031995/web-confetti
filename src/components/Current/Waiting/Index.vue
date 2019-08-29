<template>
  <div class="waiting">
    <countdown :count="count"></countdown>
    <confetti-fb></confetti-fb>
    <img src="@/assets/background.svg" alt="background">
  </div>
</template>

<script>
import ConfettiFb from './ConfettiFb'
import Countdown from './Countdown'

export default {
  name: 'Waiting',

  components: { Countdown, ConfettiFb },

  props: ['count']
}
</script>

<style lang="scss">
.waiting {
  width: 100%;
  height: 100%;
  img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
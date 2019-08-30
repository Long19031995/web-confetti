<template>
  <div class="countdown">
    <div class="countdown-count">
      <p>Our time</p>
      <div class="countdown-count__number" :class="enlarge">
        {{ countDown }}
      </div>
      <div class="countdown-count__second-number" :class="enlarge">
        {{ countDown }}
      </div>
    </div>
    <countdown-animation></countdown-animation>
  </div>
</template>

<script>
import CountdownAnimation from './CountdownAnimation'

export default {
  name: 'Countdown',

  props: ['count'],

  components: { CountdownAnimation },

  computed: {
    hours () {
      const hours = this.count.hours

      return hours > 0 ? `${hours}:` : ''
    },

    minutes () {
      const minutes = this.count.minutes

      return minutes > 0 ? `${minutes}:` : ''
    },

    seconds () {
      const seconds = this.count.seconds

      return seconds
    },

    countDown () {
      return this.hours + this.minutes + this.seconds
    },

    enlarge () {
      return this.hours <= 0 && this.minutes <= 0 && this.seconds <= 10
    }
  }
}
</script>

<style lang="scss">
.countdown {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background-color: white;
  height: 286px;
  margin: auto;
  padding: 40px 16px 16px;
  margin-bottom: 32px;
  position: relative;
  z-index: 1;
  width: 100%;
  border: 1px solid #DBDFE1;
  @media (min-width: 768px) {
    max-width: 510px;
    border: none;
    padding: 16px;
  }
  .countdown-count {
    height: 162px;
    width: 100%;
    position: absolute;
    top: 16px;
    text-align: center;
    &__number,
    &__second-number {
      font-family: 'Press Start 2P', cursive;
      position: absolute;
      font-size: 60px;
      font-weight: bold;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: #1A1F23;
    }
    &__number {
      &.enlarge {
        animation: enlarge;
        animation-duration: 1s;
        animation-iteration-count: infinite;
      }
    }
    &__second-number {
      &.enlarge {
        animation: second-enlarge;
        animation-duration: 1s;
        animation-iteration-count: infinite;
      }
    }
  }

  @keyframes enlarge {
    0%   { font-size: 60px; opacity:1; }
      100% { font-size: 120px; opacity:0; }
  }

  @keyframes second-enlarge {
    0%   { font-size: 60px; opacity:1; }
      100% { font-size: 240px; opacity:0; }
  }
}
</style>
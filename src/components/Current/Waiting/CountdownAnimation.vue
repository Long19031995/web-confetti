<template>
  <div class="countdown-animation">
    <div v-for="(question, index) in listQuestion" v-show="index === indexActive" class="countdown-animation__item">
      <p>Question</p>
      <p class="fade-in-up">{{ question }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CountdownAnimation',

  data () {
    return {
      indexActive: 0
    }
  },

  computed: {
    ...mapGetters({
      listQuestion: 'getListQuestion'
    })
  },

  mounted () {
    setInterval(() => {
      this.indexActive++

      if (this.indexActive > this.listQuestion.length - 1) {
        this.indexActive = 0
      }
    }, 2000)
  }
}
</script>

<style lang="scss">
.countdown-animation {
  border: 1px solid #DBDFE1;
  border-radius: 16px;
  padding: 16px;
  width: calc(100% - 32px);
  position: absolute;
  left: 16px;
  bottom: 16px;
  &__item {
    &> p:nth-child(1) {
      margin-bottom: 4px;
    }
    &> p:nth-child(2) {
      color: #1A1F23;
      font-size: 18px;
      font-weight: 600;
    }
  }
  .fade-in-up {
    animation-name: fadeInUp;
    animation-duration: .5s;
    animation-timing-function: ease-in;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
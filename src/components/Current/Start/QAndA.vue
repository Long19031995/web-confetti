<template>
  <div class="q-and-a">
    <div class="question">
      <p>Question</p>
      <p>{{ question }}</p>
    </div>
    <div class="list-answer">
      <div v-for="(answer, index) in listAnswer" class="answer" :class="{ 'active': correctAnswer.toLowerCase().includes(answer.toLowerCase()) }">
        <div class="answer__text">{{ answer }}</div>
        <div v-show="!correctAnswer">{{ listAnswerQuantity[index] }} kết quả</div>
        <div v-show="!correctAnswer" class="answer__progress" :style="{ 'width': `${listAnswerPercent[index]}%` }"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'QAndA',

  computed: {
    ...mapGetters({
      qAndA: 'getQAndA',
      listSearchResult: 'getListSearchResult',
      correctAnswer: 'getCorrectAnswer'
    }),

    question () {
      return this.qAndA.question || ''
    },

    listAnswer () {
      const listAnswer = this.qAndA.listAnswer || []

      return listAnswer.map((answer) => answer.split('|')[0].trim())
    },

    listAnswerQuantity () {
      const listAnswer = this.qAndA.listAnswer || []

      return listAnswer.map((answer) => Number(answer.split('|')[1].trim()))
    },

    listAnswerPercent () {
      let total = 0
      this.listAnswerQuantity.forEach((quantity) => total += quantity)

      let listAnswerPercent = []

      listAnswerPercent = this.listAnswerQuantity.map((quantity) => {
        const percent = quantity / total * 100

        return percent
      })

      return listAnswerPercent
    }
  }
}
</script>

<style lang="scss">
  .q-and-a {
    width: 100%;
    border-radius: 16px;
    background-color: white;
    margin-bottom: 24px;
    border: 1px solid #DBDFE1;
    padding: 16px;
    @media (min-width: 768px) {
      border: none;
      padding: 32px;
    }
    .question {
      margin-bottom: 16px;
      &> p:nth-child(1) {
        margin-bottom: 4px;
      }
      &> p:nth-child(2) {
        color: #1A1F23;
        font-size: 18px;
        font-weight: 600;
      }
    }
    .list-answer {
      .answer {
        border-radius: 16px;
        background-color: #F5F6F7;
        margin-bottom: 4px;
        padding: 16px;
        font-weight: 600;
        color: #6E7A81;
        position: relative;
        overflow: hidden;
        transition: .3s ease-out;
        display: flex;
        justify-content: space-between;
        &.active {
          background-color: #e85244;
          .answer__text {
            color: white;
          }
        }
        &__progress {
          position: absolute;
          left: 0;
          bottom: 0;
          height: 4px;
          background-color: #e85244;
          border-radius: 16px;
        }
      }
    }
  }
</style>
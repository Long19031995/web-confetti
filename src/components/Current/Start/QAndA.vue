<template>
  <div class="q-and-a">
    <div class="question">
      <p>Question</p>
      <p>{{ question }}</p>
    </div>
    <div class="list-answer">
      <div v-for="(answer, index) in listAnswer" class="answer">
        <div>{{ answer }}</div>
        <div>{{ listAnswerQuantity[index] }} kết quả</div>
        <div class="answer__progress" :style="{ 'width': `${listAnswerPercent[index]}%` }"></div>
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
      listSearchResult: 'getListSearchResult'
    }),

    question () {
      return this.qAndA.question || ''
    },

    listAnswer () {
      return this.qAndA.listAnswer || []
    },

    listAnswerQuantity () {
      let listAnswerQuantity = []

      listAnswerQuantity = this.listAnswer.map((answer) => {
        let count = 0

        this.listSearchResult.forEach((searchResult) => {
          const link = searchResult.link || ''
          const snippet = searchResult.snippet || ''
          const title = searchResult.title || ''

          const searchCombine = link + snippet + title

          const match = searchCombine.match(new RegExp(answer, 'g')) || []

          count += match.length
        })

        return count
      })

      return listAnswerQuantity
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
    margin-bottom: 32px;
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
        &__progress {
          position: absolute;
          left: 0;
          bottom: 0;
          height: 4px;
          background-color: #0093ED;
          border-radius: 16px;
        }
      }
    }
  }
</style>
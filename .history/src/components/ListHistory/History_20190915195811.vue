<template>
  <div class="history">
    <p class="history__title">Question</p>
    <p class="history__question">{{ history.question }}</p>
    <p v-for="answer in history.listAnswer" class="history__answer" :class="{ 'active': answer.correct }">
      {{ answer.answer }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'History',

  props: ['history']
}
</script>

<style lang="scss">
.history {
  @media (min-width: 768px) {
    border: 1px solid #DBDFE1;
  }
	border-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;
  background-color: white;
  &__title {
    margin-bottom: 4px;
  }
  &__question {
    font-size: 18px;
    color: #1A1F23;
    margin-bottom: 16px;
    font-weight: 600;
  }
  &__answer {
    border-radius: 16px;
    padding: 16px;
    margin-bottom: 4px;
    background-color: #F5F6F7;
    color: #6E7A81;
    font-weight: 600;
    &.active {
      color: white;
      background-color: #faa691;
    }
  }
}
</style>
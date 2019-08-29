<template>
  <div class="start">
    <q-and-a></q-and-a>
    <search-result></search-result>
  </div>
</template>

<script>
import QAndA from './QAndA.vue'
import SearchResult from './SearchResult.vue'

export default {
  name: 'Start',

  components: { QAndA, SearchResult }
}
</script>

<style lang="scss">
.start {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
<template>
  <vue-custom-scrollbar :settings="{ suppressScrollX: true }" class="search-result">
    <p class="quantity">Khoảng 969.000 kết quả (0,55 giây)</p>
    <div v-for="result in listSearchResult" class="result">
      <div class="title">
        {{ result.title }}
      </div>
      <div class="link">
        <a :href="result.link" target="_blank">
          {{ result.link }}
        </a>
      </div>
      <div class="content">
        {{ result.snippet }}
      </div>
    </div>
  </vue-custom-scrollbar>
</template>

<script>
import VueCustomScrollbar from 'vue-custom-scrollbar'
import { mapGetters } from 'vuex'

export default {
  name: 'SearchResult',

  components: { VueCustomScrollbar },

  computed: {
    ...mapGetters({
      listSearchResult: 'getListSearchResult'
    })
  }
}
</script>

<style lang="scss">
.search-result {
  width: 100%;
  height: calc(100% - 306px);
  border-radius: 16px;
  padding: 32px;
  background-color: white;
  position: relative;
  .quantity {
    margin-bottom: 16px;
  }
  .result {
    border: 1px solid #DBDFE1;
    border-radius: 16px;
    padding: 16px;
    margin-bottom: 8px;
    .title {
      font-size: 18px;
      font-weight: 600;
      color: #1A1F23;
      margin-bottom: 8px;
    }
    .link {
      a {
        color: #0093ED;
      }
      margin-bottom: 8px;
    }
  }
}
</style>
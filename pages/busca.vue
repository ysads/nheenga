<template>
  <main>
    <h1>Tupi -> Português</h1>
    <input v-model="query" type="search" @input="$fetch">
    <pre>{{ words }}</pre>
  </main>
</template>

<script>
export default {
  async fetch () {
    this.words = await this.$content('tupi')
      .search(this.query)
      .fetch()
  },

  data () {
    return {
      words: [],
      query: ''
    }
  }
}
</script>

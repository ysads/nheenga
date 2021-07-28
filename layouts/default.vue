<template>
  <div class="page">
    <sidebar class="navbar" :documents="documents" />
    <nuxt class="route" />
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar'

export default {
  components: {
    Sidebar
  },

  async fetch () {
    const documents = await this.$content('licoes').sortBy('order').fetch()

    this.documents = documents
  },

  data () {
    return {
      documents: []
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/reset";

// .page {
//   margin: 0 auto;
//   max-width: $max-width;

.page {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto;

  @include breakpoint(md) {
    grid-template-columns: 200px minmax(0, 3fr);
    grid-template-rows: auto;
    height: 100vh
  }
}

.navbar {
  @include breakpoint(md) {
    border-right: 1px solid #000;
  }
}

.route {
  padding: 40px 40px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>

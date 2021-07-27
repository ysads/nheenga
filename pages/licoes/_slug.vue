<template>
  <div class="page">
    <sidebar class="sidebar" :documents="documents" />
    <markdown-content class="content" :document="doc" />
  </div>
</template>

<script>
import Sidebar from '~/components/sidebar'
import MarkdownContent from '~/components/markdown-content'

export default {
  components: {
    Sidebar,
    MarkdownContent
  },

  async asyncData ({ $content, params }) {
    const documents = await $content('licoes').sortBy('order').fetch()
    const doc = documents.find(c => c.slug === params.slug)

    return { documents, doc }
  }
}
</script>

<style lang="scss" scoped>
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

.content {
  padding: 40px 40px;
  overflow-x: hidden;
  overflow-y: auto;
}

.sidebar {
  border-right: 1px solid #000;
}
</style>

<template>
  <markdown-content class="content" :document="doc" />
</template>

<script>
import MarkdownContent from '~/components/markdown-content'

export default {
  components: {
    MarkdownContent
  },

  async asyncData ({ $content, params }) {
    const doc = await $content(`licoes/${params.slug}` || 'index').fetch()

    return { doc }
  }
}
</script>

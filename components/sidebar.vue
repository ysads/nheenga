<template>
  <aside class="menu">
    <nuxt-link
      v-for="doc in documents"
      :key="doc.path"
      :to="doc.path"
      class="link"
    >
      {{ doc.title }}
    </nuxt-link>

    <nuxt-link to="/traduzir/tupi/" class="link">
      Dicionário
    </nuxt-link>
  </aside>
</template>

<script>
export default {
  props: {
    documents: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-flow: column;
  padding: 48px 20px;
}

.link {
  padding: 12px 24px;
  border-radius: 24px;
  transition: all 0.1s ease;
  font-weight: 600;

  &:hover {
    background: #ffefe7;
    color: #f15518;
  }
}

.nuxt-link-active {
  background: #ffefe7;
  color: #f15518;
}

.link + .link {
  margin-top: 4px;
}
</style>

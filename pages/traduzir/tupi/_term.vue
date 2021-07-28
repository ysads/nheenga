<template>
  <main class="search">
    <h1 class="search__title">
      Dicionário de Tupi
    </h1>

    <input
      v-model="query"
      class="search__input"
      type="search"
      placeholder="Buscar por..."
      @input="$fetch"
    >

    <p class="search__results-count">
      {{ entries.length }} resultados
    </p>

    <section class="search__results-box">
      <translate-card
        v-for="entry in entries"
        :key="entry.word"
        class="search__result"
        :entry="entry"
      />
    </section>
  </main>
</template>

<script>
import TranslateCard from '@/components/translate-card'

export default {
  components: {
    TranslateCard
  },

  async fetch () {
    this.entries = await this.$content('tupi')
      .search(this.query)
      .fetch()
  },

  data () {
    return {
      entries: [],
      query: this.$route.params.term || ''
    }
  },

  head () {
    return {
      title: `Nheenga | ${this.query}`
    }
  }
}
</script>

<style lang="scss">
.search {
  padding: $base * 10;

  &__title {
    @extend %h1;
  }

  &__input {
    @extend %h3;

    border-radius: 8px;
    border: 1px solid #000;
    transition: all 0.3s ease;

    background: white;
    color: $dark-gray;
    margin-top: $base * 4;
    padding: $base * 4;
    width: 100%;

    &:focus {
      box-shadow: 0 0 0 4px #faa6888a;
      border: 1px solid #f25619;
    }

    &::placeholder {
      color: rgba($dark-gray, 0.5);
    }
  }

  &__results-count {
    @include margin(top, 8);
  }

  &__results-box {
    @include margin(top, 4);

    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-gap: $base * 4;

    @include breakpoint(md) {
      grid-template-columns: 50% 50%;
    }
  }
}
</style>

<template>
  <article class="translate-card">
    <h3 class="translate-card__title">
      {{ entry.word }}
    </h3>

    <p
      v-if="entry.alternatives"
      class="translate-card__alt-list"
    >
      Outras formas: {{ alternativesText }}
    </p>

    <ol class="translate-card__def-list">
      <li
        v-for="definition in entry.definitions"
        :key="definition.text"
        class="translate-card__def"
      >
        <span class="translate-card__def-class">
          {{ definition.class }}
        </span>
        <span class="translate-card__def-text">
          {{ definition.text }}
        </span>
      </li>
    </ol>
  </article>
</template>

<script>
export default {
  name: 'TranslateCard',

  props: {
    entry: {
      type: Object,
      required: true
    }
  },

  computed: {
    alternativesText () {
      return this.entry.alternatives.join(', ')
    }
  }
}
</script>

<style lang="scss">
.translate-card {
  border-radius: $radius-8;
  padding: $base * 4;
  background: $gray;

  &__title {
    @extend %h3;
  }

  &_alternatives {
    display: inline-block;
    color: $gray;
  }

  &__def-list {
    @include margin(top, 2);

    list-style: none;
    counter-reset: def-list-counter;
  }

  &__def {
    counter-increment: def-list-counter;

    &::before {
      @include margin(right, 4);

      width: 10px;
      display: inline-block;

      content: counter(def-list-counter) ".";
    }

    &-class {
      @include margin(right, 2);

      font-family: 'IBM Plex Mono';
      font-style: italic;
      display: inline-block;
    }
  }
}
</style>

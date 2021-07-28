<template>
  <nuxt-content class="content" :document="document" />
</template>

<script>
export default {
  props: {
    document: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
/* Hidden element that appears when live-editing the content of a markdown */
.nuxt-content-editor {
  font-family: 'IBM Plex Mono';
  padding: 20px;
  font-size: 14px;
  line-height: 1.5;
  outline: none;
  border-radius: 8px;
  box-shadow: 0 0 0 4px #faa6888a;
  border: 1px solid #f25619;
}

h1 {
  @extend %h1;

  @include margin(bottom, 4);
}

h2 {
  @extend %h2;

  @include margin(bottom, 4);
  @include margin(top, 4);
}

h3 {
  @extend %h3;

  @include margin(bottom, 4);
  @include margin(top, 4);
}

p {
  @include margin(bottom, 2);

  code {
    color: #f25619;
  }
}

ul {
  @include margin(bottom, 6);

  list-style: none;

  li {
    @include margin(bottom, 2);

    &::before {
      @include margin(right, 2);

      color: $black;
      content: "■ ";
      font-size: 10px;
    }
  }
}

blockquote {
  @include margin(bottom, 4);
  @include margin(left, 8);
  @include margin(top, 4);

  background: #ffefe7;
  color: #f25619;
  border-radius: 2 * $base;
  max-width: 700px;
  padding: $base * 4;

  code {
    color: #a73e09;
  }
  p {
    margin: 0;
  }
}

code {
  display: inline-block;
  border-radius: $base;
  padding: 0 $base;
  font-family: 'IBM Plex Mono';
  text-shadow: none;
  font-weight: 400;
  font-style: italic;
}
</style>

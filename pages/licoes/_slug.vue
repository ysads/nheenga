<template>
  <nuxt-content class="wrapper" :document="doc" />
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const doc = await $content(`licoes/${params.slug}` || 'index').fetch()

    return { doc }
  }
}
</script>

<style lang="scss">
.wrapper {
  @include margin(left, 10);
  @include margin(right, 10);
  @include margin(top, 10);
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
    }
  }
}

blockquote {
  @include margin(bottom, 4);
  @include margin(left, 8);
  @include margin(top, 4);

  background: $mid-gray;
  border-radius: 2 * $base;
  max-width: 700px;
  padding: $base * 4;

  p { margin: 0; }
}

code {
  display: inline-block;
  background: $dark-gray;
  border-radius: $base;
  padding: 0 $base;
  color: $gray;
}
</style>

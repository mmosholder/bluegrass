<template>
  <section>
    <div class="container">
      <div class="-row -rich-text">
        <div class="-text content" v-html="text">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import marked from 'marked';

export default {
  props: ['blok'],

  computed: {
    text() {
      return this.blok.content ? this.$storyapi.richTextResolver.render(this.blok.content) : ''
    }
  }
}
</script>

<template>
  <section>
    <div class="container">
      <div class="-row -rich-text" v-if="blok.title">
        <div class="content">
          <h2>{{ blok.title }}</h2>
        </div>
      </div>
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
      return this.blok.text ? this.$storyapi.richTextResolver.render(this.blok.text) : ''
    }
  }
}
</script>

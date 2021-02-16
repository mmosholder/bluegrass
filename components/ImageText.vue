<template>
  <section class="imageText">
    <div class="container">
      <div class="-row">
        <div class="imageText__image">
          <img :src="blok.image.filename" :alt="blok.image.filename">
        </div>
        <div class="imageText__content">
          <h2 class="imageText__content__title" v-if="blok.title">{{ blok.title }}</h2>
          <p class="imageText__content__text" v-if="blok.text">{{ blok.text }}</p>
          <p class="imageText__content__textSecondary" v-if="blok.secondary_text">{{ blok.secondary_text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import marked from 'marked';

export default {
  props: ['blok'],
}
</script>

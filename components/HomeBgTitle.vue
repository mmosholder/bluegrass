<template>
  <!-- <section class="home" :style="{backgroundImage: 'url(' + setImageUrl(blok.image.filename) + ')'}"> -->
  <section>
    <div class="container">
      <div class="-row">
        <h1>{{ blok.title }}</h1>
        <div class="-sub">
          <div v-if="blok.subtitle">{{ blok.subtitle }}</div>
          <div v-if="blok.second_subtitle">{{ blok.second_subtitle }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props: ['blok']
}
</script>

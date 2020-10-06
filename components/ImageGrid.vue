<template>
  <section class="container">
    <div class="row">
      <div class="content -flex">
        <div class='image-item' v-for="(image, i) in blok.images" :key="i"><div class='-image' :style="{backgroundImage: 'url(' + image.filename + ')'}"></div></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['blok']
}
</script>

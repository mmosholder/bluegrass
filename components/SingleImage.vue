<template>
  <section class="container">
    <div class="-row">
      <div class="-full-width-image">
        <img :src="blok.image.filename" :alt="blok.image.filename">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['blok']
}
</script>

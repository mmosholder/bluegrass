<template>
  <section class="container">
    <div class="-row">
      <a :href="blok.button_link.cached_url" class="button -hollow-home">{{ blok.button_text }}</a>
    </div>
  </section>
</template>

<script>

export default {
  props: ['blok']
}
</script>

<template>
  <div>
    <Nav />
    <main id="main" role="main">
      <nuxt/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Nav from '~/components/Navigation.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Nav,
    Footer
  }
}
</script>

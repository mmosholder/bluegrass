<template>
  <section>
    <div class="container">
      <div class="-row -awards">
        <div class="-award" v-for="(award, i) in blok.awards_items" :key="i">
          <div class="-title">{{ award.title }}</div>
          <div class="-name"> {{ award.secondary_title }}</div>
          <div class="-year">{{ award. year }}</div>
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

<template>
  <div class="event">
    <section class="container" v-if="blok.event_name">
      <div class="-row">
        <div id="content" class="content">
          <h1>{{ blok.event_name }}</h1>
        </div>
      </div>
    </section>
    <section class="container" v-if="blok.event_recurring_info">
      <div class="-row">
        <div class="content">
          <h2 class="event__recurring">{{ blok.event_recurring_info }}</h2>
          <div class="event__image" v-if="blok.event_image.filename">
            <img
              :src="blok.event_image.filename"
              :alt="blok.event_image.filename"
            />
          </div>
        </div>
      </div>
      <div class="-row -rich-text" v-if="blok.event_description">
        <div class="-text content" v-html="text"></div>
      </div>
    </section>
    <section class="container" v-if="blok.event_link">
      <div class="-row">
        <div class="content">
          <div class="event__button">
            <a :href="blok.event_link.cached_url" class="button -hollow"
              >More Information</a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["blok"],

  computed: {
    text() {
      return this.blok.event_description
        ? this.$storyapi.richTextResolver.render(this.blok.event_description)
        : "";
    },
  },
};
</script>

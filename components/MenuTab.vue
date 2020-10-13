<template>
  <section class="tabbed-content">
        <div class="tabbed-content-view" v-for="(tab, j) in tab.tab" :key="j">
          <h2>{{ tab.title }}</h2>
          <div class="tabbed-content-container">
            <div class="menu-item" v-for="(menuItem, k) in tab.menu_items" :key="k">
              <div class="menu-item-title" v-if="menuItem.name">{{ menuItem.name }}</div>
              <div class="menu-item-price" v-if="menuItem.price">{{ menuItem.price }}</div>
              <div class="menu-item-text menu-rich-text" v-if="menuItem.description" v-html="description(menuItem.description)"></div>
            </div>
          </div>
        </div>
    </section>
</template>

<script>
export default {
  props: ['tab'],

  methods: {
    description(text) {
      return this.$storyapi.richTextResolver.render(text);
    }
  }
}
</script>

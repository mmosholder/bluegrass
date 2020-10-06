<template>
  <section class="tabbed-content">
        <div class="tabbed-content-view" v-for="(tab, j) in tab.tab" :key="j">
          <h2>{{ tab.title }}</h2>
          <div class="tabbed-content-container" v-for="(menuItem, k) in tab.menu_items" :key="k">
            <div class="menu-item">
              <div class="menu-item-title" v-if="menuItem.name">{{ menuItem.name }}</div>
              <div class="menu-item-price" v-if="menuItem.price">{{ menuItem.price }}</div>
              <div class="menu-item-text" v-if="menuItem.description"><p>{{ menuItem.description }}</p></div>

              <!-- <div class="menu-item-text menu-rich-text"><p>{{ menuItem.menu_rich_text }}</p></div>                 -->
            </div>
          </div>
        </div>
    </section>
</template>

<script>
export default {
  props: ['tab']
}
</script>

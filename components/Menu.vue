<template>
  <section class="menus">
    <section class="container">
      <div class="-row">
        <div id='content' class="content">
          <h1>{{ blok.page_title }}</h1>
        </div>
      </div>
      <div class="container" v-if="$route.path !== '/candelas-menus'">
        <div class="-row">
          <div class="content">
            <div class="-text -center-align">
              <a href="https://www.doordash.com/business/421382/?utm_source=partner-link&utm_medium=website&utm_campaign=421382&utm_content=red-l" target="_blank" alt="Order Food Delivery with DoorDash" title="Order Food Delivery with DoorDash" style="text-decoration: none"><div style="position: relative; width:289px; height:59px; margin: 0px auto; background-image: url(https://cdn.doordash.com/media/button/button_red_l.svg); color:transparent">Order Food Delivery with DoorDash</div></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="-row">
        <div class="content tabbed">
          <ul class="tabbed-tabs">
            <li v-for="(tab, i) in blok.tabs" :key="i" :class="['menu-tab', activeTab._uid === tab._uid ? 'active' : '']" :id="`${i}tab`" @click="setActiveTab(tab._uid)">{{ tab.title }}</li>
          </ul>
          <div class="tabbed-content">
              <menu_tab :tab="activeTab"></menu_tab>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  props: ['blok'],

  data() {
    return {
      activeTab: null
    }
  },

  created() {
    this.activeTab = this.blok.tabs[0];
  },

  computed: {
    text() {
      return this.$storyapi.richTextResolver.render(this.blok.top_text);
    }
  },

  methods: {
    setActiveTab(uid) {
      let foundTab = this.blok.tabs.find(tab => {
        return tab._uid === uid;
      });

      this.activeTab = foundTab;
    }
  }
}
</script>

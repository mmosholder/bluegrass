<template>
  <section class="content-page menus">
    <section class="container">
      <div class="-row">
        <div id='content' class="content">
          <h1>{{ blok.page_title }}</h1>
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

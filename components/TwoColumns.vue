<template>
  <section class="container">
      <div class="row">
        <div class="content">
          <div class="two-columns">
            <div class="-col" v-for="(col, i) in blok.columns" :key="i">
              <div class="-item" v-for="(item, k) in col.items" :key="k">
                <template v-if="item.component === 'title_text'">
                  <div class="-title">{{ item.title }}</div>
                  <div class="-content" v-html="text(item.text)"></div>
                </template>
                <template v-if="item.component === 'include_hours'">
                  <div class="-title">{{ item.title }}</div>
                  <div class="-hours" v-for="(hourItem, i) in hoursBlock" :key="i">
                    <div class="-hours-title">{{ hourItem.days }}</div>
                    <div class="-hours-time">{{ hourItem.times }}</div>
                  </div>
                </template>

              </div>

             </div>
            <!-- <div class="-col">
              <div class="-title">Hours</div>
            </div> -->
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
  props: ['blok'],

  data() {
    return {
      hoursBlock: null
    }
  },

  created() {
    this.getHoursBlock();
  },

  methods: {
    text(text) {
      return text ? this.$storyapi.richTextResolver.render(text) : ''
    },

    getHoursBlock() {
      // Get all locations from admin
    axios.get('https://api.storyblok.com/v1/cdn/stories/hours?token=8QLId0Un9MKhCRu6YCrPPAtt&version=draft')
      .then(r => {
        // console.log(r.data.story.content);
        this.hoursBlock = r.data.story.content.hours_items;
      })
      .catch(err => {
        console.log('nav fetch error', err);
      })
    },
  }
}
</script>

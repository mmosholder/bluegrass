<template>
  <nav class='nav' role='navigation'>
    <div class="container">
      <div class="-row">
				<a href="/">
          <img class="-logo" src="~assets/images/home-nav-logo.png" alt="">
          <img class="-wordmark" src="~assets/images/wordmark@2x.png" alt="">
        </a>
        <button class="hamburger hamburger--slider" type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <div class="-links">
          <ul>
            <nuxt-link tag="li" to="/"><a>Home</a></nuxt-link>
            <nuxt-link tag="li" v-for="(item, i) in navItems" :key="i" :to="`/${item.link.cached_url}`"><a>{{item.link_text}}</a></nuxt-link>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      navItems: null
    }
  },

  created() {
    this.getNavItems();
  },

  methods: {
    getNavItems() {
      // Get all locations from admin
      axios.get('https://api.storyblok.com/v1/cdn/stories/navigation?token=8QLId0Un9MKhCRu6YCrPPAtt&version=draft')
        .then(r => {
          this.navItems = r.data.story.content.links;
        })
        .catch(err => {
          console.log('nav fetch error', err);
        })
    }
  }
}
</script>

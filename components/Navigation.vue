<template>
  <nav class='nav' role='navigation'>
    <div class="container">
      <div class="-row">
				<a href="/">
          <img class="-logo" src="~assets/images/home-nav-logo.png" alt="">
          <img class="-wordmark" src="~assets/images/wordmark@2x.png" alt="">
        </a>
        <button @click="navOpen = !navOpen" :class="['hamburger hamburger--slider ' + computedIconClass]" type="button" id="navToggle"
          aria-label="Menu" aria-controls="navigation" aria-expanded="false">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <div :class="['-links' + computedNavClass]">
          <ul>
            <!-- <nuxt-link tag="li" to="/"><a>Home</a></nuxt-link> -->
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
      navItems: null,
      navOpen: false
    }
  },

  created() {
    this.getNavItems();
  },

  computed: {
    computedIconClass() {
        if (this.navOpen) {
          if (window.outerWidth >= 768) {
            return ' is-active'
          }
        } else {
          return '';
        }
      },

      computedNavClass() {
        if (this.navOpen) {
          return ' -open'
        } else {
          return '';
        }
      }
  },

  watch: {
    navOpen() {
        const body = document.getElementsByTagName('body');
        const html = document.getElementsByTagName('html');

        body[0].classList.toggle('-nav-open');
        html[0].classList.toggle('-nav-open');
      },

      '$route' (to, from) {
        this.navOpen = false;
      }
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

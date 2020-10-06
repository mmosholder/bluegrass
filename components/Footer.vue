<template>
  <footer class="footer" role="contentinfo">
		<div class="container">
			<div class="row">
				<div class="hours" v-if="hoursBlock">
          <div class="-item" v-for="(hourItem, i) in hoursBlock" :key="i">
            <div class="-title">{{ hourItem.days }}</div>
            <div class="-time">{{ hourItem.times }}</div>
          </div>
        </div>
				<div class="links">
          <ul>
              <nuxt-link tag="li" to="/"><a>Home</a></nuxt-link>
              <nuxt-link tag="li" v-for="(item, j) in navItems" :to="`/${item.link.cached_url}`" :key="j"><a>{{item.link_text}}</a></nuxt-link>
          </ul>
          <ul class="links__secondary">
            <nuxt-link tag="li" to="/menus"><a>Coffee &amp; Tea</a></nuxt-link>
            <nuxt-link tag="li" to="/menus"><a>Breakfast &amp; Sunday Brunch</a></nuxt-link>
            <nuxt-link tag="li" to="/menus"><a></a>Lunch &amp; Dinner</nuxt-link>
            <nuxt-link tag="li" to="/menus"><a>Drinks</a></nuxt-link>
            <nuxt-link tag="li" to="/menus"><a>Happy Hour</a></nuxt-link>
          </ul>
        </div>
				<div class="contact">
					<div class="-address">
						<span>The Bluegrass</span>
						<span>7415 Grandview Ave</span>
						<span>Arvada, CO 80002</span>
						<span>720-476-3950</span>
					</div>
					<div class="-social">
            <a href="https://www.facebook.com/thebluegrasscoffeehouse/" target="_blank">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/bluegrassloungearvada/" target="_blank">
              <i class="fa fa-instagram"></i>
            </a>
					</div>
				</div>
			</div>
      <div class="bottom">The Bluegrass &copy; {{ currentYear }}</div>
		</div>
	</footer>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      hoursBlock: null,
      navItems: null
    }
  },

  created() {
    this.getHoursBlock();
    this.getNavItems();
  },

  computed: {
    currentYear() {
      let date = new Date;

      return date.getFullYear()
    }
  },

  methods: {
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

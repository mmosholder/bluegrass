
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { property: "og:title", content: "The Bluegrass Lounge" },
      { property: "og:url", content: "https://thebluegrasslounge.com/" },

      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "The Bluegrass Lounge" },
      {
        property: "og:description",
        content:
          "The Bluegrass Coffee & Bourbon Lounge brings KY Hospitality to Olde Town Arvada. Coffee House by Day, Bourbon Bar by night."
      },
      {
        property: "og:image",
        content: "https://thebluegrasslounge.com/social-share.jpg"
      },
      { property: "og:image:secure_url", content: "https://thebluegrasslounge.com/social-share.jpg"},
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "twitter:title", content: "The Bluegrass Lounge" },
      { property: "og:type", content: "website" },
      { property: "twitter:card", content: "summary_large_image" },
      {
        property: "twitter:description",
        content:
          "The Bluegrass Coffee & Bourbon Lounge brings KY Hospitality to Olde Town Arvada. Coffee House by Day, Bourbon Bar by night."
      },
      { property: "twitter:image", content: "https://thebluegrasslounge.com/social-share.jpg" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: 'https://use.fontawesome.com/bcb0ade4ba.js'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/app.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/components.js', '~/plugins/googleMaps.js'],

  router: {
    linkActiveClass: "current"
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  env: {
    MAPS_KEY: process.env.MAPS_KEY
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',

    ['storyblok-nuxt', {
      accessToken: '8QLId0Un9MKhCRu6YCrPPAtt',
      cacheProvider: 'memory'
    }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

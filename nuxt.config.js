
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css' }
    ]
  },
  pwa: {
    meta: {
      author: 'theSpiderDev',
      theme_color: '#000',
      lang: process.browser ? navigator.language.split('-')[0] : 'en',
      ogTitle: 'theSpiderDev · Nuxt',
      ogSiteName: 'thespiderdev-nuxt',
      ogHost: 'https://thespiderdev-nuxt.herokuapp.com',
      twitterSite: 'https://twitter.com/theSpiderDev'
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'G-GBGEJYFMDR'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['cookie-universal-nuxt', { alias: 'cookie' }],
    ['nuxt-i18n', {
      locales: [
        {
          name: 'Português',
          code: 'pt',
          iso: 'pt-BR',
          file: 'pt.js'
        },
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en.js'
        },
      ],
      langDir: 'lang/',
      defaultLocale: 'en',
    }],
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
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

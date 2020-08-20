const path = require('path')

export default {
  mode: 'universal',

  target: 'static',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,500&display=swap' }
    ]
  },

  content: {
    fullTextSearchFields: ['word', 'alternate', 'definitions.text'],
    nestedProperties: ['definitions.class', 'definitions.text']
  },

  css: [
  ],

  styleResources: {
    scss: [
      './assets/tokens/*.scss',
    ],
  },

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    // '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources'
  ],

  modules: [
    '@nuxt/content'
  ],

  content: {},

  build: {
    extend (config, context) {
      config.resolve.alias['@'] = path.resolve(__dirname)
    }
  }
}

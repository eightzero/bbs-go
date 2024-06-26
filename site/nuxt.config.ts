// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@element-plus/nuxt',

    ['nuxt-lazy-load', {
      images: true,
      videos: true,
      audios: true,
      iframes: true,
      native: true,
      directiveOnly: false,

      // Default image must be in the public folder
      // defaultImage: '/images/default-image.jpg',

      // To remove class set value to false
      loadingClass: 'isLoading',
      loadedClass: 'isLoaded',
      appendClass: 'lazyLoad',

      observerConfig: {
        // See IntersectionObserver documentation
      },
    }],
  ],

  plugins: [
  ],

  elementPlus: { /** Options */ },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
  },

  imports: {
    dirs: [
      'apis',
      'stores',
    ],
  },
  app: {
    head: {
      title: 'BBS-GO',
      htmlAttrs: { class: 'light-mode' },
      // bodyAttrs: { class: 'bg-gray-50' },
      // htmlAttrs: { class: 'bg-gray-50' },
      script: [
        {
          src: 'https://hm.baidu.com/hm.js?79b8ff82974d0769ef5c629e4cd46629',
          type: 'text/javascript',
          async: true
        }
      ]
    },
  },
  css: [
    '~/assets/css/index.scss',
  ],
  pinia: {
    autoImports: ['defineStore', 'storeToRefs'],
  },
  nitro: {
    routeRules: {
      '/api/**': {
        proxy: `${import.meta.env.SERVER_URL}/api/**`,
      },
    },
  },
})

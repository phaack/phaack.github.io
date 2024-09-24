import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  //app head
  app: {
    head: {
      title: 'Pretty Table Builider',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Pretty Table Builder to download images of tables' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  
  pinia: {
    storesDirs: ['./stores/**'],
  },

  typescript: {
    strict: true
  },

  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  }
})
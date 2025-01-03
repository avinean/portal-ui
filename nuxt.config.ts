// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/strapi',
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    "@nuxt/image"
  ],
  colorMode: {
    preference: 'light',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
  },
  css: [
    '@/assets/global.css',
  ],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    admin: '/admin',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt',
    devtools: true,
  },
  image: {
    strapi: {
      baseURL: process.env.STRAPI_IMAGE_URL || 'http://localhost:1337/'
    }
  },
  extends: [
    './apps/blog',
    './apps/landing',
    './apps/cms',
    './apps/core',
  ],
  compatibilityDate: '2024-07-05',
})
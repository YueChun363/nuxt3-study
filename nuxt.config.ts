// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  // 全局注册less样式表
  css: ['~/assets/css/global.less'],
  modules: ["@pinia/nuxt", "@ant-design-vue/nuxt", '@nuxtjs/tailwindcss'],
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "@/assets/css/global.less";`
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      baseUrl: ''
    }
  }
})

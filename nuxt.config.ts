// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // page wise if you want to add titles or meta data, you can use the useHead composable.
  app: {
    head: {
      title: "Nuxt course",
      meta: [
        {
          name: "description",
          content: "This a nuxt course from Gulliaume"
        }
      ]
    }
  },
  devtools: { enabled: true },
  alias: {
    "@": new URL('./', import.meta.url).pathname,
  },
  buildModules: ['@nuxt/typescript-build'],
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      MY_ENV_VARIABLE: process.env.MY_ENV_VARIABLE,
      API_ROOT: process.env.API_ROOT
    },
  },
  ssr: false
})

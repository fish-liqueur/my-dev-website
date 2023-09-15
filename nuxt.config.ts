// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', "@nuxtjs/tailwindcss", '@vueuse/nuxt', '@nuxt/image', 'nuxt-icons'],
  googleFonts: {
    subsets: 'cyrillic',
    families: {
      Manrope: true,
    }
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

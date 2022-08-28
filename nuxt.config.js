import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "@nuxt/content",
  ],
  build: {
    transpile: ["@heroicons/vue"],
  },
  colorMode: {
    classSuffix: "",
  },
});

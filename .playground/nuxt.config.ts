export default defineNuxtConfig({
  extends: ['..'],
  modules: ['@nuxt/eslint'],
  future: {
    compatibilityVersion: 4
  },
  // eslint: {
  //   config: {
  //     // Use the generated ESLint config for lint root project as well
  //     rootDir: fileURLToPath(new URL('..', import.meta.url))
  //   }
  // },

  compatibilityDate: '2025-01-23'
})

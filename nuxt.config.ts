// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  modules: ["@sidebase/nuxt-auth"],
  // 权限配置
  auth: {
    isEnabled: true,
    disableServerSideAuth: false,
    originEnvKey: 'NUXT_AUTH_ORIGIN',
    // baseURL: 'http://localhost:3000/api/auth',
    provider: {
      type: 'authjs',
      trustHost: false,
      defaultProvider: 'github',
      addDefaultCallbackUrl: true,
    },
    sessionRefresh: {
      enablePeriodically: 1000 * 60 * 5, // 5 分钟刷新一次
      enableOnWindowFocus: true,
    }
  },
  runtimeConfig: {
    authSecret: 'your_secret',
    authOrigin: 'your_secret',
    githubClientId: 'your_secret',
    githubClientSecret: 'your_secret',
  }
})

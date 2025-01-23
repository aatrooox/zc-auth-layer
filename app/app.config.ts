export default defineAppConfig({
  authLayer: {
    name: 'Hello from Auth layer (playground)',
    enabled: true,
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string,
      enabled: boolean
    }
  }
}

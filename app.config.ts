export default defineAppConfig({
  myLayer: {
    name: 'Hello from Auth layer'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string
    }
  }
}

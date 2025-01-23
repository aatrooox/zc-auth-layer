import GithubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  // A secret string you define, to ensure correct encryption
  secret: useRuntimeConfig().authSecret,
  providers: [
    // @ts-expect-error Use .default here for it to work during SSR.
    GithubProvider.default({
      clientId: useRuntimeConfig().githubClientId,
      clientSecret: useRuntimeConfig().githubClientSecret
    })
  ],
  callbacks: {
    // 在 jwt 创建和修改时会调用
    jwt({ token, account, profile }) {
      if (account) {
        token.sessionToken = account.session_token
        console.log(`jwt cb: ${token}` )

      }
      return token
    },
    // 每次请求会话数据时， 都会调用此回调。 jwt 和 session 新增了新属性后，需要自己手动添加类型
    async session({ session, token }) {
      // Token we injected into the JWT callback above.
      const sessionToken = token.sessionToken
      console.log(`session cb: ${JSON.stringify(token)}` )
      // 获取数据
      // const additionalUserData: any = await $fetch(`/api/session/${token}`)

      // 返回的新对象可以在 useAuth 里直接使用 data.user.name 获取
      return {
        ...session,
        // user: {
        //   name: additionalUserData.name,
        //   avatar: additionalUserData.avatar,
        //   role: additionalUserData.role
        // }
      }
    },
  }
})
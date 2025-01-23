<template>
  <div>
    <h1> Playground Home Page</h1>
    <p> playground 的作用是测试 extend根目录下后 的效果，也就是说如果此项目【zc-auth-layer】扩展的功能<strong>必须放在根目录下</strong>，只有根目录下才是 layer 的真正内容</p>
    <p> playgorund 中仅仅存在一些测试页面等 </p>
    <p> 对于此项目，.env 文件是不支持被 extend 的，所以哪里用到，就需要在哪个 Layer/项目 中自己配置</p>
    <p> 虽然 playground/nuxt.config.ts 中写了extend .. , 但 ..（layer） 中的 env 也不会被复制进来，需要自己手动添加</p>
    <p> 同理：使用了 zc-auth-layer 的 blog 项目，也需要在自己项目下增加 .env 才能正常使用</p>

    <button @click="signIn('github')"> 使用 Github 登录</button>
    <button @click="navigateTo('/auth')">auth page</button>
  </div>
</template>
<script lang="ts" setup>
const { signIn } = useAuth();
</script>
<style lang="less" scoped>
</style>

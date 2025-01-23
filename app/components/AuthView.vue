<template>
  <div>
    如果你看到了这条信息，说明此时我正在测试 Nuxt Layers (DDD) 之 <a href="https://github.com/aatrooox/zc-auth-layer">Auth Layer</a> 的功能。 GITHUB: {{ status }}
  </div>
</template>
<script lang="ts" setup>
const { status } = useAuth()
</script>
<style lang="less" scoped>
</style>

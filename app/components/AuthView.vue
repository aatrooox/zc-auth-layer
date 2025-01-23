<template>
  <div>
    <h1>Auth View Component</h1>
    <div>
      current auth status: {{ status }}
    </div>
  </div>
</template>
<script lang="ts" setup>
const { status } = useAuth()
</script>
<style lang="less" scoped>
</style>

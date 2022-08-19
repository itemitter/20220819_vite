<template>
  <div>
    {{ userStore.name }}
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/user'

const userStore =  useUserStore()
// 修改姓名
userStore.updateName('李四')

</script>

<style lang="scss" scoped>

</style>
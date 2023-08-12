<script setup>
import { useUserStore } from '@/stores/modules/user'

const userStore = useUserStore()
</script>

<template>
  <div>{{ userStore.token }}</div>
  <el-button @click="userStore.setToken('asd')">login</el-button>
  <el-button @click="userStore.removeToken()">logout</el-button>
</template>

<style scoped></style>

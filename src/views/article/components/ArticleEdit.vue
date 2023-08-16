<script lang="ts" setup>
import { ref } from 'vue'

const visibleDrawer = ref(false)
const open = (row) => {
  visibleDrawer.value = true
  console.log(row)
}
defineExpose({
  open
})
</script>

<template>
  <el-drawer v-model="visibleDrawer" title="TITLE">
    <span>Hello!</span>
  </el-drawer>
</template>

<style lang="scss" scoped></style>

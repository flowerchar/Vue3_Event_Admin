<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
const open = (row) => {
  console.log(row)
  dialogVisible.value = true
}
defineExpose({
  open
})
</script>

<template>
  <el-dialog v-model="dialogVisible" title="添加弹层" width="30%">
    <span>我是内容部分</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确认</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>

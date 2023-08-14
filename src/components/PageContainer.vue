<script lang="ts" setup>
defineProps({
  title: {
    required: true,
    type: String
  }
})
</script>

<template>
  <el-card class="page-container">
    <template #header>
      <div class="header">
        <span>{{ title }}</span>
        <div class="extra">
          <slot name="extra"></slot>
        </div>
      </div>
    </template>
    <slot></slot>
  </el-card>
</template>

<style lang="scss" scoped>
.page-container {
  //这样没有内容也能撑开
  min-height: 100%;
  //padding+border===size
  box-sizing: border-box;

  .header {
    display: flex;
    //两边靠
    justify-content: space-between;
    align-items: center;
  }
}
</style>

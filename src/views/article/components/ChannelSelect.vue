<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { artGetChannelService } from '@/api/article.js'

defineProps({
  modelValue: {
    type: [Number, String]
  },
  width: {
    type: String
  }
})
const emit = defineEmits(['update:modelValue'])
const channelList = ref([])
const getChannelList = async () => {
  const res = await artGetChannelService()
  channelList.value = res.data.data
}
onMounted(() => {
  getChannelList()
})
</script>

<template>
  <el-select
    :modelValue="modelValue"
    :style="{ width }"
    @update:modelValue="emit('update:modelValue', $event)"
  >
    <el-option
      v-for="channel in channelList"
      :key="channel.id"
      :label="channel.cate_name"
      :value="channel.id"
    ></el-option>
  </el-select>
</template>

<style lang="scss" scoped></style>

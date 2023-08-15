<script setup>
import PageContainer from '@/components/PageContainer.vue'
import { artGetChannelService } from '@/api/article'
import { ref } from 'vue'
import { Delete, Edit } from '@element-plus/icons-vue'
import ChannelEdit from '@/views/article/components/ChannelEdit.vue'

const loading = ref(false)
const channelList = ref([])
const dialog = ref()
const getChannelList = async () => {
  loading.value = true
  const res = await artGetChannelService()
  channelList.value = res.data.data
  console.log(channelList.value)
  loading.value = false
}
const onEditChannel = (row) => {
  dialog.value.open(row)
}
const onAddChannel = () => {
  dialog.value.open({})
}
const onDeleteChannel = (row, $index) => {
  console.log(row, $index)
}
const onSuccess = () => {
  // console.log('success')
  getChannelList()
}
getChannelList()
</script>

<template>
  <page-container title="文章分类">
    <template #extra>
      <el-button @click="onAddChannel">添加分类</el-button>
    </template>
    <el-table v-loading="loading" :data="channelList" style="width: 100%">
      <el-table-column label="序号" type="index" width="100"></el-table-column>
      <el-table-column label="分类名称" prop="cate_name"></el-table-column>
      <el-table-column label="分类别名" prop="cate_alias"></el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="{ row, $index }">
          <el-button
            :icon="Edit"
            circle
            type="primary"
            @click="onEditChannel(row, $index)"
          ></el-button>
          <el-button
            :icon="Delete"
            circle
            type="danger"
            @click="onDeleteChannel(row, $index)"
          ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据"></el-empty>
      </template>
    </el-table>

    <channel-edit ref="dialog" @success="onSuccess"></channel-edit>
  </page-container>
</template>

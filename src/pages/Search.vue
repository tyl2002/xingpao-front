<script setup lang="ts">
import { ref } from 'vue';
import router from "../config/route.ts";

const searchText = ref('');
const show = ref(true);
// 标签列表
const activeIds = ref([]);
const activeIndex = ref(0);
const originTagList = [
  {
    text: '年级',
    children: [
      { text: '大一', id: 1 },
      { text: '大二', id: 2 },
      { text: '大三', id: 3, disabled: true },
      { text: '大4', id: 1111111111111111111111 },
      { text: '大5', id: 222222222222222222222222222 },
    ],
  },
  {
    text: '技术',
    children: [
      { text: 'Java', id: 'Java' },
      { text: 'Vue', id: 'Vue' },
      { text: 'C++', id: 'C++' },
    ],
  },
  { text: '性别',
    children: [
      { text: '男', id: '男' },
      { text: '女', id: '女' },
    ],
  },

];
const closeTag = (tag:number)=>{
  activeIds.value = activeIds.value.filter(item => {return item !== tag})
};
const tagList = ref(originTagList);
const onCancel = () => {
    activeIds.value = [];
    tagList.value = originTagList;
};

const onSearch = (val) => {
  tagList.value = originTagList.map(parentTag => {
    const tempChildren =  Array.isArray(parentTag.children) ? [...parentTag.children] : [];
    const tempParentTag = {...parentTag};
    tempParentTag.children = tempChildren.filter(item => item.text.toLowerCase().includes(val));
    return tempParentTag;
});
}

const toSearchPage = ()=>{
  router.push({
    path: '/user/list',
    query: {
      tags:activeIds.value
    }
  })
}

</script>

<template>

  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>
  <van-divider>已选标签</van-divider>
  <div v-if="activeIds.length === 0">请选择标签</div>
  <van-space wrap>
  <van-tag v-for="tag in activeIds" :show="show" closeable size="medium" type="primary" @close="closeTag(tag)">
    {{tag}}
  </van-tag>
  </van-space>
  <van-divider>全部标签</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />

  <van-button type="primary" @click="toSearchPage">搜索</van-button>
</template>

<style scoped>

</style>
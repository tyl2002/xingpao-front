<script setup lang="ts">
import { showToast } from 'vant';
import {useRouter} from "vue-router";
const router = useRouter();
const onChange = (index:string) => showToast(`标签 ${index}`);

const onClickLeft = () => {router.back()};
const onClickRight = () =>{
  router.push('/search');
};
</script>

<template>
  <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
    <van-icon name="search" size="18" />
  </template>
  </van-nav-bar>
  <div id = "content">
    <router-view/>
  </div>
  <van-tabbar route @change="onChange">
    <van-tabbar-item  replace to="/" icon="home-o" name = "index">主页</van-tabbar-item>
    <van-tabbar-item  replace to="/team" icon="search" name = "team">队伍</van-tabbar-item>
    <van-tabbar-item  replace to="/user" icon="friends-o" name = "user">个人</van-tabbar-item>
  </van-tabbar>

</template>

<style scoped>

#content {
  padding-bottom: 50px;
}

</style>
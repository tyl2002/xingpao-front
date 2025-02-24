<script setup lang="ts">

import route from "../config/route.ts";
import {onMounted} from "vue";
import { ref } from "vue";
import {showFailToast} from "vant";
import {genCurrentUser} from "../services/user.ts";

const user =ref({});

onMounted(async ()=>{
  const res = await genCurrentUser()
  if(res.code == 0 && res.data){
    console.log('currentUser', res.data);
    user.value = res.data;
  }else{
    showFailToast('获取当前用户失败！')
  }


})

const onEdit = (editKey:string,editName:string,currentValue:any) => {
  route.push({
    path:"/user/edit",
    query:{
      editKey:editKey,
      editName:editName,
      currentValue:currentValue
    },
  });
}
</script>

<template>
  <van-cell title="昵称" is-link :value = "user.userName" @click="onEdit('userName','昵称',user.userName)"/>
  <van-cell title="头像" is-link value="内容" @click="onEdit('avatarUrl','头像',user.avatarUrl)" >
    <img :src="user.avatarUrl" style="height: 48px;">
  </van-cell>
  <van-cell title="账号" is-link arrow-direction="right" @click="onEdit('userAccount','账号',user.userAccount)" :value="user.userAccount" />
  <van-cell title="性别" is-link arrow-direction="right" @click="onEdit('gender','性别',user.gender)" :value="user.gender" />
  <van-cell title="电话" is-link arrow-direction="right" @click="onEdit('phone','电话',user.phone)" :value="user.phone" />
  <van-cell title="邮箱" is-link arrow-direction="right" @click="onEdit('email','邮箱',user.email)" :value="user.email" />
  <van-cell title="编号" :value="user.code" />
  <van-cell title="创建时间" :value="user.createTime" />
</template>

<style scoped>

</style>
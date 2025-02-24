<script setup lang="ts">

import { ref } from 'vue';
import myAxios from "../plugins/myAxios.ts";
import {showFailToast, showSuccessToast, Toast} from "vant";
import router from "../config/route.ts";
const userAccount = ref('');
const userPassword = ref('');
const onSubmit = async (values) => {
  const res =  await myAxios.post("/user/login",{
    userAccount: values.userAccount,
    userPassword: values.userPassword,
  })
  console.log(res);
  if (res.code === 0 && res.data) {
    showSuccessToast('登陆成功！');
    router.replace('/');
  }else{
    showFailToast('登陆失败');
  }

};
</script>

<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="userAccount"
          label="账号"
          placeholder="账号"
          :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
          v-model="userPassword"
          type="password"
          name="userPassword"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<style scoped>

</style>
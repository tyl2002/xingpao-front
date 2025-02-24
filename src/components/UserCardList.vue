<script setup lang="ts">
import {CurrentUser} from "../models/User";

interface UserCardList {
  userList: CurrentUser[];
}
  const props = defineProps<UserCardList>();
</script>

<template>
  <van-card
      v-for="user in props.userList"
      :desc="user.profile"
      :title="user.userName"
      :thumb="user.avatarUrl"
  >
    {{user.tagList}}
    <template #tags>
      <van-tag  v-for="tag in user.tagList" plain type="primary" style="margin-right: 8px; margin-top: 8px">{{tag}}</van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
</template>

<style scoped>

</style>
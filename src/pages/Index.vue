<script setup lang="ts">
import myAxios from "../plugins/myAxios.ts";
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import qs from "qs";
import UserCardList from "../components/UserCardList.vue";
const route = useRoute();

const userList =ref([]);
onMounted(() => {
  myAxios.get('/user/recommend', {
    params: {
      pageNum: 1,
      pageSize: 10,
    },
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: "repeat" });
    },

  })
      .then(function (response) {
        console.log('/user/recommend',response);
        userList.value = response?.data;
        userList.value.forEach((user)=>{
          if(user.tagList){
            user.tagList = JSON.parse(user.tagList);
          }
        })
      })
      .catch(function (error) {
        console.log('/user/recommend',error);
      });
})

</script>

<template>
  <user-card-list :user-list = "userList"></user-card-list >
  <van-empty v-if="!userList || userList.length === 0" description="暂无推荐用户" />

</template>

<style scoped>

</style>
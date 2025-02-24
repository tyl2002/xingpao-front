<script setup lang="ts">
 import myAxios from "../plugins/myAxios.ts";
 import {useRoute} from "vue-router";
 import {onMounted, ref} from "vue";
 import qs from "qs";
 import UserCardList from "../components/UserCardList.vue";
 const route = useRoute();
 const tags = route.query.tags;
 const userList=ref([]);
 onMounted(() => {
   myAxios.get('/user/search/tags', {
     params: {
       tagNameList : tags,
     },
     paramsSerializer: function (params) {
       return qs.stringify(params, { arrayFormat: "repeat" });
     },

   })
       .then(function (response) {
         console.log("/user/search/tags succeed",response);
         userList.value = response?.data;
         userList.value.forEach((user)=>{
            if(user.tagList){
              user.tagList = JSON.parse(user.tagList);
            }
         })
       })
       .catch(function (error) {
         console.log("/user/search/tags error",error);
       });
 })

</script>

<template>
<user-card-list :user-list="userList"/>
  <van-empty v-if="!userList || userList.length === 0" description="搜索结果为空" />

</template>

<style scoped>

</style>
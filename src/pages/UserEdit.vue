<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {showFailToast, showSuccessToast} from "vant";
import router from "../config/route.ts";
import {genCurrentUser} from "../services/user.ts";
const route = useRoute();
/**
 * 修改的参数及值
 */
const editUser =ref({
  editKey:route.query.editKey,
  editName:route.query.editName,
  currentValue:route.query.currentValue
})
const currentUser = ref({});
onMounted(async ()=>{
  const res = await genCurrentUser();
  console.log(res)
  if(res.code == 0 && res.data){
    currentUser.value = res.data;
  }else{
    showFailToast('获取当前用户失败')
  }

})
const onSubmit = async () => {
  console.log('submit', editUser);
  const res = await myAxios.post("/user/update",{
    id: currentUser.value.id,
    [route.query.editKey as string]: editUser.value.currentValue,
  })
  if(res.code == 0 && res.data){
    showSuccessToast('修改成功');
    router.replace('/user');
  }else{
    showFailToast(`修改失败!`)
  }
}
</script>

<template>
  <van-form>
    <van-cell-group inset>
      <van-field
          v-model="editUser.currentValue"
          :name="editUser.editName"
          :label="editUser.editName"
          :placeholder="editUser.editName"
          :rules="[{ required: true, message: `请填写${editUser.editName}` }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit" @click="onSubmit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<style scoped>

</style>
<template>
  <el-menu
      style="display: flex;justify-content: space-between"
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
    <div style="height: 59px;width:50%;line-height: 59px;color: white;margin-left: 40px">
      <span style="">聊天记录模拟器 <span style="color: red">(仅用于娱乐)</span></span>
    </div>
    <div style="height: 59px;line-height: 59px;">
      <el-button type="text" @click="openDialog" style="font-size: 16px">意见/反馈</el-button>
      <el-dialog
          title="联系我们"
          v-model="centerDialogVisible"
          width="30%"
          center>
        <span style="font-size: 20px">邮箱：<span style="color: #288cdd">zhl2548@163.com</span><br>      QQ: <span style="color: #288cdd;">2548271969</span></span>
        <div>
          <span style="font-size: 20px">微信:</span><br>
          <img src="@/assets/twoDimensionalCode.png" alt="" style="width: 200px;height: 200px;margin-left: 100px">
        </div>
        <span slot="footer" class="dialog-footer">
  </span>
      </el-dialog>

    </div>
    <div style="height: 59px;width:50%;line-height: 59px;color: white;margin-right: 40px">
      <span style="float: right">登录</span>
    </div>
  </el-menu>

  <el-container>
    <el-aside width="200px">
      <Xleft></Xleft>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>
<script>
import {ref} from "vue";

export default {
name:'HomePage',
setup(){
  const centerDialogVisible=ref(false)
  function openDialog() {
    centerDialogVisible.value= true
    console.log(centerDialogVisible.value);
  }
  return{
    centerDialogVisible,
    openDialog
  }
}
}
</script>

<style scoped>

</style>

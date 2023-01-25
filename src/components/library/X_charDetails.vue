<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="界面信息设置" name="first">
      <XfaceSettings></XfaceSettings>
    </el-tab-pane>
    <el-tab-pane label="聊天内容设置" name="second">
      <XchatMessages></XchatMessages>
    </el-tab-pane>
    <el-tab-pane label="头像/背景 管理" name="third">
      <XroleManagement></XroleManagement>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import {reactive, ref} from "vue";
import {useStore} from "vuex";

export default {
  name: "XcharDetails",
  components: {},

  setup() {
    const activeName = ref('first')

    function handleClick(tab, event) {
      console.log(tab, event);
    }

    return {
      activeName,
      handleClick
    }
  }
}
</script>

<style scoped>

</style>

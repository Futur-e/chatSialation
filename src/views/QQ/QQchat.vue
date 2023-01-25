<template>
 <el-tabs type="border-card">
<!--    <el-tab-pane label="聊天记录">
      <el-row>
        <el-col :span="2"></el-col>
        <el-col :span="7">
          <XchatPhone></XchatPhone>
        </el-col>
        <el-col :span="2"></el-col>
        <el-col :span="12">
          <XcharDetails></XcharDetails>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="转账记录">
      <el-row style="background-color: #f0f0f0;padding: 10px">
        <el-col :span="2"></el-col>
        <el-col :span="7">
          <XtransferPhone></XtransferPhone>
        </el-col>
        <el-col :span="2"></el-col>
        <el-col :span="12">
          <XtransferDetails></XtransferDetails>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="余额截图">
      <el-row style="background-color: #f0f0f0;padding: 10px">
        <el-col :span="2"></el-col>
        <el-col :span="7">
          <XbalancePhone></XbalancePhone>
        </el-col>
        <el-col :span="2"></el-col>
        <el-col :span="12">
          <XbalanceDetails></XbalanceDetails>
        </el-col>
      </el-row>
    </el-tab-pane>-->
    <el-tab-pane label="QQ相关功能" style="height: 670px">
      <el-empty description="待开发，后续更新。" ></el-empty>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import XtransferPhone from "@/components/library/X_transferPhone";
import XtransferDetails from "@/components/library/X_transferDetails";
export default {
  name:'QQchat',
  components: {XtransferDetails, XtransferPhone},

}
</script>

<style scoped>

</style>

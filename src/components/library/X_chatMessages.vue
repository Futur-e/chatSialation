<template>
  <span style="color: red">提示：点击头像删除对应记录</span>
  <el-form :model="message" ref="message1" label-width="100px" class="demo-message">
    <el-form-item label="用户选择" prop="id">
      <el-radio-group v-model="message.id">
        <el-radio label="收消息" value="0"></el-radio>
        <el-radio label="发消息" value="1"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="添加时间" >
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker type="date" placeholder="选择日期" v-model="message.date1" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker placeholder="选择时间" v-model="message.date2" style="width: 100%;"></el-time-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="消息类型" prop="type">
      <el-radio-group v-model="message.type">
        <el-radio label="文本" name="type"></el-radio>
        <el-radio label="红包" name="type"></el-radio>
        <el-radio label="转账" name="type"></el-radio>
        <el-radio label="语音" name="type"></el-radio>
        <el-radio label="视频" name="type"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="文本内容" prop="tex">
      <el-input v-model="message.tex"></el-input>
    </el-form-item>
    <el-form-item label="红包内容" prop="name">
      <el-input v-model="message.htex"></el-input>
    </el-form-item>
    <el-form-item label="转账内容" >
      <el-col :span="14">
        <el-form-item label="转账留言" prop="ztex">
          <el-input v-model="message.ztex"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="转账金额" prop="zmoney">
          <el-input v-model="message.zmoney"></el-input>
        </el-form-item>
      </el-col>
    </el-form-item>

    <el-form-item label="视频/语音" >
      <el-col :span="7">
          <el-select v-model="message.region" placeholder="通话是否成功">
            <el-option label="成功" value="通话时长"></el-option>
            <el-option label="中断" value="通话中断"></el-option>
            <el-option label="取消(收消息)" value="对方已取消"></el-option>
            <el-option label="取消(发消息)" value="已取消"></el-option>
            <el-option label="拒绝(收消息)" value="已拒绝"></el-option>
            <el-option label="拒绝(发消息)" value="对方已拒绝"></el-option>
          </el-select>
      </el-col>
      <el-col :span="11">
        <el-form-item label="通话时长">
         <el-input v-model="message.date3" placeholder="格式xx:xx"></el-input>
        </el-form-item>
      </el-col>
    </el-form-item>

<!--    <el-form-item label="即时配送" prop="delivery">
      <el-switch v-model="message.delivery"></el-switch>
    </el-form-item>-->
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
<!--      <el-button @click="resetForm('message')">重置</el-button>-->
    </el-form-item>
  </el-form>
</template>

<script>
import {reactive, ref} from "vue";
import {useStore} from "vuex";

export default {
  name: 'XchatMessages',
  setup(){
    const store = useStore()
    const message = ref({

    })
    function  onSubmit() {
      const l = message.value
      store.commit('addMessages',l)
      message.value={}
    }
    return{
      message,
      onSubmit
    }
  }
}
</script>

<style scoped>

</style>

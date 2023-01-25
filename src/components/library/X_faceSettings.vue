<template>
  <span style="color: red;padding-bottom: 10px">提示：点击头像删除对应记录,(添加时间，语音对话功能后续添加)</span>
  <el-form ref="form1" :model="form" label-width="80px">
    <el-form-item label="备注(网名)">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="时间">
      <el-col :span="11">
        <el-time-picker placeholder="选择时间" v-model="form.date" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="单卡/双卡">
      <el-switch v-model="form.card"></el-switch>
    </el-form-item>

    <el-form-item label="信号格数">
      <el-select v-model="form.Signal " placeholder="请选择信号质量">
        <el-option label="一格" value="1"></el-option>
        <el-option label="两格" value="2"></el-option>
        <el-option label="三格" value="3"></el-option>
        <el-option label="四格" value="4"></el-option>
        <el-option label="五格" value="5"></el-option>
        <el-option label="六格" value="6"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="wifi开关">
      <el-switch v-model="form.wifi"></el-switch>
    </el-form-item>
    <el-form-item label="wifi格数">
      <el-select v-model="form.region" placeholder="请选择信号质量">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="两格" value="two"></el-option>
        <el-option label="三格" value="three"></el-option>
        <el-option label="四格" value="four"></el-option>
        <el-option label="五格" value="five"></el-option>
        <el-option label="六格" value="six"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="消息提醒">
      <el-radio-group v-model="form.type">
        <el-radio label="响铃" name="type"></el-radio>
        <el-radio label="震动" name="type"></el-radio>
        <el-radio label="静音" name="type"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="蓝牙开关">
      <el-switch v-model="form.bluetooth "></el-switch>
    </el-form-item>
    <el-form-item label="是否充电">
      <el-switch v-model="form.Electricity "></el-switch>
    </el-form-item>
    <el-form-item label="电量调整">
      <el-input-number size="small" v-model="form.num" @change="handleChange"></el-input-number>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即修改</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {reactive, ref} from "vue";
import {useStore} from "vuex";

export default {
  name: "XfaceSettings",
  setup() {
    const num = ref(0)
    const store = useStore()
    const form = reactive({
      name: '',
      date:'',
      card: false,
      Signal:'',
      wifi:false,
      region: '',
      type: '',
      bluetooth:false,
      Electricity:false,
      num: 30
    })

    function  onSubmit() {
      store.commit('modifyForm',form)
    }
    function  handleChange(value) {
      console.log(value);
    }
    return{
      form,
      onSubmit,
      num,
      handleChange
    }
  }
}
</script>

<style scoped>

</style>

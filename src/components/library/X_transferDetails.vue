<template>
  <el-form :model="transfer" ref="message1" label-width="100px" class="demo-message">
    <el-form-item label="用户选择" prop="value">
      <el-radio-group v-model="transfer.id">
        <el-radio label="转账记录" value="0"></el-radio>
        <el-radio label="收款记录" value="1"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="添加时间" >
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker type="date" placeholder="选择日期" v-model="transfer.date1" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker placeholder="选择时间" v-model="transfer.date2" style="width: 100%;"></el-time-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="收款人昵称(备注)" prop="tex">
      <el-input v-model="transfer.tex"></el-input>
    </el-form-item>
    <el-form-item label="转账金额" prop="money">
      <el-col :span="8">
          <el-input v-model="transfer.money"></el-input>
      </el-col>
    </el-form-item>
  </el-form>
</template>

<script>
import {onMounted, reactive, ref, watch} from "vue";
import {useStore} from "vuex";

export default {
  name: 'X_transferDetails.vue',
  setup(){
    const store = useStore()
    const transfer = ref({
      id:'转账记录',
       tex:'张张',
      money:'1234.00'
    })
    onMounted(()=>{
      store.commit('addTransfers',transfer.value)
    })
    watch(transfer.value,()=>{
      store.commit('addTransfers',transfer.value)
    })
    return{
      transfer,
    }
  }
}
</script>

<style scoped>
/deep/ .el-form-item__label{
  width: 160px!important;
}
</style>

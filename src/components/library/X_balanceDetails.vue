<template>
  <el-form :model="money" ref="message1" label-width="100px" class="demo-message">
    <el-form-item label="转账金额" prop="money">
      <el-col :span="8">
          <el-input v-model="money"></el-input>
      </el-col>
    </el-form-item>
  </el-form>
</template>

<script>
import {onMounted, reactive, ref, watch} from "vue";
import {useStore} from "vuex";

export default {
  name: 'XbalanceDetails',
  setup(){
    const store = useStore()
    const money = ref('1234.00')
    onMounted(()=>{
      store.commit('changeMoney',money.value)
    })
    watch(money,()=>{
      store.commit('changeMoney',money.value)
    })
    return{
      money,
    }
  }
}
</script>

<style scoped>
/deep/ .el-form-item__label{
  width: 160px!important;
}
</style>

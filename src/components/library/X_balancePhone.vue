<template>
  <div>
    <div class="top">
      <span style="color: #747373">{{ dateFormat(store.state.form.date) }}</span>
      <div class="r">
        <div v-show="store.state.form.type==='静音'" style="padding-bottom: 10px">
          <svg t="1673447073056" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="4700" width="13" height="15">
            <path
                d="M827.2 429.76c0-149.44-113.92-272.64-259.52-287.04a64.512 64.512 0 1 0-126.4-0.96c-13.44 0.64-26.56 2.56-39.04 5.12l425.28 425.28v-142.4zM966.08 869.12l-138.88-138.88v-2.88L294.4 194.56c-0.64 0.32-1.28 0.64-1.6 1.28L144.32 47.36a46.72 46.72 0 0 0-66.56 0c-18.24 18.24-18.24 48 0 66.56l150.08 150.08c-29.12 43.52-46.4 96-46.4 152.32v337.6l-35.2 30.72c-11.52 10.24-4.48 29.12 10.88 29.12h620.8l121.92 121.92c9.28 9.28 21.12 13.76 33.28 13.76s24-4.48 33.28-13.76c17.92-18.24 17.92-48-0.32-66.56zM504.32 1014.08c64.96 0 117.44-52.48 117.44-117.44h-234.88c0 64.64 52.48 117.44 117.44 117.44z"
                fill="#7f7f7f" p-id="4701"></path>
          </svg>
        </div>
        <bluetooth v-show="store.state.form.bluetooth" theme="outline" size="15" fill="#7f7f7f" strokeLinejoin="bevel"
                   strokeLinecap="square"/>
        <shake v-show="store.state.form.type==='震动'" theme="outline" size="15" fill="#7f7f7f" strokeLinejoin="bevel"
               strokeLinecap="square"/>
        <!--        wifi-->
        <div>
          <svg v-show="store.state.form.wifi" t="1673507562972" class="icon" viewBox="0 0 1024 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg" p-id="23407" width="15" height="15">
            <path
                d="M723 620.5C666.8 571.6 593.4 542 513 542s-153.8 29.6-210.1 78.6c-3.2 2.8-3.6 7.8-0.8 11.2l36 42.9c2.9 3.4 8 3.8 11.4 0.9C393.1 637.2 450.3 614 513 614s119.9 23.2 163.5 61.5c3.4 2.9 8.5 2.5 11.4-0.9l36-42.9c2.8-3.3 2.4-8.3-0.9-11.2zM840.4 480.4C751.7 406.5 637.6 362 513 362s-238.7 44.5-327.5 118.4c-3.4 2.8-3.8 7.9-1 11.3l36 42.9c2.8 3.4 7.9 3.8 11.2 1C308 472.2 406.1 434 513 434s205 38.2 281.2 101.6c3.4 2.8 8.4 2.4 11.2-1l36-42.9c2.8-3.4 2.4-8.5-1-11.3z"
                p-id="23408" fill="#000007"></path>
            <path
                d="M957.1 341.4C835.7 241.8 680.3 182 511 182c-168.2 0-322.6 59-443.7 157.4-3.5 2.8-4 7.9-1.1 11.4l36 42.9c2.8 3.3 7.8 3.8 11.1 1.1C222 306.7 360.3 254 511 254c151.8 0 291 53.5 400 142.7 3.4 2.8 8.4 2.3 11.2-1.1l36-42.9c2.9-3.4 2.4-8.5-1.1-11.3z"
                p-id="23409" fill="#000007"></path>
            <path d="M512 778m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" p-id="23410" fill="#000007"></path>
          </svg>
        </div>
        <!--        信号-->
        <div v-show="store.state.form.card" class="box">
          <ul class="box1">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="box">
          <ul class="box1">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div class="dianliang">
          <div class="l_box">
            <svg v-show="store.state.form.Electricity" t="1673523437336" class="icon lightning1" viewBox="0 0 1024 1024"
                 version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27212" width="12" height="10">
              <path
                  d="M410.36 957.13c-15.41 0-31.07-3.81-45.76-11.67-39.92-21.32-59.06-65.06-47.64-108.83l53.2-203.96-77.96-31.17c-10.35-4.15-18.22-8.87-24.83-14.86-40.74-36.82-44.76-97.04-9.13-137.09L572.47 96.02c26.69-30.01 68.42-37.43 103.83-18.53 35.42 18.94 52.4 57.78 42.25 96.64l-64.52 247.2 78.03 31.22c10.29 4.1 18.21 8.83 24.88 14.92 40.61 36.82 44.6 97 9.05 137L481.4 924.6c-18.93 21.32-44.63 32.53-71.04 32.53z m202.83-824.91L298.96 485.75c-13.39 15.06-16.2 41.36 4.97 60.48 1.69 1.53 4.47 3.05 8.54 4.7l122.55 48.99-65.33 250.46c-6.08 23.31 6.64 39.57 20.58 47.02 13.88 7.4 34.44 8.96 50.4-9.01l284.6-320.15c13.36-15.01 16.16-41.31-4.95-60.45-1.68-1.53-4.51-3.07-8.46-4.65l-122.7-49.08 76.67-293.71c4.51-17.27-4.91-29.31-15.23-34.83-10.32-5.5-25.54-6.64-37.41 6.7z"
                  fill="#000007" p-id="27213"></path>
            </svg>
            <div style="width: 18px">
              <el-slider ref="lightning1" v-model="store.state.form.num" :show-tooltip="false"></el-slider>
            </div>
          </div>
          <div class="r_box"></div>
        </div>
      </div>
    </div>

    <div class="lowerPart">
      <!--      信息区域-->
      <div class="messageArea">
        <div class="balnce">
          <svg t="1673789913733" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="4835" width="40" height="35">
            <path
                d="M469.333333 682.666667v-85.333334H256v-85.333333h213.333333v-34.133333L264.533333 273.066667 328.533333 213.333333 512 396.8 695.466667 213.333333l59.733333 59.733334-200.533333 204.8v34.133333h213.333333v85.333333h-213.333333v85.333334h213.333333v85.333333h-213.333333v85.333333h-85.333334v-85.333333H256v-85.333333h213.333333z"
                fill="#000007" p-id="4836"></path>
          </svg>
          <span style="font-size: 42px;font-weight: 540">{{store.state.money}}</span>
        </div>
        <img src="@/assets/balnce.png" alt="" style="width: 328.91px;height:610px ">
      </div>
    </div>
  </div>
</template>

<script>
import {computed, onMounted, ref, watch} from "vue";
import {useStore} from "vuex";
import {dateFormat} from "@/utils/dateUtil";
import {changeXinhao} from "@/utils/changXinhao";


export default {
  name: 'XbalancePhone',
  setup() {
    const dianliang = ref(30)
    const lightning1 = ref(null)
    const store = useStore()

    function formatTooltip(val) {
      return val / 100;
    }

    //是否存电的回调
    const form = computed(() => {
      return store.state.form
    })
    watch(form, () => {
      changeXinhao(form.value.Signal)
    })
    // watch(chongdian,()=>{
    //   lightning1.value.style.background='red'
    // })
    const showbg = ref(computed(() => {
      return store.state.showbg2
    }))
    const imgData = ref(
        computed(() => {
          return store.state.userImg2[0]
        })
    )

    function removeMessage(i) {
      store.commit('removeMessage', i)
    }

    return {
      dianliang,
      formatTooltip,
      store,
      dateFormat,
      lightning1,
      imgData,
      showbg,
      removeMessage
    }
  }

}
</script>

<style scoped>
.top {
  width: 264px;
  height: 30px;
  line-height: 30px;
  background-color: #ffffff;
  padding-left: 80px;
  padding-right: 10px;
}

.lightning1 {
  position: absolute;
  z-index: 1000;
  left: 20%;
}

.box {
  margin-left: 6px;
}

.r {
  float: right;
  display: flex;
  height: 30px;
  margin: auto;
  justify-content: space-between;
}

ul {
  position: relative;
  width: 20px;
  height: 20px;
}

li {
  width: 3px;
  position: absolute;
  bottom: 0;
  border-radius: 10px;
  background: rgba(6, 6, 6, 0.5);
}

ul li:nth-child(1) {
  height: 2px;
  left: 0px;
}

ul li:nth-child(2) {
  height: 4px;
  left: 4px;
}

ul li:nth-child(3) {
  height: 6px;
  left: 8px;
}

ul li:nth-child(4) {
  height: 8px;
  left: 12px;
}

ul li:nth-child(5) {
  height: 10px;
  left: 16px;
}

/*电量*/
.dianliang {
  display: flex;
  height: 12px;
  margin: auto;
  margin-left: 6px;
}

.l_box {
  position: relative;
  width: 17px;
  height: 10px;
  border: 1.5px solid #242424;
  border-radius: 4px;
  overflow: hidden;
  vertical-align: middle;
}

.r_box {
  width: 2px;
  height: 7px;
  border-radius: 2px;
  background-color: #1d1d1d;
  margin-top: 3px;
  margin-left: 1px;
}

/deep/ .el-slider__bar {
  background: #c0bfbf;
  width: 18px;
  height: 11px;
  border-radius: 1px 2px 2px 1px;
}

/deep/ .el-slider__runway {
  background-color: #ffffff;
  height: 11px;
}

/deep/ .el-slider__button {
  display: none;
}

/deep/ .el-slider {
  height: 10px;
}

/deep/ .el-divider--horizontal {
  margin: 6px 0 0 0;
  height: 1px;
  border: none;
  background-color: #e5e5e5;
}


/*消息区*/
.messageArea {
  width: 353.91px;
  height: 620px;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 10px 15px;
  overflow: hidden;
  position: relative;
}
.balnce{
  position: absolute;
  top: 190px;
  width: 323.91px;
  text-align: center;
}



</style>

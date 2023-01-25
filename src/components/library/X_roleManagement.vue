<template>
  <div style="display: flex;width: 600px;justify-content: space-around">
    <div class="W_img">
      <div v-for="(list,index) in store.state.userImg" :key="index" style="width: 200px;">
        <img src="@/assets/img_1.png" alt="" v-if="showbg">
        <img :src="list.url" v-else>
        <span>{{ list.name }}的头像</span>
      </div>
      <div class="localImag">
        <input type="file" name="img" id="docfile1" style="width:150px;" @change="setImagePreview1('发消息',0)">
        <button @click="clickFile">修改</button>
      </div>
      <div v-for="(list,index) in store.state.userImg1" :key="index">
        <img src="@/assets/img.png" alt="" v-if="showbg1">
        <img :src="list.url" v-else>
        <span>{{ list.name }}的头像</span>
      </div>
      <div class="localImag">
        <input type="file" name="img" id="docfile" style="width:150px;" @change="setImagePreview('发消息',0)">
        <button @click="clickFile1">修改</button>
      </div>
    </div>
    <div class="bg_img">
      <div v-for="(list,index) in store.state.userImg2" :key="index" class="bg_img">
        <img :src="list.url" v-show="showbg2">
        <span>{{ list.name }}</span>
      </div>
      <div class="localImag">
        <input type="file" name="img" id="docfile2" style="width:150px;" @change="setImagePreview2('发消息',0)">
        <button @click="clickFile2">{{store.state.userImg2[0].url===''?'添加背景':'修改背景'}}</button>
      </div>
    </div>
  </div>
</template>


<script>
import {useStore} from "vuex";
import {computed, ref, watch} from "vue";

export default {
  name: 'XroleManagement',
  setup() {
    const store = useStore()
    const showbg = ref(true)
    const showbg1 = ref(true)
    const showbg2 = ref(false)

    function setImagePreview(n, i) {
      // name.value = n
      // const name =n
      let docObj = document.getElementById("docfile");
      console.log(docObj.files[0])
      if (docObj.files && docObj.files[0]) {
        let reader = new FileReader();
        reader.readAsDataURL(docObj.files[0]);//发起异步请求
        reader.onload = function () {
          console.log(name.value)
          //读取完成后，数据保存在对象的result属性中
          // console.log(this.result)
          // imgObjPreview.src=this.result
          store.commit('addUserimg', {name: '收消息', url: this.result})
          showbg.value = false

        }
      }
    }

    function setImagePreview1(n, i) {
      // name.value = n
      // const name =n
      let docObj = document.getElementById("docfile1");
      let imgObjPreview = document.getElementById("preview");
      console.log(docObj.files[0])
      if (docObj.files && docObj.files[0]) {
        let reader = new FileReader();
        reader.readAsDataURL(docObj.files[0]);//发起异步请求
        reader.onload = function () {
          console.log(name.value)
          //读取完成后，数据保存在对象的result属性中
          // console.log(this.result)
          // imgObjPreview.src=this.result
          store.commit('addUserimg1', {name: '发消息', url: this.result})
          showbg1.value = false
        }
      }
    }

    function setImagePreview2(n, i) {
      // name.value = n
      // const name =n
      let docObj = document.getElementById("docfile2");
      let imgObjPreview = document.getElementById("preview");
      console.log(docObj.files[0])
      if (docObj.files && docObj.files[0]) {
        let reader = new FileReader();
        reader.readAsDataURL(docObj.files[0]);//发起异步请求
        reader.onload = function () {
          console.log(name.value)
          //读取完成后，数据保存在对象的result属性中
          // console.log(this.result)
          // imgObjPreview.src=this.result
          store.commit('addUserimg2', {name: '背景', url: this.result})
          showbg2.value = true
          store.commit('changeshowbg')

        }
      }
    }

    function clickFile() {
      let docObj = document.getElementById("docfile");
      docObj.click()
    }

    function clickFile1() {
      let docObj = document.getElementById("docfile1");
      docObj.click()
    }

    function clickFile2() {
      let docObj = document.getElementById("docfile2");
      docObj.click()

    }
    return {
      setImagePreview,
      setImagePreview1,
      setImagePreview2,
      store,
      clickFile,
      clickFile1,
      clickFile2,
      showbg,
      showbg1,
      showbg2
    }
  }
}
</script>

<style scoped>
/deep/ .el-upload-list--picture .el-upload-list__item-thumbnail {
  width: 350px;
}

.W_img {
  display: flex;
  flex-direction: column;
  width: 200px;
  justify-content: space-around;
}

.W_img img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  text-align: center;
  display: block;
  margin-left: 20px;
}

.W_img span {
  text-align: center;
  display: block;
  margin-top: 14px;
  color: #4f3f3f;
}

.bg_img {
  width: 260px;
  margin-top: 20px;

}

.bg_img img {
  width: 260px;
  height: 400px;
  text-align: center;
  display: block;
}

.bg_img .localImag {
  text-align: center;
  display: block;
}

.bg_img span {
  text-align: center;
  display: block;
  margin-top: 14px;
  color: #4f3f3f;
}


#docfile2, #docfile1, #docfile {
  display: none;
}

button {
  background: #288cdd;
  border: none;
  width: 200px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  color: #fde;
  border-radius: 20px;
  margin: 20px 0;
}

</style>


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
    <!--备注区域-->
    <div class="lowerPart">
      <div class="remarksColumn">
        <span><svg t="1673449058770" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="7045" width="18" height="18"><path
            d="M710.153924 8.980397L266.007127 460.692524a81.118646 81.118646 0 0 0 0.861532 114.476097l446.192936 441.050666a26.922883 26.922883 0 0 0 37.853573-38.284339L304.722232 536.884282a27.27288 27.27288 0 0 1-0.323074-38.445877L748.545955 46.726278A26.922883 26.922883 0 1 0 710.180847 9.00732z"
            fill="#000007" p-id="7046"></path></svg></span>
        <span style="font-weight: revert">{{ store.state.form.name }}</span>
        <span style="font-size: 24px"><svg style="vertical-align: -11%;" t="1673788868756" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3331" width="24" height="24"><path d="M288 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#272636" p-id="3332"></path><path d="M512 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#272636" p-id="3333"></path><path d="M736 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#272636" p-id="3334"></path></svg></span>

      </div>
      <!--      信息区域-->
      <!--      style="{backgroundImage: 'url(' + imgData + ')'-->
      <img src="@/assets/bg.png" alt="" style="position: absolute;width:353.91px ;height: 570px;z-index:1" v-if="!showbg">
      <img :src="imgData.url" alt="" style="position: absolute;width:353.91px ;height: 570px;z-index:1" v-else>

      <div class="messageArea">
        <div v-for="(list,index) in store.state.messages">
          <div class="l_message" v-show="list.id==='收消息'&&list.type==='文本'">
            <div class="one0"></div>
            <img class="img" :src="store.state.userImg[store.state.userImg.length-1].url" alt="" v-if="store.state.userImg[0].url!==''" @click="removeMessage(index)">
            <img class="img" src="@/assets/img.png" alt="" @click="removeMessage(index)" v-else>
            <div class="tex">
              <span>{{ list.tex ? list.tex :'&nbsp;&nbsp;&nbsp;&nbsp;' }}</span>
            </div>
          </div>
          <div class="r_message" v-show="list.type==='文本'&&list.id==='发消息'">
            <div class="one1"></div>
            <div class="tex">
              {{ list.tex ? list.tex :'&nbsp;&nbsp;&nbsp;&nbsp;' }}
            </div>
            <img class="img" @click="removeMessage(index)" :src="store.state.userImg1[store.state.userImg.length-1].url" alt="" v-if="store.state.userImg1[0].url!==''">
            <img class="img" src="@/assets/img_1.png" alt="" @click="removeMessage(index)" v-else>
          </div>
          <!--        红包-->
          <div class="l_message" v-show=" list.id==='收消息'&&list.type==='红包'">
            <div class="one2"></div>
            <img class="img" @click="removeMessage(index)" :src="store.state.userImg[store.state.userImg.length-1].url" alt="" v-if="store.state.userImg[0].url!==''">
            <img class="img" src="@/assets/img.png" @click="removeMessage(index)" alt="" v-else>
            <div class="hongbao">
              <div style="width: 90%;display: flex;">
                <img src="@/assets/hongbao.png" alt="" style="width: 30px;height: 35px">
                <span class="H_tex">{{ list.htex ? list.htex : '恭喜发财，大吉大利' }}</span>
              </div>
              <el-divider></el-divider>
              <span style="color: #f0f0f0;font-size: 8px">微信红包</span>
            </div>
          </div>
          <div class="r_message" v-show="list.type==='红包' &&list.id==='发消息'">
            <div class="one3"></div>
            <div class="hongbao">
              <div style="width: 90%;display: flex;">
                <img src="@/assets/hongbao.png" alt="" style="width: 30px;height: 35px">
                <span class="H_tex">{{ list.htex ? list.htex : '恭喜发财，大吉大利' }}</span>
              </div>
              <el-divider></el-divider>
              <span style="color: #f0f0f0;font-size: 8px">微信红包</span>
            </div>
            <img class="img" @click="removeMessage(index)" :src="store.state.userImg1[store.state.userImg.length-1].url" alt="" v-if="store.state.userImg1[0].url!==''">
            <img class="img" src="@/assets/img_1.png" @click="removeMessage(index)" alt="" v-else>
          </div>
          <!--        转账-->
          <div class="l_message" v-show="list.id==='收消息'&& list.type==='转账'">
            <div class="one2"></div>
            <img class="img" @click="removeMessage(index)" :src="store.state.userImg[store.state.userImg.length-1].url" alt="" v-if="store.state.userImg[0].url!==''">
            <img class="img" src="@/assets/img.png" @click="removeMessage(index)" alt="" v-else >
            <div class="hongbao">
              <div style="width: 90%;display: flex;">
                <img src="@/assets/tranfer.png" alt="" style="width: 32px;height: 32px">
                <div class="tranfer">
                  <div>
                    <svg t="1673536790543" class="icon iii" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="28274" width="20" height="20">
                      <path
                          d="M469.333333 682.666667v-85.333334H256v-85.333333h213.333333v-34.133333L264.533333 273.066667 328.533333 213.333333 512 396.8 695.466667 213.333333l59.733333 59.733334-200.533333 204.8v34.133333h213.333333v85.333333h-213.333333v85.333334h213.333333v85.333333h-213.333333v85.333333h-85.333334v-85.333333H256v-85.333333h213.333333z"
                          fill="#ffffff" p-id="28275"></path>
                    </svg>
                    <span style="color: white;font-size: 16px;">{{ list.zmoney }}.00</span>
                  </div>
                  <span class="T_tex">{{ list.ztex  ? list.ztex : '你发起了一笔转账' }}</span>
                </div>
              </div>
              <el-divider></el-divider>
              <span style="color: #f0f0f0;font-size: 8px">微信转账</span>
            </div>
          </div>
          <div class="r_message" v-show="list.type==='转账' &&list.id==='发消息'">
            <div class="one3"></div>
            <div class="hongbao">
              <div style="width: 90%;display: flex;">
                <img src="@/assets/tranfer.png" alt="" style="width: 32px;height: 32px;margin-top: 4px">
                <div class="tranfer">
                  <div>
                    <svg t="1673536790543" class="icon iii" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="28274" width="20" height="20">
                      <path
                          d="M469.333333 682.666667v-85.333334H256v-85.333333h213.333333v-34.133333L264.533333 273.066667 328.533333 213.333333 512 396.8 695.466667 213.333333l59.733333 59.733334-200.533333 204.8v34.133333h213.333333v85.333333h-213.333333v85.333334h213.333333v85.333333h-213.333333v85.333333h-85.333334v-85.333333H256v-85.333333h213.333333z"
                          fill="#ffffff" p-id="28275"></path>
                    </svg>
                    <span style="color: white;font-size: 16px;">{{ list.zmoney }}.00</span>
                  </div>
                  <span class="T_tex">{{ list.ztex ? list.ztex : '你发起了一笔转账' }}</span>
                </div>
              </div>
              <el-divider></el-divider>
              <span style="color: #f0f0f0;font-size: 8px">微信转账</span>
            </div>
            <img class="img" @click="removeMessage(index)" :src="store.state.userImg1[store.state.userImg.length-1].url" alt="" v-if="store.state.userImg1[0].url!==''">
            <img class="img" src="@/assets/img_1.png" alt="" @click="removeMessage(index)" v-else>
          </div>
<!--          视频消息-->
          <div class="l_message" v-show="list.id==='收消息'&& list.type==='视频'">
            <div class="one0"></div>
            <img class="img" @click="removeMessage(index)" :src="store.state.userImg[store.state.userImg.length-1].url" alt="" v-if="store.state.userImg[0].url!==''">
            <img class="img" src="@/assets/img.png" alt="" @click="removeMessage(index)" v-else>
            <div class="tex">
              <span>
                <svg style="vertical-align: -10%;" t="1673775614172" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3466" width="16" height="16"><path d="M960 192h-28.384c-16.8 0-32.928 6.624-44.928 18.432L800 295.936V256a96 96 0 0 0-96-96H96C43.072 160 0 203.04 0 256v512a96 96 0 0 0 96 96h608c52.992 0 96-43.008 96-96v-39.072l86.688 85.504c12 11.808 28.128 18.432 44.928 18.432H960a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64zM96 800c-17.664 0-32-14.368-32-32V256a32 32 0 0 1 32-32h608c17.632 0 32 14.336 32 32v512c0 17.632-14.368 32-32 32H96z m864-31.136h-32l-128-128V640l-32-32v-192l160-160h32v512.864z" fill="#333333" p-id="3467"></path></svg>
              </span>
              <span style="margin-left: 6px">
                {{list.region}}
              </span>
              <span v-show="list.region==='通话时长'" style="margin-right: 4px">
                {{list.date3 }}
              </span>
            </div>
          </div>
          <div class="r_message" v-show="list.type==='视频' &&list.id==='发消息'">
            <div class="one1"></div>
            <div class="tex">
              <span style="margin-right: 4px">
                {{list.region}}
              </span>
              <span v-show="list.region==='通话时长'" style="margin-right: 6px">
                {{list.date3 }}
              </span>
              <span>
                <svg style="vertical-align: -10%;transform: rotate(180deg)" t="1673775614172" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3466" width="16" height="16"><path d="M960 192h-28.384c-16.8 0-32.928 6.624-44.928 18.432L800 295.936V256a96 96 0 0 0-96-96H96C43.072 160 0 203.04 0 256v512a96 96 0 0 0 96 96h608c52.992 0 96-43.008 96-96v-39.072l86.688 85.504c12 11.808 28.128 18.432 44.928 18.432H960a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64zM96 800c-17.664 0-32-14.368-32-32V256a32 32 0 0 1 32-32h608c17.632 0 32 14.336 32 32v512c0 17.632-14.368 32-32 32H96z m864-31.136h-32l-128-128V640l-32-32v-192l160-160h32v512.864z" fill="#333333" p-id="3467"></path></svg>
              </span>
            </div>
            <img class="img" @click="removeMessage(index)" :src="store.state.userImg1[store.state.userImg.length-1].url" alt="" v-if="store.state.userImg1[0].url!==''">
            <img class="img" src="@/assets/img_1.png" alt="" @click="removeMessage(index)" v-else>
          </div>
<!--          语音消息-->
          <div class="l_message" v-show="list.id==='收消息'&& list.type==='语音'">
            <div class="one0"></div>
            <img class="img" @click="removeMessage(index)" :src="store.state.userImg[store.state.userImg.length-1].url" alt="" v-if="store.state.userImg[0].url!==''">
            <img class="img" src="@/assets/img.png" alt="" @click="removeMessage(index)" v-else>
            <div class="tex">
              <span>
                <svg style="vertical-align: -10%;" t="1673782479758" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8778" width="16" height="16"><path d="M982.666667 505.946667c-25.446667-32.82-61.526667-62.1-107.22-87.026667C783.693333 368.886667 662.206667 341.333333 533.333333 341.333333s-250.36 27.553333-342.086666 77.586667C145.553333 443.846667 109.473333 473.126667 84 505.946667 56.58 541.333333 42.666667 579.26 42.666667 618.666667v53.333333a53.393333 53.393333 0 0 0 53.333333 53.333333h234.666667a53.393333 53.393333 0 0 0 53.333333-53.333333v-53.333333c0-30.213333 63.866667-64 149.333333-64s149.333333 33.786667 149.333334 64v53.333333a53.393333 53.393333 0 0 0 53.333333 53.333333h234.666667a53.393333 53.393333 0 0 0 53.333333-53.333333v-53.333333c0-39.406667-13.913333-77.333333-41.333333-112.72z m-1.333334 166.053333a10.666667 10.666667 0 0 1-10.666666 10.666667h-234.666667a10.666667 10.666667 0 0 1-10.666667-10.666667v-53.333333c0-31.293333-21.94-59.5-61.78-79.42C628.413333 521.673333 582.166667 512 533.333333 512s-95.08 9.673333-130.22 27.246667C363.273333 559.166667 341.333333 587.373333 341.333333 618.666667v53.333333a10.666667 10.666667 0 0 1-10.666666 10.666667H96a10.666667 10.666667 0 0 1-10.666667-10.666667v-53.333333c0-60.213333 44.873333-117.846667 126.346667-162.293334C297.246667 409.706667 411.48 384 533.333333 384s236.086667 25.706667 321.653334 72.373333C936.46 500.82 981.333333 558.453333 981.333333 618.666667z" fill="#5C5C66" p-id="8779"></path></svg>
              </span>
              <span style="margin-left: 6px">
                {{list.region}}
              </span>
              <span v-show="list.region==='通话时长'" style="margin-right: 4px">
                {{list.date3 }}
              </span>
            </div>
          </div>
          <div class="r_message" v-show="list.type==='语音' &&list.id==='发消息'">
            <div class="one1"></div>
            <div class="tex">
              <span style="margin-right: 4px">
                {{list.region}}
              </span>
              <span v-show="list.region==='通话时长'" style="margin-right: 6px">
                {{list.date3 }}
              </span>
              <span>
                    <svg style="vertical-align: -10%;" t="1673782479758" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8778" width="16" height="16"><path d="M982.666667 505.946667c-25.446667-32.82-61.526667-62.1-107.22-87.026667C783.693333 368.886667 662.206667 341.333333 533.333333 341.333333s-250.36 27.553333-342.086666 77.586667C145.553333 443.846667 109.473333 473.126667 84 505.946667 56.58 541.333333 42.666667 579.26 42.666667 618.666667v53.333333a53.393333 53.393333 0 0 0 53.333333 53.333333h234.666667a53.393333 53.393333 0 0 0 53.333333-53.333333v-53.333333c0-30.213333 63.866667-64 149.333333-64s149.333333 33.786667 149.333334 64v53.333333a53.393333 53.393333 0 0 0 53.333333 53.333333h234.666667a53.393333 53.393333 0 0 0 53.333333-53.333333v-53.333333c0-39.406667-13.913333-77.333333-41.333333-112.72z m-1.333334 166.053333a10.666667 10.666667 0 0 1-10.666666 10.666667h-234.666667a10.666667 10.666667 0 0 1-10.666667-10.666667v-53.333333c0-31.293333-21.94-59.5-61.78-79.42C628.413333 521.673333 582.166667 512 533.333333 512s-95.08 9.673333-130.22 27.246667C363.273333 559.166667 341.333333 587.373333 341.333333 618.666667v53.333333a10.666667 10.666667 0 0 1-10.666666 10.666667H96a10.666667 10.666667 0 0 1-10.666667-10.666667v-53.333333c0-60.213333 44.873333-117.846667 126.346667-162.293334C297.246667 409.706667 411.48 384 533.333333 384s236.086667 25.706667 321.653334 72.373333C936.46 500.82 981.333333 558.453333 981.333333 618.666667z" fill="#5C5C66" p-id="8779"></path></svg>
              </span>
            </div>
            <img class="img" @click="removeMessage(index)" :src="store.state.userImg1[store.state.userImg.length-1].url" alt="" v-if="store.state.userImg1[0].url!==''">
            <img class="img" src="@/assets/img_1.png" @click="removeMessage(index)" alt="" v-else>
          </div>
        </div>

      </div>
      <!--发送消息-->
      <div class="sendMessage">
        <voice-message style="margin-top: 3px" theme="outline" size="26" fill="#202020" strokeLinejoin="bevel"
                       strokeLinecap="square"/>
        <div><input type="text"
                    style="background-color: #ffffff;border: none;width: 230px;height: 34px;border-radius: 3px">
        </div>
        <div style="margin-top: 2px;height: 26px;width: 26px;overflow: hidden">
          <img style="width: 28px;height: 28px" src="@/assets/emoji.png" alt="">
        </div>
        <add-one style="margin-top: 3px" theme="outline" size="26" fill="#202020" strokeLinejoin="bevel"
                 strokeLinecap="square"/>
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
  name: 'XchatPhone',
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
    const showbg=ref(computed(()=>{
      return store.state.showbg2
    }))
    const imgData = ref(
        computed(()=>{
          return store.state.userImg2[0]
        })
    )
    function removeMessage(i){
      store.commit('removeMessage',i)
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
  background-color: #ededed;
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

.iii {
  vertical-align: -13%;
}

/*备注栏*/
.remarksColumn {
  height: 40px;
  width: 323.91px;
  line-height: 40px;
  background-color: #ededed;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
}

/*消息区*/
.messageArea {
  width: 353.91px;
  height: 570px;
  background-color: #916d6d;
  box-sizing: border-box;
  padding: 10px 15px;
  overflow: auto;
}

.l_message, .r_message {
  width: 100%;
  margin: 7px 0;
  display: flex;
  position: relative;
  z-index: 100;

}

.l_message .img,.r_message .img{
  width: 35px;
  height: 35px;
  border-radius: 4px;
}

.l_message {
  float: left;

}

.r_message {
  float: right;
  /*right:-180px;*/
  justify-content: right;
}

.l_message .tex {
  max-width: 63%;
  margin-left: 10px;
  border-radius: 4px;
  background-color: white;
  /*//设置文字换行*/
  white-space: normal;
  /*//设置数字强制换行*/
  word-wrap: break-word;
  padding: 6px 7px;
}

.l_message .hongbao {
  width: 52%;
  height: 60px;
  margin-left: 30px;
  padding: 8px;
  border-radius: 3px;
  background-color: #fa9c3e;
}

.r_message .hongbao {
  width: 52%;
  height: 60px;
  margin-right: 30px;
  padding: 8px;
  border-radius: 3px;
  background-color: #fa9c3e;
}

.r_message .tex {
  max-width: 63%;
  margin-right: 10px;
  border-radius: 4px;
  background-color: #95ec69;
  /*//设置文字换行*/
  white-space: normal;
  /*//设置数字强制换行*/
  word-wrap: break-word;
  padding: 6px 7px;
}

.H_tex {
  font-size: 16px;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 14px;
  margin-top: 10px;
}

.one0 {
  width: 0;
  height: 0;
  border: 5px solid #ffffff;
  border-color: transparent #ffffff transparent transparent;
  /*绝对位置*/
  position: absolute;
  /*将小三角形向下移90个像素*/
  top: 14px;
  /*将小三角形向右移10个像素*/
  left: 36px;
}

.one2 {
  width: 0;
  height: 0;
  border: 5px solid #fa9c3e;
  border-color: transparent #fa9c3e transparent transparent;
  /*绝对位置*/
  position: absolute;
  /*将小三角形向下移90个像素*/
  top: 14px;
  /*将小三角形向右移10个像素*/
  left: 56px;
}

.one1 {
  width: 0;
  height: 0;
  border: 5px solid #95ec69;
  border-color: transparent transparent transparent #95ec69;
  z-index: 1000;
  /*绝对位置*/
  position: absolute;
  /*将小三角形向下移90个像素*/
  top: 14px;
  /*将小三角形向右移10个像素*/
  right: 36px;
}

.one3 {
  width: 0;
  height: 0;
  border: 5px solid #fa9c3e;
  border-color: transparent transparent transparent #fa9c3e;
  z-index: 1000;
  /*绝对位置*/
  position: absolute;
  /*将小三角形向下移90个像素*/
  top: 14px;
  /*将小三角形向右移10个像素*/
  right: 56px;
}

.tranfer {
  display: flex;
  flex-direction: column;
  margin-left: 8px;
}

.T_tex {
  font-size: 12px;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/*发送消息*/
.sendMessage {
  display: flex;
  justify-content: space-around;
  width: 353.91px;
  height: 40px;
  padding-top: 10px;
  background-color: #f0f0f0;
}

.messageArea::-webkit-scrollbar {
  width: 0px;
}

.messageArea::-webkit-scrollbar-track {
  background-color: none;
}

.messageArea::-webkit-scrollbar-thumb {
  background-color: none;
}

.messageArea::-webkit-scrollbar-thumb:hover {
  background-color: none;
}

.messageArea::-webkit-scrollbar-thumb:active {
  background-color: none;
}
</style>

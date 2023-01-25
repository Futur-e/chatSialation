import {createStore} from "vuex";
import {dateFormat} from "@/utils/dateUtil";

export default createStore({
    state:{
        form:{
            name: '张张',
            date:'Thu Jan 12 2023 15:04:43 GMT+0800 (中国标准时间)',
            card: false,
            Signal:'',
            wifi:false,
            region: '',
            type: '',
            bluetooth:false,
            Electricity:false,
            num: 30
        },
        transfer:{},
        messages:[],
        userImg:[{
            name:'收消息',
            url:''
        }],
        userImg1:[
            {
                name:'发消息',
                url:''
            }
        ],
        userImg2:[
            {
                name:'背景',
                url:''
            }
        ],
        // 余额
        money:'',
        showbg2:false
    },
    mutations:{
        modifyForm(state,form){
            state.form = form
        },
        addMessages(state,messags){
          state.messages.push(messags)
        },
        addUserimg(state,img){
            state.userImg.splice(0,1,img)
        },
        addUserimg1(state,img){
            state.userImg1.splice(0,1,img)
        },
        addUserimg2(state,img){
            state.userImg2.splice(0,1,img)
        },
        changeshowbg(state){
            state.showbg2= true
        },
        // 移除某一条消息
        removeMessage(state,i){
            state.messages.splice(i,1)
        },
        addTransfers(state,transfer){
state.transfer=transfer
        },
        changeMoney(state,money){
            state.money=money
        }
    },
    actions:{

    }
})


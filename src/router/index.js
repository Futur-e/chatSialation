import { createRouter, createWebHashHistory } from 'vue-router'
import home from "@/views/home/home";
import HomePage from "@/views/index";
import weChat from "@/views/WeChat/weChat";
import QQchat from "@/views/QQ/QQchat";




const routes = [
    {path: '/',redirect:'/homepage'},
    {path: '/homepage',redirect:'/home'},
    {
        path: '/homepage',component:HomePage,

        children:[
            {path: '/home',component:home},
            {path: '/weChat',component:weChat},
            {path: '/qqChat',component:QQchat},

        ]
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

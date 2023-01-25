import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import ui from './components/library'
import 'element-plus/dist/index.css'
import { IconPark } from '@/plugins/iconPark'
import * as ElIcons from '@element-plus/icons'
import router from "@/router";
import store from './store'
import $ from 'jquery'
const app = createApp(App)
IconPark(app)
for (const name in ElIcons){
    // app.component(name,(ElIcons as any)[name])
    app.component(name,(ElIcons)[name])
}

app.use(ElementPlus).use(ui).use(router).use(store)
app.mount('#app')

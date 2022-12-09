import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from "@/router";
import basePlugin from "plugins/basePlugin";
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App)
    .use(pinia)
    .use(Antd)
    .use(router)
    .use(basePlugin)
    .mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import {createStore} from "vuex";

const store = createStore({
    state: {
        user: {
            type: '',
            name: ''
        }
    },
    mutations: {
        commitUser(state, info) {
            state.type = info.type;
            state.name = info.name
        }
    }
})

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.config.globalProperties.$axios = axios;
app.use(store);
require('./mock');
app.mount('#app')

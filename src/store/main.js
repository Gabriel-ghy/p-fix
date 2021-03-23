import {createApp} from 'vue';
import { createStore } from 'vuex'
import App from "@/App";

const app = createApp(App)

const store = createStore({
    state: {
        token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
    },
    mutations: {
        setToken (token) {
            this.state.token =token;
            localStorage.setItem("token",token.token);     //存储token
        },
        delToken (state) {
            state.token = '';
            localStorage.removeItem("token");    //删除token
        }
    }
})
app.use(store);
export default store;

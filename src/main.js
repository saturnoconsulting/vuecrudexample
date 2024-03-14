import { createApp } from 'vue'
import router from "./router/router"
import store from "./store/store"
import App from './App.vue'
import './interceptors/axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from 'bootstrap-vue-3';


createApp(App).use(store).use(router).use(BootstrapVue).mount("#app")


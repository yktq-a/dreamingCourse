import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios' 
import qs from 'qs'
import { Swipe, SwipeItem } from "mint-ui";
import 'mint-ui/lib/swipe/style.css'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.prototype.$ajax = axios;
Vue.prototype.$qs = qs;

new Vue({
    el:"#app",
    components:{App},
    template:'<App/>',
    router
})


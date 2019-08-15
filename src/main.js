import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Swipe, SwipeItem } from "mint-ui";
import 'mint-ui/lib/swipe/style.css'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

new Vue({
    el:"#app",
    components:{App},
    template:'<App/>',
    router
})


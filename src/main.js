// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import '../static/common.css'
import '../static/fonts/fonts.css'

//引入mint-ui
import { Swipe, SwipeItem } from "mint-ui";
import 'mint-ui/lib/swipe/style.css'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.prototype.$axios = axios
Vue.prototype.$qs = qs

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el:"#app",
  components:{App},
  template:'<App/>',
  router
})


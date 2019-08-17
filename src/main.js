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

import Vuex from "vuex"
Vue.use(Vuex)
//获取本地存储中的car中的数据
// var car = JSON.parse(localStorage.getItem('car') || '[]')
// var store = new Vuex({
//   state: {
//     car: car
//   },
//   mutations: {
//     addToCar() {
//       var flag = false
//       state.car.some(item => {
//         if (item.id == goodsinfo.id) {
//           //弹出购物车已存在窗口
//           flag = true
//           return true
//         }
//       })
//       if (!flag) {
//         state.car.push(goodsinfo)
//       }
//       //更新完car存到本地存储localStorage
//       localStorage.setItem('car', JSON.stringify(state.car))
//     }
//   }
// })

Vue.config.productionTip = false

//定义全局的时间格式过滤器
Vue.filter("dateFormat", function (datestr, pattern) {
  let dt = new Date(datestr);
  let y = dt.getFullYear();
  let m = dt.getMonth() + 1;
  let d = dt.getDate();
  let hh = dt.getHours();
  let mm = dt.getMinutes();
  let ss = dt.getSeconds();
  if (pattern.toLowerCase() === 'yyyy-mm-dd') {
    return `${y}-${toZeroPadding(m)}-${toZeroPadding(d)}`
  } else if (pattern.toLowerCase() === 'hh:mm:ss') {
    return `${toZeroPadding(hh)}:${toZeroPadding(mm)}:${toZeroPadding(ss)}`
  } else {
    return `${y}-${toZeroPadding(m)}-${toZeroPadding(d)} ${toZeroPadding(hh)}:${toZeroPadding(mm)}:${toZeroPadding(ss)}`
  }
  function toZeroPadding(time) {
    return time < 10 ? '0' + time : '' + time;
  }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})



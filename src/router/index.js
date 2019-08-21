import Vue from 'vue'
import VueRouter from 'vue-router'
import admin from '../pages/admin/admin.vue'
import courseSort from '../pages/courseSort/courseSort.vue'
import homePage from '../pages/homePage/homePage.vue'
import myStudies from '../pages/myStudies/myStudies.vue'
import courseSystems from '../pages/courseDetails/courseSystems.vue'
import comment from '../pages/order/comment.vue'
import order from '../pages/order/order.vue'
import search from '../components/search.vue'
import sortDetailed from '../pages/courseSort/sortDetailed.vue'
import shoppingCart from '../components/shoppingCart.vue'
import confirmBuy from '../pages/order/confirmBuy.vue'
import login from '../components/login.vue'
import orderDetails from '../pages/order/orderDetails.vue'
/* import videos from '../pages/courseDetails/videos.vue' */
import registration from '../components/registration.vue'
import spikeCourseSystems from '../components/spikeCourseSystems.vue'
Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {
            path:'/admin',
            component: admin
        },
        {
            path:'/courseSort',
            component: courseSort
        },
        {
            path:'/homePage',
            component: homePage
        },
        {
            path:'/myStudies',
            component: myStudies
        },
        {
            path:'/',
            redirect:'/homePage'
        },
        {
            path:'/courseSystems',
            component: courseSystems,
             /* children:[
                {
                    path:'videos/:id',
                    component:videos
                }, 
            ]  */ 
        }, 
        {
            path:'/comment',
            component: comment
        },
        {
            path:'/order',
            component:order
        },
        {
            path:'/search',
            component:search
        },
        {
            path:'/sortDetailed',
            component:sortDetailed
        },
        {
            path:'/shoppingCart',
            component:shoppingCart
        },
        {
            path:'/confirmBuy',
            component:confirmBuy
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/orderDetails',
            component:orderDetails
        },
        {
            path:'/registration',
            component:registration
        },
        {
            path:'/spikeCourseSystems',
            component:spikeCourseSystems
        }
    ]
})
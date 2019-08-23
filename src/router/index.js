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
import orderDetails from '../pages/order/orderDetails.vue'
/* import videos from '../pages/courseDetails/videos.vue' */
import spikeCourseSystems from '../components/spikeCourseSystems.vue'

//常见问题
import problem from '../components/commonProblem'
//关于我们
import about from '../components/aboutUs'
//公告详情
import announcementDetails from '../components/announcementDetails'
//课程推荐
import courseRecommendation from '../components/courseRecommendation'
//我的学习和最近学习
import myCourses from '../pages/myStudies/myCourses'
import learningRecord from '../pages/myStudies/learningRecord'
import setting from '../components/setting.vue'

//登录注册模块
import login from '../components/register/login.vue'
import registration from '../components/register/registration.vue'
import agreement from '../components/register/agreement.vue'
import notelogin from '../components/register/notelogin.vue'
import forgetpassword from '../components/register/forgetpassword.vue'
import newpassword from '../components/register/newpassword.vue'
import result from '../components/register/result.vue'
import inputusername from '../components/register/inputusername.vue'

Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {
            path: '/admin',
            component: admin
        },
        {
            path: '/courseSort',
            component: courseSort
        },
        {
            path: '/homePage',
            component: homePage
        },
        {
            path: '/',
            redirect: '/homePage'
        },
        {
            path: '/courseSystems',
            component: courseSystems,
            /* children:[
               {
                   path:'videos/:id',
                   component:videos
               }, 
           ]  */
        },
        {
            path: '/comment',
            component: comment
        },
        {
            path: '/order',
            component: order
        },
        {
            path: '/search',
            component: search
        },
        {
            path: '/sortDetailed',
            component: sortDetailed
        },
        {
            path: '/shoppingCart',
            component: shoppingCart
        },
        {
            path: '/confirmBuy',
            component: confirmBuy
        },
        {
            path: '/orderDetails',
            component: orderDetails
        },


        //登录注册模块
        {
            path: '/login',
            component: login
        },
        {
            path: '/registration',
            component: registration
        },
        {
            path: '/agreement',
            component: agreement,
        },
        {
            path: '/notelogin',
            component: notelogin,
        },
        {
            path: '/forgetpassword',
            component: forgetpassword,
        },
        {
            path: '/newpassword',
            component: newpassword,
        },
        {
            path: '/result',
            component: result,
        },
        {
            path: '/inputusername',
            component: inputusername
        },

        {
            path: '/spikeCourseSystems',
            component: spikeCourseSystems
        },
        {
            path: '/homePage/announcementDetails',
            component: announcementDetails
        },
        {
            path: '/homePage/spikeCourseSystems',
            component: spikeCourseSystems
        },
        {
            path: '/homePage/courseRecommendation',
            component: courseRecommendation
        },
        {
            path: '/myStudies',
            component: myStudies,
            children: [//配置 我的学习 页面的子路由
                {
                    path: '/',
                    component: myCourses,
                },
                {
                    path: 'myCourses',
                    component: myCourses,
                },
                {
                    path: 'learningRecord',
                    component: learningRecord,
                }
            ]
        },
        {
            path: '/admin/shoppingCart',
            component: shoppingCart,
            name: 'shoppingCart'
        },
        {
            path: '/admin/setting',
            component: setting,
            name: 'setting'
        },
        {
            path: '/admin/setting/about',
            component: about,
            name: 'about'
        },
        {
            path: '/admin/problem',
            component: problem,
            name: 'problem',
        },
        {
            path: '/courseSort/sortDetailed',
            component: sortDetailed,
            name: 'sortDetailed'
        },

        {
            path: '/homePage/announcementDetails',
            component: announcementDetails
        },
        {
            path: '/homePage/spikeCourseSystems',
            component: spikeCourseSystems
        },
        {
            path: '/homePage/courseRecommendation',
            component: courseRecommendation
        }
    ]
})
import Vue from 'vue'
import Router from 'vue-router'

//footer的四个菜单路由配置
import admin from '../pages/admin/admin.vue'
import courseSort from '../pages/courseSort/courseSort.vue'
import homePage from '../pages/homePage/homePage.vue'
import myStudies from '../pages/myStudies/myStudies.vue'

//购物车
import shoppingCart from '@/components/shoppingCart'
//设置
import setting from '@/components/setting'
//搜索
import search from '@/components/search'

import sortDetailed from '../pages/courseSort/sortDetailed'
//常见问题
import problem from '../components/commonProblem'
//关于我们
import about from '../components/aboutUs'
//公告详情
import announcementDetails from '../components/announcementDetails'
//秒杀课程详情
import spikeCourseSystems from '../components/spikeCourseSystems'
//课程推荐
import courseRecommendation from '../components/courseRecommendation'

import myCourses from '../pages/myStudies/myCourses'
import learningRecord from '../pages/myStudies/learningRecord'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homePage'
    },
    {
      path: '/admin',
      component: admin,
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
      path: '/search',
      component: search
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
    }
  ]
})





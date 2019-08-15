<template>
  <div class="my-studies">
    <!-- 上部分 -->
    <div class="my-studies-top" @scroll="watchscroll">
      <div class="head">
        <div class="study-avatar" @click="goLogin">
          <img src="../../../static/imgs/未登录头像.png" alt />
        </div>
        <p @click="goLogin">点击登录</p>
        <!-- 中间部分 -->
        <div class="study-content">
          <div class="study-tab" :class="{navBarWrap: navBarFixed}">
            <!-- <router-link
              tag="span"
              :class="{tab_active: '/myStudies/myCourses'===$route.path}"
              to="/myStudies/myCourses"
            >我的课程</router-link>
            <router-link
              tag="span"
              :class="{tab_active: '/myStudies/learningRecord'===$route.path}"
              to="/myStudies/learningRecord"
            >最近学习</router-link> -->

            <span :class="{tab_active: this.flagCourses == 1}" @click="changeCoursesTab(1)">我的课程</span>
            <span :class="{tab_active: this.flagCourses == 2}" @click="changeCoursesTab(2)">最近学习</span>
          </div>
          <!-- 子组件 -->
          <template>
            <!-- <router-view :navBarFixedChild="navBarFixed"></router-view> -->
            <child1 v-show="this.flagCourses == 1" :childMsg="navBarFixed"></child1>
            <child2 v-show="this.flagCourses == 2" :childMsg="navBarFixed"></child2>
          </template>
        </div>
      </div>
    </div>

    <footerGuide></footerGuide>
  </div>
</template>

<script>
import footerGuide from "../../components/footerGuide";
//两个子组件
import child1 from "../myStudies/myCourses"
import child2 from "../myStudies/learningRecord"

export default {
  data() {
    return {
      navBarFixed: false,
      flagCourses: 1,
    };
  },
  components: {
    footerGuide,
    child1,
    child2
  },
  methods: {
    goLogin(){
      this.$router.push({
        path:'/login'
      });
    },
    watchscroll(e) {
      //滚动的像素+容器的高度>可滚动的总高度-100像素
      //    console.log(e.srcElement.scrollTop);
      if (e.srcElement.scrollTop > 200
        // e.srcElement.scrollTop + e.srcElement.offsetHeight >
        // e.srcElement.scrollHeight - 100
      ) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    },
    changeCoursesTab(i){
      this.flagCourses = i;
    }
  },
  // mounted() {
    // 事件监听滚动条
    // window.addEventListener("touchmove", this.watchScroll);
  // }
};
</script>

<style lang="scss">
.navBarWrap {
  position: fixed;
  top: 0;
  z-index: 999;
}

.my-studies-top {
  position: absolute;
  top: 0;
  bottom: 1.570048rem;
  overflow: auto;
}
.my-studies .head {
  width: 100%;
  height: 4.830918rem;
  background-color: #8399c7;
  padding-top: 0.483092rem;
  text-align: center;
  p {
    display: inline-block;
    font-size: 0.483092rem;
    color: #111;
    margin: 0.724638rem auto;
  }
}
.study-avatar {
  width: 2.415459rem;
  height: 2.415459rem;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 auto;
}
.study-avatar img {
  width: 2.415459rem;
  height: 2.415459rem;
}
.study-content {
  width: 100%;
  .study-tab {
    width: 100%;
    // margin: 0.241546rem 0;
    background-color: #fff;
    height: 1.111111rem;;
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
      font-size: 0.483092rem;
      height: 0.628019rem;
      line-height: 0.628019rem;
    }
    .tab_active {
      border-bottom: 0.048309rem solid yellowgreen;
      color: #f24836;
      font-weight: 500;
    }
  }
  .study-slider {
    width: 56%;
    height: 0.144928rem;
    background-color: pink;
    margin: 0 auto;
  }
}
</style>


<template>
  <div>
    <!-- 首页搜索头部 -->
    <div class="homepage-head" @click="toSearch">
      <div class="homepage-search-bar">
        <input class="homepage-input" type="text" placeholder="javascript Web前端" />
      </div>
      <span class="iconfont">&#xe68f;</span>
    </div>

    <!-- 中间内容 -->
    <div class="home-content">
      <!-- 轮播图 -->
      <mt-swipe :auto="2500">
        <mt-swipe-item v-for="(item,index) in banner" :key="index">
           <img :src="item" alt />
        </mt-swipe-item>
      </mt-swipe>
   

      <!-- 轮播公告 -->
      <div class="broadcast">
        <span class="iconfont">&#xe87a;</span>
        <ul class="broadcast-lists">
          <li
            v-for="(item,index) in broadcastContent"
            :key="index"
            :class="{broadcast_top:animate}"
          >{{item}}</li>
        </ul>
        <span class="iconfont">&#xe601;</span>
      </div>

      <!-- 秒杀专区 -->
      <div class="spike">
        <div class="spike-title">限时秒杀</div>
        <div class="period">
          <ul>
            <li @click="jump(0)" :class="{periodactive:this.timeIndex==0}">10:00开始</li>
            <li @click="jump(1)" :class="{periodactive:this.timeIndex==1}">16:00开始</li>
            <li @click="jump(2)" :class="{periodactive:this.timeIndex==2}">20:00开始</li>
          </ul>
        </div>
        <div class="countdown-module">
          <span>抢购中~不要错过!</span>
          <div class="countdown">
            <h4>倒计时&nbsp;</h4>
            <span>00</span>:
            <span>00</span>:
            <span>00</span>
          </div>
        </div>
        <div class="spike-course">
          <ol class="clearfix spike-animate" :style="containerStyle">
            <li class="all-spike-course start-ten">
              <ul>
                <li v-for="(item,index) in actualScourse" :key="index" @click="goCourseSystems">
                  <img :src="item.img" alt />
                  <div class="spike-course-detailed">
                    <h4>{{item.name}}</h4>
                    <span>￥1 {{item.price}}</span>
                    <span>限量: {{item.limited}}</span>
                    <div class="panic-buying"></div>
                  </div>
                </li>
              </ul>
            </li>
            <li class="all-spike-course start-fourteen">
              <ul>
                <li v-for="(item,index) in actualScourse" :key="index">
                  <img :src="item.img" alt />
                  <div class="spike-course-detailed">
                    <h4>{{item.name}}</h4>
                    <span>
                      ￥2 {{item.price}}
                      <del>￥ 99.99</del>
                    </span>
                    <span>限量: {{item.limited}}</span>
                    <div class="panic-buying"></div>
                  </div>
                </li>
              </ul>
            </li>
            <li class="all-spike-course start-twenty">
              <ul>
                <li v-for="(item,index) in actualScourse" :key="index">
                  <img :src="item.img" alt />
                  <div class="spike-course-detailed">
                    <h4>{{item.name}}</h4>
                    <span>￥3 {{item.price}}</span>
                    <span>限量: {{item.limited}}</span>
                    <div class="panic-buying"></div>
                  </div>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

      <!-- 推荐专区 -->
      <div class="recommend">
        <div class="recommed-title">
          <span>课程推荐</span>
          <span>查看更多>></span>
        </div>
        <div class="recommed-course">
          <ul>
            <li v-for="(item,index) in recommedCourse" :key="index">
              <img :src="item.img" alt />
              <h4>{{item.name}}</h4>
              <span>{{item.detailed}}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 实战推荐 -->
      <div class="actual-combat">
        <div class="actual-combat-title">实战推荐</div>
        <div class="actual-combat-course">
          <ul>
            <li v-for="(item,index) in actualScourse" :key="index">
              <img :src="item.img" alt />
              <div class="actual-combat-course-detailed">
                <h4>{{item.name}}</h4>
                <span>讲师: {{item.teacher}}</span>
                <span>￥ {{item.price}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <footerGuide></footerGuide>
  </div>
</template>

<script>
import footerGuide from "../../components/footerGuide";



export default {
  data() {
    const that = this;
    return {
      animate: false,
      banner: [
        "../../../static/imgs/slideshow1.png",
        "../../../static/imgs/slideshow2.png",
        "../../../static/imgs/slideshow3.png",
        "../../../static/imgs/slideshow4.png"
      ],
      //广播数据
      broadcastContent: [
        "新人礼包大放送",
        "微信小程序专栏上新啦!",
        "开启你的暑期猿计划!"
      ],
      recommedCourse: [
        {
          name: "微信小程序入门",
          img: "../../../static/imgs/course1.jpg",
          detailed:
            "来自筑梦云课堂的大牛教你玩转微信小程序，名额有限，点击即看。"
        },
        {
          name: "微信小程序入门",
          img: "../../../static/imgs/course1.jpg",
          detailed:
            "来自筑梦云课堂的大牛教你玩转微信小程序，名额有限，点击即看。"
        },
        {
          name: "微信小程序入门",
          img: "../../../static/imgs/course1.jpg",
          detailed:
            "来自筑梦云课堂的大牛教你玩转微信小程序，名额有限，点击即看。"
        },
        {
          name: "微信小程序入门",
          img: "../../../static/imgs/course1.jpg",
          detailed:
            "来自筑梦云课堂的大牛教你玩转微信小程序，名额有限，点击即看。"
        }
      ],
      actualScourse: [
        {
          name: "Python3入门+进阶课程 小黑也能听懂",
          price: "199",
          limited: 100,
          img: "../../../static/imgs/actualcourse1.jpg",
          detailed: "全面系统Python3入门+进阶课程 零基础学Python 小黑也能听懂"
        },
        {
          name: "Python3入门+进阶课程 小黑也能听懂",
          price: "299",
          limited: 100,
          img: "../../../static/imgs/actualcourse1.jpg",
          detailed: "全面系统Python3入门+进阶课程 零基础学Python 小黑也能听懂"
        },
        {
          name: "Python3入门+进阶课程 小黑也能听懂",
          price: "399",
          limited: 100,
          img: "../../../static/imgs/actualcourse1.jpg",
          detailed: "全面系统Python3入门+进阶课程 零基础学Python 小黑也能听懂"
        },
        {
          name: "Python3入门+进阶课程 小黑也能听懂",
          price: "499",
          limited: 100,
          img: "../../../static/imgs/actualcourse1.jpg",
          detailed: "全面系统Python3入门+进阶课程 零基础学Python 小黑也能听懂"
        }
      ],
      dis: 9.879227, // 原点起始位置
      distance: 0, // 外层嵌套的初始移动距离409px
      timeIndex: 0 //点击的秒杀时间段按钮
    };
  },
  components: {
    footerGuide
  },
  created: function() {
    const broadcast = setInterval(this.showMarquee, 2000);
  },
  methods: {
    goCourseSystems(){
      this.$router.push({
        path:'/spikeCourseSystems'
      });
    },
    toSearch() {
      this.$router.push({
        path: "/search"
      });
    },
    jump(index) {
      // var target = -(index * this.dis);
      this.timeIndex = index;
      this.distance = -(index * this.dis);

      // const direction = index - this.currentIndex >= 0 ? -1 : 1
      // const offset = Math.abs(index - this.currentIndex) * this.imgWidth
      // const jumpSpeed = Math.abs(index - this.currentIndex) === 0 ? this.speed : Math.abs(index - this.currentIndex) * this.speed
      // this.move(offset, direction, jumpSpeed)
    },
    switchSpike() {},
    //广播滚动方法
    showMarquee: function() {
      this.animate = true;
      setTimeout(() => {
        this.broadcastContent.push(this.broadcastContent[0]);
        this.broadcastContent.shift();
        this.animate = false;
      }, 1000);
    }
  },
  computed: {
    containerStyle() {
      //这里用了计算属性，用transform来移动
      return {
        transform: `translate3d(${this.distance}rem, 0, 0)`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "homePage.scss";
</style>


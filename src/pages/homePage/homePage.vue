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
          <img :src="item" alt  @click="toCourseDetail"/>
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
        <span class="iconfont" @click="toBroadcast">&#xe601;</span>
      </div>

      <!-- 秒杀专区 -->
      <div class="spike">
        <div class="spike-title">限时秒杀</div>
        <div class="period">
          <ul>
            <li
              v-for="(item,index) in spikeStatus"
              :key="index"
              @click="jump(index)"
              :class="{periodactive:timeIndex==index}"
            >
              <span>{{item.status}}</span>
              <span>{{item.startPoint}}</span>
            </li>
          </ul>
          <div
            class="countdown-module"
            v-for="(item,index) in spikeStatus"
            :key="index"
            v-show="timeIndex==index"
          >
            <span>{{ item.content }}</span>
            <div class="countdown" v-show="item.start">
              <h4>距结束:&nbsp;</h4>
              <span>{{ hh }}</span>:
              <span>{{ mm }}</span>:
              <span>{{ ss }}</span>
            </div>
          </div>
        </div>

        <div class="spike-course">
          <ol class="clearfix spike-animate" :style="containerStyle">
            <li class="all-spike-course start-ten">
              <ul>
                <li v-for="(item,index) in actualScourse" :key="index" @click="toSpike">
                  <img :src="item.img" alt />
                  <div class="spike-course-detailed">
                    <h4>{{item.name}}</h4>
                    <span>
                      ¥ {{item.price}}
                      <del>¥ {{ item.origin_price }}</del>
                    </span>
                    <span>限量: {{item.limited}}</span>
                    <div class="panic-buying">{{spikeStatus[0].buttonContent}}</div>
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
                      ¥ {{item.price}}
                      <del>¥ {{ item.origin_price }}</del>
                    </span>
                    <span>限量: {{item.limited}}</span>
                    <div class="panic-buying">{{spikeStatus[1].buttonContent}}</div>
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
                    <span>
                      ¥ {{item.price}}
                      <del>¥ {{ item.origin_price }}</del>
                    </span>
                    <span>限量: {{item.limited}}</span>
                    <div class="panic-buying">{{spikeStatus[2].buttonContent}}</div>
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
          <span @click="toMore">查看更多>></span>
        </div>
        <div class="recommed-course">
          <ul>
            <li v-for="(item,index) in recommedCourse" :key="index" @click="toCourseDetail">
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
            <li v-for="(item,index) in actualScourse" :key="index" @click="toCourseDetail">
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
      hh: "00",
      mm: "00",
      ss: "00",
      //抢购状态参数
      spikeStatus: [
        {
          buttonContent: "",
          status: "即将开抢",
          content: "限时特惠，即将开抢~",
          startPoint: "10:00",
          startTime: "2019-08-16 10:00",
          notStart: false,
          start: false,
          end: false
        },
        {
          buttonContent: "",
          status: "即将开抢",
          content: "限时特惠，即将开抢~",
          startPoint: "16:00",
          startTime: "2019-08-16 16:00",
          notStart: false,
          start: false,
          end: false
        },
        {
          buttonContent: "",
          status: "即将开抢",
          content: "限时特惠，即将开抢~",
          startPoint: "20:00",
          startTime: "2019-08-16 20:00",
          notStart: false,
          start: false,
          end: false
        }
      ],
      //秒杀课程信息
      spikeCourse: [],
      banner: [
        "../../../static/imgs/slideshow1.png",
        "../../../static/imgs/slideshow2.png",
        "../../../static/imgs/slideshow3.png",
        "../../../static/imgs/slideshow4.png"
      ],
      //广播数据
      broadcastContent: [],
      //课程推荐
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
      //秒杀课程数据
      actualScourse: [
        {
          name: "Python3入门+进阶课程",
          origin_price: "799",
          price: "199",
          limited: 100,
          img: "../../../static/imgs/actualcourse1.jpg",
          detailed: "全面系统Python3入门+进阶课程 零基础学Python 小黑也能听懂"
        },
        {
          name: "Python3入门+进阶课程 小黑也能听懂",
          origin_price: "799",
          price: "299",
          limited: 100,
          img: "../../../static/imgs/actualcourse1.jpg",
          detailed: "全面系统Python3入门+进阶课程 零基础学Python 小黑也能听懂"
        },
        {
          name: "Python3入门+进阶课程 小黑也能听懂",
          origin_price: "799",
          price: "399",
          limited: 100,
          img: "../../../static/imgs/actualcourse1.jpg",
          detailed: "全面系统Python3入门+进阶课程 零基础学Python 小黑也能听懂"
        },
        {
          name: "Python3入门+进阶课程 小黑也能听懂",
          origin_price: "799",
          price: "499",
          limited: 100,
          img: "../../../static/imgs/actualcourse1.jpg",
          detailed: "全面系统Python3入门+进阶课程 零基础学Python 小黑也能听懂"
        }
      ],
      //课程实践
      practiceScourse: [],
      dis: 9.879227, // 原点起始位置
      distance: 0, // 外层嵌套的初始移动距离409px
      timeIndex: 0 //点击的秒杀时间段按钮
    };
  },
  components: {
    footerGuide
  },
  mounted: function() {
    this.getMarqeeInfo(); //请求广播
    this.getSipkeInfo(0); //请求10点场秒杀
    this.getRecommendCourse(); //请求课程详情
    this.getPracticeScourse() //请求课程推荐
    var that = this;
    that.actualScourse.map(function(item) {
      that.$set(item, "disableed", false);
      that.$set(item, "buttonContent", "");
    });
  },
  async created() {
    const broadcast = setInterval(this.showMarquee, 1900);
    // const serverTime = await this.getServerTime();
    // this.timeGap = Date.now() - serverTime; //当前时间和服务器时间差
    this.updateState();
    this.timeInterval = setInterval(() => {
      this.updateState();
    }, 1000);
  },
  updated() {
    if (this.hh == "00" && this.mm == "00" && this.ss == "00") {
      clearInterval(this.timeInterval);
    }
  },
  methods: {
    toCourseDetail(){
      this.$router.push({
        path: "/courseSystems"
      });
    },
    toSearch() {
      this.$router.push({
        path: "/search"
      });
    },
    toBroadcast() {
      this.$router.push({
        path: "/homePage/announcementDetails"
      });
    },
    toSpike() {
      this.$router.push({
        path: "/homePage/spikeCourseSystems"
      });
    },
    toMore() {
      this.$router.push({
        path: "/homePage/courseRecommendation"
      });
    },
    //切换秒杀时间段
    jump(index) {
      //已经存在则不再发送请求，不存在则发送请求获取数据
      if (!this.spikeCourse[index]) {
        this.getSipkeInfo(index);
      }
      this.timeIndex = index;
      this.distance = -(index * this.dis);

      // const direction = index - this.currentIndex >= 0 ? -1 : 1
      // const offset = Math.abs(index - this.currentIndex) * this.imgWidth
      // const jumpSpeed = Math.abs(index - this.currentIndex) === 0 ? this.speed : Math.abs(index - this.currentIndex) * this.speed
      // this.move(offset, direction, jumpSpeed)
    },
    //广播滚动方法
    showMarquee() {
      if (this.broadcastContent.length <= 1) {
        this.animate = false;
      } else {
        this.animate = true;
        setTimeout(() => {
          this.broadcastContent.push(this.broadcastContent[0]);
          this.broadcastContent.shift();
          this.animate = false;
        }, 1000);
      }
    },
    // getServerTime() {
    //   //模拟服务器时间
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       //当前时间慢10秒就是服务器时间
    //       resolve(new Date(Date.now() - 10 * 1000).getTime()); //跟本地时间差
    //     }, 0);
    //   });
    // },
    updateState() {
      for (var i = 0; i < this.spikeStatus.length; i++) {
        this.spikeStatus[i].notStart = this.spikeStatus[
          i
        ].start = this.spikeStatus[i].end = false;
        var now = Date.now(); //当前服务器时间
        var disStart = now - new Date(this.spikeStatus[i].startTime).getTime(); //开始时间和服务器时间之差
        var disEnd =
          now - (new Date(this.spikeStatus[i].startTime).getTime() + 7200000); //结束时间和服务器时间之差
        if (disStart < 0) {
          // timeGap: 0
          this.spikeStatus[i].buttonContent = "即将开抢";
          this.spikeStatus[i].status = "即将开抢";
          this.spikeStatus[i].content = "限时特惠，即将开抢~";
          this.spikeStatus[i].notStart = true;
        } else if (disStart >= 0 && disEnd < 0) {
          var countdown = Math.floor(-disEnd / 1000);
          var iH = Math.floor(countdown / 3600);
          var iM = Math.floor((countdown % 3600) / 60);
          var iS = Math.floor(countdown % 60);
          this.hh = iH <= 9 ? "0" + iH : "" + iH;
          this.mm = iM <= 9 ? "0" + iM : "" + iM;
          this.ss = iS <= 9 ? "0" + iS : "" + iS;
          this.spikeStatus[i].buttonContent = "⚡马上抢";
          this.spikeStatus[i].status = "抢购中";
          this.spikeStatus[i].content = "抢购中！不要错过~";
          this.spikeStatus[i].start = true;
        } else {
          this.spikeStatus[i].buttonContent = "已结束";
          this.spikeStatus[i].status = "已结束";
          this.spikeStatus[i].content = "本轮已结束~";
          this.spikeStatus[i].end = true;
        }
      }
    },
    //获取公告数据
    getMarqeeInfo() {
      this.$axios({
        method: "get",
        url: "http://192.168.0.111:8080/notice",
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      })
        .then(response => {
          for (var i = 0; i < response.data.length; i++) {
            this.broadcastContent.push(response.data[i].ntitle);
          }
        })
        .catch(err => {
          console.log("服务器异常" + err);
        });
    },
    //请求秒杀数据
    getSipkeInfo(num) {
      this.$axios({
        method: "get",
        url: "http://192.168.0.111:8080/sekil/" + num,
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      })
        .then(response => {
          console.log(response.data);
          this.spikeCourse[num] = response.data;
          //添加每个课程的请购状态
          this.spikeCourse[num].map(item => {
            this.$set(item, "status", "即将开抢");
          });
        })
        .catch(err => {
          console.log("服务器异常" + err);
        });
    },
    //获取课程推荐
    getRecommendCourse() {
      this.$axios({
        method: "get",
        url: "http://192.168.0.111:8080/gethot"
      })
        .then(response => {
          console.log(response.data);
          // this.recommedCourse = response.data;
        })
        .catch(err => {
          console.log("服务器异常" + err);
        });
    },
    //获取实战课程
    getPracticeScourse() {
      this.$axios({
        method: "get",
        url: "http://192.168.0.111:8080/getshi"
      })
        .then(response => {
          console.log(response.data);
          // this.practiceScourse = response.data;
        })
        .catch(err => {
          console.log("服务器异常" + err);
        });
    }
  },
  computed: {
    containerStyle() {
      //这里用了计算属性，用transform来移动
      return {
        transform: `translate3d(${this.distance}rem, 0, 0)`
      };
    }
  },
  beforeDestroy() {
    clearInterval(this.broadcast);
    clearInterval(this.timeInterval);
  }
};
</script>

<style lang="scss">
@import "homePage.scss";
</style>

  
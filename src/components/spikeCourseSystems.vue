<template>
  <div>
    <router-link to="/courseSystems/video"></router-link>
    <div id="h-course-system">
      <!-- 图片视频 -->
      <div class="v-video">
        <router-view></router-view>
      </div>
      <div class="goBack" @click="$router.back()">&lt;</div>
      <div id="plays" class="icon iconfont" @click="playClick" v-show="isPlay">&#xe641;</div>
      <!-- 秒杀商品提醒 -->
      <div class="spike-reminder">
        <img src="../../static/imgs/sipke.png" alt />
        <div v-show="countdownStatus!=''">
          <h4>{{countdownStatus}}</h4>
          <span>{{ hh }}</span>:
          <span>{{ mm }}</span>:
          <span>{{ ss }}</span>
        </div>
      </div>
      <!-- 课程详情 -->
      <div class="courses">
        <li
          class="catalogue"
          v-for="(item, index) in vComments"
          :key="index"
          :class="{active:index == current}"
          @click="clickComment(index)"
        >
          <span>{{item}}</span>
        </li>
      </div>
    </div>
    <div id="course_whell" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
      <ul id="wrapCourse" ref="ref">
        <li id="course_details">
          <div class="className">
            <h1>Android-基础学习实例</h1>
          </div>
          <div class="price">
            <span class="vipPrice">会员：¥99.99</span>
            <span class="usualPrice">原价：¥345.00</span>
            <!-- <span class="noPrice">免费</span> -->
          </div>
          <div class="classLabel">
            <h1>课程标签</h1>
            <span>零基础</span>
            <span>交互设计</span>
            <span>移动产品设计</span>
          </div>
          <div class="teachIntrod">
            <h1>老师介绍</h1>
            <div class="teacher clearfix">
              <div class="headPicturl">
                <!-- <img src="../../../static/img/zyl.png" alt /> -->
              </div>
              <div class="teachBrief">
                <span class="teachName">朱一龙</span>
                <br />
                <span class="synopsis">国科大老规矩睡个懒觉反对浪费空间的概念房管局</span>
              </div>
            </div>
          </div>
          <div class="courseDetails">
            <h1>课程详情</h1>
            <p>
              此学堂是一款专业学习IT开发知识技能
              的平台，由国内资深IT技术专家成立于
              北京...
            </p>
          </div>
        </li>
        <li id="courseOutline">
          <div v-for="(courseOutline, index) in courseOutlines" :key="index">
            <h1>第{{courseOutline.chpapter}}章</h1>
            <h2>{{courseOutline.chpapter}}-{{courseOutline.node}} {{courseOutline.name}}</h2>
          </div>
        </li>
        <li id="courseComment">
          <ul>
            <p>学员评论</p>
            <li v-for="(studentComment, index) in studentComments" :key="index">
              <p>{{studentComment.name}}</p>
              <p>{{studentComment.comment}}</p>
              <p v-show="studentComment.src">
                <img :src="studentComment.src" alt />
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div id="f-coourse-system">
      <div v-show="show ==1" id="vShow" @click="consultHide">有需求请拨打电话：18309283552</div>
      <div class="consult" @click="consult">
        <i class="icon iconfont">&#xe75b;</i>
        <span>咨询</span>
      </div>
      <div class="nowBuy" :class="{nowBuy_active:spikeFlag}">
        <span>{{spikeButton}}</span>
      </div>
    </div>
  </div>
</template>
<script>
let elementX = 0;
let startX = 0;
export default {
  data() {
    return {
      // src:"../../../static/Intermission-Walk-in.ogv",
      //秒杀模块
      cid: this.$route.query.cid,
      hh: "00",
      mm: "00",
      ss: "00",
      countdownStatus: "",
      spikeButton: "",
      spikeFlag: false,
      //详情数据
      show: 0,
      current: 0,
      playStatus: "",
      isPlay: true,
      vComments: ["详情", "章节", "评价"],
      spikeC: {
        name: "Python3入门+进阶课程",
        startTime: "2019-08-22 21:00",
        origin_price: "799",
        price: "199",
        limited: 100,
        img: "../../../static/imgs/actualcourse1.jpg",
        detailed: "全面系统Python3入门+进阶课程 零基础学Python 小黑也能听懂"
      },
      studentComments: [
        {
          name: "张****",
          comment: "此课程很好",
          src:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1329598405,2432599223&fm=26&gp=0.jpg"
        },
        {
          name: "B****",
          comment: "老师讲的很好",
          src: ""
        },
        {
          name: "C****",
          comment: "Good！"
        }
      ],
      courseOutlines: [
        {
          chpapter: 1,
          node: "1",
          name: "课程简介",
          videolink: ""
        },
        {
          chpapter: 1,
          node: "2",
          name: "课程背景",
          videolink: ""
        },
        {
          chpapter: 1,
          node: "2",
          name: "课程背景",
          videolink: ""
        },
        {
          chpapter: 2,
          node: "1",
          name: "前端要学的",
          videolink: ""
        },
        {
          chpapter: 2,
          node: "2",
          name: "html工具",
          videolink: ""
        }
      ]
    };
  },
  async created() {
    this.Spike();
    this.timeInterval = setInterval(() => {
      this.Spike();
    }, 1000);
  },
  methods: {
    //首次请求
    spike() {
      this.$axios({
        method: "get",
        url: "",
        params: {
          cid: this.cid
        }
      }).then(res => {
        
      });
    },
    Spike() {
      var now = Date.now(); //当前服务器时间
      var disStart = now - new Date(this.spikeC.startTime).getTime(); //开始时间和服务器时间之差
      var disEnd = now - (new Date(this.spikeC.startTime).getTime() + 7200000); //结束时间和服务器时间之差
      if (disStart < 0) {
        var countdown = Math.floor(-disStart / 1000);
        var iH = Math.floor(countdown / 3600);
        var iM = Math.floor((countdown % 3600) / 60);
        var iS = Math.floor(countdown % 60);
        this.hh = iH <= 9 ? "0" + iH : "" + iH;
        this.mm = iM <= 9 ? "0" + iM : "" + iM;
        this.ss = iS <= 9 ? "0" + iS : "" + iS;
        this.countdownStatus = "即将开始";
        this.spikeButton = "未开始";
        this.spikeFlag = false;
      } else if (disStart >= 0 && disEnd < 0) {
        var countdown = Math.floor(-disEnd / 1000);
        var iH = Math.floor(countdown / 3600);
        var iM = Math.floor((countdown % 3600) / 60);
        var iS = Math.floor(countdown % 60);
        this.hh = iH <= 9 ? "0" + iH : "" + iH;
        this.mm = iM <= 9 ? "0" + iM : "" + iM;
        this.ss = iS <= 9 ? "0" + iS : "" + iS;
        this.countdownStatus = "秒杀倒计时";
        this.spikeButton = "立即抢购";
        this.spikeFlag = true;
      } else {
        this.countdownStatus = "";
        this.spikeButton = "售罄";
        this.spikeFlag = false;
      }
    },
    //抢购请求
    panicBuying() {},
    playClick() {
      this.$refs.vo.play();
      this.isPlay = !this.isPlay;
    },
    consult() {
      this.show = 1;
    },
    consultHide() {
      this.show = 0;
    },
    clickComment(index) {
      this.current = index;
      this.$refs.ref.style.left =
        (-index * document.documentElement.clientWidth) / 41.4 + "rem";
    },
    // goBuy(){
    //   this.$router.push({
    //    path:'/confirmBuy'
    //   });
    // },
    touchstart(e) {
      e.preventDefault();
      this.$refs.ref.style.transition = "none";
      let TouchC = e.changedTouches[0];
      startX = TouchC.clientX;
      elementX = this.$refs.ref.offsetLeft;
    },
    touchmove(e) {
      let TouchC = e.changedTouches[0];
      let nowX = TouchC.clientX;
      let disX = nowX - startX + elementX;
      if (disX > 0) {
        disX = 0;
      } else if (disX / 41.4 < -20) {
        disX = -828;
      }
      this.$refs.ref.style.left = disX / 41.4 + "rem";
    },
    touchend(e) {
      var index =
        this.$refs.ref.offsetLeft / document.documentElement.clientWidth;
      index = Math.round(index);
      this.$refs.ref.style.transition = "0.5s left";
      this.$refs.ref.style.left =
        (index * document.documentElement.clientWidth) / 41.4 + "rem";
      this.current = -index;
    }
  }
};
</script>
<style>
#h-course-system {
  width: 100%;
  /*  position: fixed;
  top: 0; */
}

#h-course-system .goBack {
  width: 1.449275rem;
  height: 1.449275rem;
  font-size: 0.724638rem;
  font-weight: bold;
  padding: 0.362319rem;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
}
#h-course-system #plays {
  position: absolute;
  left: 4.10628rem;
  top: 2.415459rem;
  color: white;
  font-size: 1.449275rem;
}
#h-course-system .v-video {
  width: 100%;
  height: 5.555556rem;
  background-color: pink;
}
#h-course-system .v-video #myVideo {
  width: 100%;
  height: 5.555556rem;
}
.spike-reminder {
  width: 100%;
  height: 1.207729rem;
  background: linear-gradient(90deg, #fd680c, #fbc330);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0 0.241546rem;
}
.spike-reminder img {
  height: 0.628019rem;
}
.spike-reminder div {
  font-size: 0.434783rem;
  text-align: center;
}
.spike-reminder div h4 {
  text-align: right;
  font-size: 0.338164rem;
  margin-bottom: 0.096618rem;
}
.spike-reminder div span {
  display: inline-block;
  width: 0.57971rem;
  height: 0.531401rem;
  background-color: #fff;
  border-radius: 0.096618rem;
  text-align: center;
  line-height: 0.57971rem;
  font-size: 0.483092rem;
  color: red;
}
#h-course-system .courses {
  width: 100%;
  height: 1.207729rem;
  border-bottom: 1px #d2d2d2 solid;
}
#h-course-system > .courses > .catalogue {
  height: 1.207729rem;
  line-height: 1.207729rem;
  width: 3.333333rem;
  float: left;
  text-align: center;
}
#h-course-system > .courses .active {
  color: #404ed1;
  border-bottom: #404ed1 0.024155rem solid;
}

#h-course-system > .courses > li > span {
  font: 0.57971rem "微软雅黑";
}

#h-course-system > .courses > li > .active {
  color: #404ed1;
}
#f-coourse-system div {
  float: left;
}
#f-coourse-system .consult {
  width: 3.140097rem;
  height: 1.690821rem;
  text-align: center;
  line-height: 1.690821rem;
}
#f-coourse-system .consult > .icon {
  font-size: 0.966184rem;
}
#f-coourse-system .consult > span {
  font-size: 0.603865rem;
}
#f-coourse-system {
  width: 100%;
  height: 1.690821rem;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
}
#vShow {
  width: 6.038647rem;
  height: 1.690821rem;
  font-size: 0.603865rem;
  font-weight: 600;
  border: 0.024155rem solid #000;
  position: fixed;
  left: 0.483092rem;
  bottom: 0.724638rem;
  color: red;
  background-color: #fff;
  padding-top: 0.241546rem;
}
#f-coourse-system .nowBuy {
  width: 60%;
  height: 1.207729rem;
  text-align: center;
  border-radius: 0.603865rem;
  background-color: #999;
  margin-left: 0.483092rem;
}
#f-coourse-system .nowBuy_active {
  background-color: #ff632a;
}
.nowBuy span {
  font: 0.57971rem "微软雅黑";
  color: white;
  height: 1.207729rem;
  line-height: 1.207729rem;
}
#course_whell {
  width: 100%;
  position: absolute;
  top: 7.971014rem;
  bottom: 1.690821rem;
  overflow-y: auto;
  overflow-x: hidden;
}
#wrapCourse {
  width: 300%;
  position: absolute;
}
#course_details,
#courseOutline,
#courseComment {
  width: 33.33%;
  float: left;
  overflow: auto;
  padding: 0rem 0.362319rem;
}
#course_details .className h1 {
  font: bold 0.676329rem "宋体";
  color: #504a54;
}

#course_details .price {
  width: 100%;
  height: 40px;
  padding: 0.169082rem 0;
}

#course_details .price .usualPrice {
  display: inline-block;
  width: 3.381643rem;
  font-size: 0.434783rem;
  font-family: "微软雅黑";
}

#course_details .price .vipPrice,
.noPrice {
  display: inline-block;
  width: 3.381643rem;
  font-size: 0.483092rem;
  font-family: "微软雅黑";
  color: red;
  text-align: center;
}

#course_details .classLabel h1 {
  font: bold 0.603865rem "微软雅黑";
  color: #504a54;
  padding: 0.241546rem 0;
}

#course_details .classLabel {
  padding-bottom: 0.241546rem;
  border-bottom: 1px #d2d2d2 solid;
}

#course_details .classLabel span {
  font: 0.434783rem "微软雅黑";
  color: #5bb282;
}

#course_details .teachIntrod h1 {
  font: bold 0.603865rem "微软雅黑";
  color: #504a54;
  padding: 0.241546rem 0;
}
#course_details .teachIntrod .teacher .headPicturl {
  float: left;
  margin-right: 0.362319rem;
}

#course_details .teachIntrod .teacher img {
  width: 2.415459rem;
  height: 2.415459rem;
  border-radius: 100%;
}

#course_details .teachIntrod .teacher .teachBrief {
  width: 7.246377rem;
  height: 0.966184rem;
}
#course_details .teachIntrod .teacher .teachBrief .teachName {
  font: bold 0.483092rem "微软雅黑";
}
#course_details .teachIntrod .teacher .teachBrief .synopsis {
  font: 0.434783rem "微软雅黑";
}
#course_details .courseDetails h1 {
  width: 100%;
  font: bold 0.603865rem "微软雅黑";
  color: #504a54;
  padding: 0.120773rem 0;
  border-top: 1px #d2d2d2 solid;
}
#course_details .courseDetails p {
  width: 100%;
  text-indent: 2em;
  font: 0.434783rem "微软雅黑";
}
#courseComment ul > p {
  font: bold 0.676329rem "宋体";
  color: #504a54;
  padding-top: 0.241546rem;
  text-align: center;
}
#courseComment ul > li {
  padding: 0.241546rem;
  border-bottom: 0.024155rem solid #cdcdcd;
}
#courseComment ul li p:nth-child(1) {
  font-size: 0.434783rem;
}
#courseComment ul li p:nth-child(2) {
  font-size: 0.362319rem;
  text-indent: 2em;
  padding: 0.120773rem 0;
}
#courseComment ul li p:nth-child(3) {
  width: 100%;
  height: 2.415459rem;
}
#courseComment ul li p:nth-child(3) > img {
  width: 2.415459rem;
  height: 2.415459rem;
}
</style>
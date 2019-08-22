<template>
  <div>
    <div id="h-course-system">
      <div class="v-video">
        <img :src="courseSystems.mainImage" alt="" v-show="!playStatus">
        <video controls id="myVideo" ref="vo" :src="videolink" v-show="playStatus" ></video>
      </div>
      <div class="goBack" @click="$router.back()">&lt;</div>
      <div id="plays" class="icon iconfont"  @click="playClick" v-show="isPlay">&#xe641;</div>
      <div class="courses">
        <li class="catalogue"
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
            <h1>{{courseSystems.name}}</h1>
          </div>
          <div class="price">
            <span class="vipPrice" v-if="courseSystems.price != 0" >会员：¥{{courseSystems.activityPrice}}</span>
            <span class="usualPrice" v-if="courseSystems.price != 0">原价：¥{{courseSystems.price}}</span>
            <span class="noPrice" v-else>免费</span>
          </div>
          <div class="classLabel">
            <h1>课程标签</h1>
            <span>{{courseSystems.tagName}}</span>
          </div>
          <div class="teachIntrod">
            <h1>老师介绍</h1>
            <div class="teacher clearfix">
              <div class="headPicturl"> 
                <img :src="courseSystems.tImage" alt />
              </div>
              <div class="teachBrief">
                <span class="teachName">{{courseSystems.tName}}</span>
                <br/>
                <span class="synopsis">{{courseSystems.tDesc}}</span>
              </div>
            </div>
          </div>
          <div class="courseDetails">
            <h1>课程详情</h1>
            <p>
             {{courseSystems.detail}}
            </p>
          </div>
        </li>
        <li id="courseOutline">
          <div v-for="(courseOutline, index) in courseOutlines" :key="index">
            <h1>
            第{{courseOutline.chpapter}}章</h1>
            <h2>{{courseOutline.chpapter}}-{{courseOutline.node}} {{courseOutline.name}}</h2>
          </div>
        </li>
        <li id="courseComment">
          <ul>
            <p>学员评论</p>
            <li v-for="(studentComment, index) in studentComments" :key="index">
              <p>{{studentComment.name}}</p>
              <p>{{studentComment.comment}}</p>
              <p v-show="studentComment.src"><img :src="studentComment.src" alt=""></p>
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
      <div v-show="shopping" id="shopping">
        <span v-if="shoppingCart==1">添加成功，在购物车等亲！</span>
        <span v-else>亲，已经加过购物车了哟！</span>
      </div>
      <div class="shoppingCart" @click="goShopping" v-if="!courseSystems.isBuy&& courseSystems.price != 0">
        <span>加入购物车</span>
      </div>
      <div class="nowBuy" @click="goBuy" v-if="!courseSystems.isBuy&& courseSystems.price != 0">
        <span>立即购买</span>
      </div>
      <div id="learning"  @click="goShopping" v-show="courseSystems.price == 0||courseSystems.isBuy">
        <span>立即学习</span>
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
      courseSystems:{
        isBuy:false,
        mainImage:"../../../static/img/zyl.png",
        activityPrice:99,
        price:113,
        tDesc:"国科大老规矩睡个懒觉反对浪费空间的概念房管局",
        subtitle:"",
        name:"Android-基础学习实例",
        tName:"朱一龙",
        detail:"此学堂是一款专业学习IT开发知识技能的平台，由国内资深IT技术专家成立于北京...",
        tagName:"零基础",
        tImage:"../../../static/img/zyl.png"
      },
      videolink:"../../../static/Intermission-Walk-in.ogv",
      show:0,
      current: 0,
      playStatus:false,
      isPlay:true,
      vComments: ["详情", "章节", "评价"],
      studentComments: [
        {
          name: "张****",
          comment: "此课程很好",
          src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1329598405,2432599223&fm=26&gp=0.jpg'
        },
        {
          name: "B****",
          comment: "老师讲的很好",
          src:''
        },
        {
          name: "C****",
          comment: "Good！"
        }
      ],
      courseOutlines:[
          {
          chpapter:1,
          node:'1',
          name:'课程简介',
          videolink:''
        },
         {
          chpapter:1,
          node:'2',
          name:'课程背景',
          videolink:''
        },
        {
          chpapter:1,
          node:'2',
          name:'课程背景',
          videolink:''
        },
         {
          chpapter:2,
          node:'1', 
          name:'前端要学的',
          videolink:''
        },
        {
          chpapter:2,
          node:'2',
          name:'html工具',
          videolink:''
        }
      ],
      shoppingCart:0,
      shopping:false
    }
  },
  computed:{
    id:function(){
      return this.$route.query.id;
    }
  },
  created(){
    /* console.log(this.$route.query.id); */
    let id=this.$route.query.id;
      this.$axios({
                method:'get',
                url:'http://b3n79z.natappfre.cc/getcourse',
                params:{
                    courseId:id
                }
            }).then(res=>{
                this.courseSystems = res.data;
            }).catch((error)=>{
                console.log(error);
            });
            this.$axios({
                method:'get',
                url:'http://192.168.0.107:8080/user/saveViCourses',
                params:{
                    cid:id,
                    uid:1
                }
            })
  },
  mounted() {
    plus.screen.lockOrientation('landscape-primary');
  },
  methods: {
    playClick(){
      this.playStatus = true;
      this.$refs.vo.play();
      this.isPlay = !this.isPlay ;
    },
    consult(){
      this.show = 1;
    },
    consultHide(){
      this.show = 0;
    },
    clickComment(index) {
      this.current = index;
      this.$refs.ref.style.left =
        (-index * document.documentElement.clientWidth) / 41.4 + "rem";
    },
    goShopping(){
      clearTimeout(timer);
      this.shopping = !this.shopping;
     let timer = setTimeout(function(){
        this.shopping = !this.shopping;
      },8000)
      let id=this.$route.query.id;
      let postdata = this.$qs.stringify({
        uid: 2,
        cid:id
      });
      this.$axios({
                method:'post',
                url:'http://192.168.0.101:8080/insertcart',
                data:postdata
            }).then(res=>{
              console.log(res.data);
                this.shoppingCart = res.data;
            }).catch((error)=>{
                console.log(error);
            });
    },
    goBuy(){
      this.$router.push({
       path:'/confirmBuy'
      });
    },
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
    },
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
  position: relative;
  background-color: #000;
}
.v-video img{
  width: 100%;
  height: 5.555556rem;
}
#h-course-system .v-video #myVideo{
  width: 100%;
  height: 5.555556rem;
  position: absolute;
  top: 0;
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
#vShow{
  width: 6.038647rem;
  height: 1.690821rem;
  font-size: .603865rem;
  border: .024155rem solid #000;
  position: fixed;
  left: .483092rem;
  bottom: .724638rem;
  color: red;
  background-color: #fff;
  padding-top: .241546rem;
}
#shopping{
width: 6.038647rem;
  height: 1.690821rem;
  border: .024155rem solid #000;
  position: fixed;
  right: .483092rem;
  bottom: 2.415459rem;
  color: #000;
  background-color: #fff;
  padding-top: .241546rem;
}
#shopping span{
 font-size: .603865rem;
}
#f-coourse-system .shoppingCart,
.nowBuy {
  width: 3.429952rem;
  height: 1.449275rem;
  text-align: center;
}
#f-coourse-system .shoppingCart span,
.nowBuy span,#learning span {
  font: 0.57971rem "微软雅黑";
  color: white;
  height: 1.449275rem;
  line-height: 1.449275rem;
}
#f-coourse-system .shoppingCart {
  background-color: #988fef;
}
#f-coourse-system .nowBuy {
  background-color: #404ed1;
}
#f-coourse-system #learning{
  width: 3.623188rem;
  height: 1.449275rem;
  text-align: center;
 background-color: red;
 position: absolute;
 right: .241546rem;
}
#course_whell {
  width: 100%;
  position: absolute;
  top: 0;
  top: 6.763285rem;
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
#courseComment ul >li{
  padding: .241546rem;
  border-bottom: .024155rem solid #cdcdcd;
}
#courseComment ul li p:nth-child(1) {
  font-size: 0.434783rem;
}
#courseComment ul li p:nth-child(2) {
  font-size: 0.362319rem;
  text-indent: 2em;
  padding: .120773rem 0;
}
#courseComment ul li p:nth-child(3){
  width:100%;
  height: 2.415459rem;
}
#courseComment ul li p:nth-child(3) >img{
  width: 2.415459rem;
  height: 2.415459rem;
}
</style>
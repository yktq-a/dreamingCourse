<template>
  <div>
    <div id="v-order">
      <div class="myOrder">
        <span class="orderGoBack" @click="$router.back()">&lt;</span>
        <span>我的订单</span>
      </div>
      <div class="orderList clearfix">
        <div
          :class="{vOn:index == current}"
          v-for="(order, index) in orders"
          :key="index"
          @click="clickComment(index)"
        >{{order}}</div>
      </div>
    </div>
    <div id="orderOutline" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
      <ul ref="order" class="clearfix">
        <li id="allOrder">
          <div class="courseDetails">
            <div class="v-title">
              <span>前端权威课程</span>
              <span>等待买家付款</span>
            </div>
            <div class="courseImage clearfix">
              <div @touchstart="goDetails">
                <img src alt />
              </div>
              <span class="money">¥143</span>
            </div>
            <div class="option clearfix">
              <div class="cancelOrder">
                <span>取消订单</span>
              </div>
              <div class="payment" @touchstart="v_payment">
                <span>立即付款</span>
              </div>
            </div>
          </div>
          <div class="courseDetails">
            <div class="v-title">
              <span>前端权威课程</span>
              <span>交易成功</span>
            </div>
            <div class="courseImage">
              <div>
                <img src alt />
              </div>
              <span class="money">¥</span>
            </div>
            <div class="option">
              <div class="comment" @touchend="goComment">
                <span>评价课程</span>
              </div>
            </div>
          </div>
        </li>
        <li id="noPayment">给i还得看据洛杉矶发</li>
        <li id="noComment">
          <div class="courseDetails" v-for="(noComment, index) in noComments" :key="index">
            <div class="v-title">
              <span>{{noComment.name}}</span>
            </div>
            <div class="courseImage">
              <div>
                <img :src="noComment.src" alt />
              </div>
              <span class="money">¥{{noComment.price}}</span>
            </div>
            <div class="option">
              <div class="comment" @touchend="goComment">
                <span>评价课程</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
let elementX = 0;
let startX = 0;
export default {
  data() {
    return {
      payment:false,
      current: 0,
      orders: ["全部", "待付款", "待评价"],
      allOrders: [
        {
          name: "前端权威课程",
          price: "456",
          src:
            "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=846a50f4bb119313d34ef7e2045167b2/e4dde71190ef76c670c6651d9416fdfaaf5167f4.jpg"
        }
      ],
      noComments: [
        {
          name: "前端权威课程",
          src:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1329598405,2432599223&fm=26&gp=0.jpg",
          price: "145"
        }
      ],
      allOrders1:{}
    };
  },
  created() {
    this.$axios({
                method:'get',
                url:'http://192.168.0.108:8080/order/addOrder',
                params:{
                    uid:1
                }
            }).then(res=>{
                this.allOrders1 = res.data.data;
                console.log(this.allOrders1);
            }).catch((error)=>{
                alert(error);
            });
  },
  methods: {
    v_payment(){
      this.payment = true;
    },
    goDetails(){
      this.$router.push({
        path:'/orderDetails'
      })
    },
    goComment(){
            this.$router.push({
              path:'/comment'
            });
        },
    clickComment(index) {
      this.current = index;
      this.$refs.order.style.left =
        (-index * document.documentElement.clientWidth) / 41.4 + "rem";
    },
    touchstart(e) {
      e.preventDefault();
      this.$refs.order.style.transition = "none";
      let TouchC = e.changedTouches[0];
      startX = TouchC.clientX;
      elementX = this.$refs.order.offsetLeft;
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
      this.$refs.order.style.left = disX / 41.4 + "rem";
    },
    touchend(e) {
      var index =
        this.$refs.order.offsetLeft / document.documentElement.clientWidth;
      index = Math.round(index);
      this.$refs.order.style.transition = "0.5s left";
      this.$refs.order.style.left =
        (index * document.documentElement.clientWidth) / 41.4 + "rem";
      this.current = -index;
    }
  }
};
</script>
<style>
#v-order {
  width: 100%;
  height: 2.415459rem;
  position: fixed;
  top: 0;
  z-index: 3;
}
#v-order .myOrder {
  height: 1.207729rem;
  background-color: #eeeeee;
}
#v-order .myOrder .orderGoBack {
  display: inline-block;
  width: 1.207729rem;
  height: 1.207729rem;
  font: 0.724638rem "微软雅黑";
  padding-left: 0.241546rem;
}
#v-order .myOrder span:nth-child(2) {
  display: inline-block;
  padding-left: 2.415459rem;
  font: 0.483092rem "微软雅黑";
}
#v-order .orderList {
  width: 100%;
  height: 1.207729rem;
  padding: 0 0.241546rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 0.024155rem #eee solid;
  z-index: 5;
}
#v-order .orderList div {
  width: 2.657005rem;
  float: left;
  font-size: 0.483092rem;
  height: 1.207729rem;
  line-height: 1.207729rem;
  text-align: center;
}
#v-order .orderList .vOn {
  color: #edc731;
  border-bottom: 1px solid #edc731;
}
#orderOutline {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 2.415459rem;
  overflow-y: auto;
  overflow-x: hidden;
  /*  padding: 0 0.483092rem; */
}
#orderOutline > ul {
  width: 300%;
  position: absolute;
}
#orderOutline #allOrder,
#noPayment,
#noComment {
  width: 33.33%;
  height: 100%;
  padding: 0 0.483092rem;
  overflow: auto;
  float: left;
}
#orderOutline .courseDetails {
  width: 100%;
  height: 4.589372rem;
  padding-top: 0.241546rem;
  border-bottom: 1px solid #eee;
  position: relative;
}
#orderOutline .courseDetails > .v-title,
.courseImage {
  position: relative;
  display: flex;
  align-items: center;
}
#orderOutline .courseDetails .v-title span:nth-child(2) {
  position: absolute;
  right: 0.483092rem;
}
#orderOutline .courseDetails .courseImage {
  width: 100%;
  height: 2.898551rem;
}
#orderOutline .courseDetails div span {
  font-size: 0.410628rem;
  font-family: "宋体";
}
#orderOutline .courseDetails .option div {
  float: left;
  height: 0.724638rem;
  width: 2.657005rem;
  background-color: #eee;
  padding: 0 0.241546rem;
  text-align: center;
  line-height: 0.724638rem;
  margin-right: 0.362319rem;
}
#orderOutline .courseDetails .option {
  position: absolute;
  right: 0.241546rem;
}
#orderOutline .courseDetails .courseImage div {
  width: 3.623188rem;
  height: 2.415459rem;
  background-color: #eee;
  float: left;
  margin-right: 0.362319rem;
}
#orderOutline .courseDetails .courseImage div img {
  width: 3.623188rem;
  height: 2.415459rem;
}
.money {
  color: #ec5858;
}
</style>
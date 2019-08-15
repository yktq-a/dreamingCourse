<template>
  <div>
    <div id="orderDetails">
      <div class="v-head clearfix">
        <div class="goBack" @click="$router.back()">&lt;</div>
        <span>订单详情</span>
      </div>
      <div class="waitPayment">
        <span></span>
        <span>等待付款</span>
      </div>
    </div>
    <div id="m-orderDetails">
      <div class="clientInfo">
        <h1>长孙静</h1>
        <div class="clientPhone">
          <span></span>
          <span>183095884699</span>
        </div>
      </div>
      <div class="courseDetails">
        <div class="v-title">
          <span>前端权威课程</span>
        </div>
        <div class="courseImage clearfix">
          <div>
            <img src alt />
          </div>
          <span>¥143</span>
        </div>
        <div class="sumPrice">
          <span>订单总价</span>
          <span>¥2354</span>
        </div>
        <div class="needPayment">
          <span>需付款</span>
          <span class="needMoney">¥46456</span>
        </div>
      </div>
      <div class="orderInfo">
        <div class="orderInfor">订单信息</div>
        <div>
          <span>订单编号：</span>
          <span>2536546086578</span>
        </div>
        <div>
          <span class="pageTrace">支付宝交易号：</span>
          <span class="pageNumber">63694042039080485556369404203908048555</span>
        </div>
        <div>
          <span>创建时间：</span>
          <span>2019-07-29 11:27:12</span>
        </div>
      </div>
    </div>
    <div id="f-orderDetails">
      <div>
        <span>取消订单</span>
      </div>
      <div>
        <span class="needMoney">付 款</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};

</script>
<style>
#orderDetails {
  position: fixed;
  top: 0;
  width: 100%;
  height: 3.381643rem;
}

#orderDetails:before {
  background-image: url(./img/pageBg.png);
  background-size: cover;
  width: 100%;
  height: 3.381643rem;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  filter: blur(5px);
}

#orderDetails .goBack {
  padding-left: 0.241546rem;
  width: 1.207729rem;
  height: 1.207729rem;
  font: 0.966184rem "微软雅黑";
  color: white;
  float: left;
}

#orderDetails .v-head > span {
  display: inline-block;
  width: 7.21256rem;
  height: 1.207729rem;
  text-align: center;
  line-height: 1.207729rem;
  font-size: 0.603865rem;
  color: white;
}

#orderDetails .waitPayment {
  width: 100%;
  height: 2.173914rem;
  line-height: 2.173914rem;
  padding-left: 0.724638rem;
}

#orderDetails .waitPayment span {
  font-size: 0.531401rem;
  font-family: "微软雅黑";
  color: white;
}

#m-orderDetails {
  position: absolute;
  top: 3.381643rem;
  bottom: 1.207729rem;
  width: 100%;
  overflow: auto;
  padding: 0 0.241546rem;
}

#m-orderDetails .clientInfo {
  width: 100%;
  height: 1.690821rem;
  border-bottom: 0.120773rem #eee solid;
  font-size: 0.483092rem;
  padding-top: 0.241546rem;
}

#m-orderDetails .clientInfo .clientPhone {
  padding-top: 0.241546rem;
}

#m-orderDetails .courseDetails {
  width: 100%;
  padding-top: 0.483092rem;
  padding-bottom: 0.241546rem;
  border-bottom: 0.120773rem solid #eee;
}

#m-orderDetails .courseDetails .v-title,
.courseImage {
  display: flex;
  align-items: center;
}

#m-orderDetails .courseDetails .courseImage {
  width: 100%;
  height: 2.898551rem;
}

#m-orderDetails .courseDetails div span {
  font-size: 0.410628rem;
  font-family: "宋体";
}

#m-orderDetails .courseDetails .courseImage div {
  width: 3.623188rem;
  height: 2.415459rem;
  background-color: #eee;
  float: left;
  margin-right: 0.362319rem;
}
#m-orderDetails .courseDetails .sumPrice,
.needPayment {
  padding-right: 0.241546rem;
  width: 100%;
  height: 0.603865rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.needMoney {
  color: #ec5858;
}
#m-orderDetails .orderInfo {
  padding-top: 0.241546rem;
  width: 100%;
}
#m-orderDetails .orderInfo .orderInfor {
  font: 0.434783rem "宋体";
}
#m-orderDetails .orderInfo div span {
  font-size: 0.386473rem;
  color: #696565;
}
#m-orderDetails .orderInfo > div {
  width: 100%;
  height: 0.724638rem;
}
#m-orderDetails .orderInfo .pageTrace {
  width: 3.140097rem;
  height: 0.724638rem;
  float: left;
}
#m-orderDetails .orderInfo .pageNumber {
  word-break: break-all;
}
#f-orderDetails {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.207729rem;
  padding-left: 4.10628rem;
  padding-top: 0.241546rem;
  border-top: 0.048309rem solid #eee;
}

#f-orderDetails div {
  margin-right: 0.241546rem;
  float: left;
  width: 2.415459rem;
  background-color: #eee;
  height: 0.724638rem;
  text-align: center;
  line-height: 0.724638rem;
}

#f-orderDetails div span {
  font-size: 0.483092rem;
}
</style>
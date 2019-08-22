<template>
  <div>
    <div id="buyHead">
      <div class="myOrder">
        <span class="goBack" @click="$router.back()">&lt;</span>
        <span>确认购买</span>
      </div>
      <div class="client-infor">
        <span>长孙静</span>
        <span>18309283552</span>
      </div>
    </div>
    <div id="buyMiddle">
      <!-- <div class="client-infor">
        <span>长孙静</span>
        <span>18309283552</span>
      </div> -->
      <div class="course-information">
        <p>商品信息</p>
        <div class="course">
          <div class="course-img">
            <img src alt />
          </div>
          <div class="course-price">
            <p>几个居然是个合肥见附件二五六结果立法机关</p>
            <p>¥</p>
          </div>
        </div>
      </div>
    </div>
    <div id="buy-footer">
      <div class="need-money">
      <p class="course-money">
          订单总价
          <span>¥457</span>
        </p>
        <!-- <p class="course-money">
          需付款
          <span>¥457</span>
        </p> -->
    </div>
      <!-- <p>实付<span>¥457</span></p> -->
      <div class="submitOrder">
        <span>提交订单</span>
      </div>
    </div>
    <!-- <payment/> -->
  </div>
</template>

<script>
import payment from '../../components/payment.vue'
export default {
  data() {
    return {
      confirmBuy:{}
    }
  },
  components:{
    payment
  },
  created() {
     this.$axios({
                method:'get',
                url:'http://192.168.0.108:8080/order/addOrderDirectly',
                params:{
                    uid:4,
                    courseId:1
                }
            }).then(res=>{
                this.confirmBuy = res.data.data;
                console.log(res.data.data);
            }).catch((error)=>{
                alert(error);
            });
  },
};
</script>
<style>
#buyHead {
  width: 100%;
  height: 2.415459rem;
  position: fixed;
  top: 0;
  border-bottom: 0.096618rem #eee solid;
}
#buyHead .myOrder {
  height: 1.207729rem;
  background-color: #eeeeee;
}
#buyHead .myOrder .goBack {
  display: inline-block;
  width: 1.207729rem;
  height: 1.207729rem;
  font: 0.724638rem "微软雅黑";
  padding-left: 0.241546rem;
}
#buyHead .myOrder span:nth-child(2) {
  display: inline-block;
  padding-left: 2.415459rem;
  font: 0.483092rem "微软雅黑";
}
#buyHead .client-infor {
  padding-left: .241546rem;
  height: 1.207729rem;
  margin: 0.241546rem 0;
}
#buyHead .client-infor span:nth-child(1) {
  font-size: 0.483092rem;
}
#buyHead .client-infor span:nth-child(2) {
  font-size: 0.434783rem;
}
#buyMiddle {
  width: 100%;
  position: absolute;
  top: 2.415459rem;
  bottom: .241546rem;
  overflow: auto;
  padding: 0.241546rem;
}
#buyMiddle .course-information > p {
  font-size: 0.57971rem;
}
#buyMiddle .course-information .course {
  width: 100%;
  height: 3.140097rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.362319rem 0;
  border-bottom: 0.096618rem solid #eeeeee;
}
#buyMiddle .course-information .course .course-img {
  width: 3.140097rem;
  height: 2.415459rem;
  background-color: pink;
  margin-right: 0.241546rem;
}
#buyMiddle .course-information .course img {
  width: 2.415459rem;
  height: 2.415459rem;
}
#buyMiddle .course-information .course .course-price p {
  font-size: 0.434783rem;
}
#buyMiddle .course-information .course .course-price p:nth-child(2) {
  color: red;
  margin-top: 0.193237rem;
}
#buy-footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 2.415459rem;
}
#buy-footer .need-money  > .course-money {
  font-size: .483092rem;
  width: 100%;
  margin-top: 0.241546rem;
  position: relative;
  padding-bottom: .169082rem;
  border-bottom: 0.096618rem solid #eeeeee;
}
#buy-footer .need-money > .course-money > span {
  font-size: 0.483092rem;
  color: red;
  position: absolute;
  right: 0.724638rem;
}
#buy-footer > .submitOrder {
  position: absolute;
  right: 0.241546rem;
  bottom:0;
  width: 2.898551rem;
  height: 1.207729rem;
  background-color: #ea6311;
  text-align: center;
  line-height: 1.207729rem;
  border-radius: 0.603865rem;
}
#buy-footer > .submitOrder > span {
  font-size: 0.434783rem;
  color: white;
}
</style>
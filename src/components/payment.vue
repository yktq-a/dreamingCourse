<template>
  <div>
      <div id="v_payment" v-show="payment">
      <div class="h_v_payment">
        <span class="back_payment">X</span>
        <span>确认付款</span>
      </div>
      <div>
        <p class="v-payment">¥346</p>
        <p>支付宝账号<span>2547698096587</span></p>
      </div>
      <div class="f_v_payment">立即付款</div>
    </div>
  </div>
</template>

<script>
export default {

}

</script>
<style>
#v_payment{
    width: 100%;
    height: 6.038647rem;
    position: fixed;
    bottom: 0;
    background-color: #eee;
}
</style>
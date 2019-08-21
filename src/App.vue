<template>
  <div id="app">
    <!-- <order/> -->
      <router-view/>
    <!-- <course-systems/> -->
<!-- <orderDetails/> -->
<!-- <registration/> -->
  </div>
</template>
<script>
import registration from './components/registration.vue'
/* import orderDetails from './pages/order/orderDetails.vue' */
/* import order from './pages/order/order.vue' */
/* import courseSystems from './pages/courseDetails/courseSystems.vue' */
export default {
    components:{
      /* registration */
       /* courseSystems */
      /* order */
      /* orderDetails */
    }
}
</script>
<style>
#app{
    width: 100%;
    height: 100%;
    background-color: #f4f4ee;
}
</style>
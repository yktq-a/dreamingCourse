<template>
  <footer>
    <div @click="goTo('/homePage')">
      <p class="icon iconfont" :class="{on:'/homePage'===$route.path}">&#xe60b;</p>
      <p :class="{on:'/homePage'===$route.path}">首页</p>
    </div>
    <div @click="goTo('/courseSort')">
      <p class="icon iconfont" :class="{on:'/courseSort'===$route.path}">&#xe60a;</p>
      <p :class="{on:'/courseSort'===$route.path}">分类</p>
    </div>
    <div @click="goTo('/myStudies')">
      <p class="icon iconfont" :class="{on:'/myStudies'===$route.path}">&#xe66e;</p>
      <p :class="{on:'/myStudies'===$route.path}">我的学习</p>
    </div>
    <div @click="goTo('/admin')">
      <p class="icon iconfont" :class="{on:'/admin'===$route.path}">&#xe605;</p>
      <p :class="{on:'/admin'===$route.path}">账号</p>
    </div>
  </footer>
</template>
<script>
export default {
  methods: {
    goTo(path) {
      this.$router.replace(path);
    }
  }
};
</script>


<style>
footer {
  width: 100%;
  height: 1.570048rem;
  position: fixed;
  bottom: 0;
}
footer div {
  width: 25%;
  height: 100%;
  float: left;
}
footer div .icon {
  font-size: 1.086957rem;
  color: #bfbfbf;
  text-align: center;
}
footer div p:nth-child(2) {
  font-size: 0.434783rem;
  text-align: center;
}
footer div .on {
  color: #6ac3c5;
}

</style>

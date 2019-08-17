<template>
  <div class="about-us">
    <!-- head -->
    <div class="about-head">
      <span @click="$router.back()">&lt;</span>
      <span>关于我们</span>
      <span></span>
    </div>
    <div class="about-content">
      <img src="../../static/imgs/logo.png" alt />
      <span>©版权归筑梦云课堂开发团队独家所有</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.$axios({
      method: "get",
      url: "http://yaobin.xyz/user/findAll",
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
      .then(response => {
        this.list = response.data;
      })
      .catch(err => {
        console.log("服务器异常" + err);
      });
  }
};
</script>

<style lang="scss">
.about-us {
  .about-head {
    width: 100%;
    height: 1.207729rem;
    background-color: #e5e5e5;
    padding: 0 0.386473rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    span {
      font-size: 0.483092rem;
    }
  }
  .about-content {
    width: 100%;
    position: absolute;
    height: 70%;
    top: 1.207729rem;
    margin: 1.932367rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    img {
      width: 6.280193rem;
    }
    span {
      font-size: 0.338164rem;
    }
  }
}
</style>
<template>
  <div class="announcement-details">
    <div class="announcement-details-head">
      <span @click="$router.back()">&lt;</span>
      <img src="../../static/imgs/公告.png" alt />
    </div>
    <div class="announcement-details-content">
      <ul>
        <li v-for="(item,index) in announcementContent" :key="index">
          <h4>{{ item.ntitle }}</h4>
          <p>{{ item.ncontent }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      announcementContent: []
    };
  },
  created() {
    this.$axios
      .get("http://192.168.0.111:8080/notice", {
        headers: {
          // "Content-Type": "application/x-www-form-urlencoded"
          "Content-Type": "application/json;charset=UTF-8"
        }
      })
      .then(res => {
        for (var i = 0; i < res.data.length; i++) {
          this.announcementContent.push(res.data[i]);
        }
        console.log(this.announcementContent);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss">
.announcement-details {
  width: 100%;
  .announcement-details-head {
    position: relative;
    span {
      font-size: 0.483092rem;
      display: inline-block;
      position: absolute;
      top: 0.241546rem;
      left: 0.241546rem;
      color: black;
    }
    img {
      width: 100%;
    }
  }
}
.announcement-details-content {
  width: 100%;
  background-color: #ccc;
  ul li {
    width: 100%;
    background-color: #fff;
    border-radius: 0.169082rem;
    padding: 0.241546rem;
    h4 {
      font-size: 0.434783rem;
      color: black;
      font-weight: 500;
    }
    p {
      font-size: 0.386473rem;
      color: #666;
      padding: 0.241546rem 0;
      line-height: 0.57971rem;
    }
  }
}
</style>

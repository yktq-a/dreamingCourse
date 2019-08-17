<template>
  <div class="sort-detailed">
    <div class="sort-detailed-head">
      <span @click="$router.back()">&lt;</span>
      <span>{{sortDetailed}}</span>
      <span class="iconfont" @click="toSearch">&#xe68f;</span>
    </div>
    <div
      class="course-classification"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <div
        class="course-classification-lists"
        v-for="(item,index) in courseClassification"
        :key="index"
      >
        <img :src="item.img" alt />
        <div class="right-content">
          <h4>{{ item.name }}</h4>
          <p>
            <span>￥ {{ item.new_price }}</span>
            <span>￥ {{ item.old_price }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortDetailed: "Java",
      courseClassification: [
        {
          name: "Android Hybrid App开发实战",
          new_price: "199",
          old_price: "99",
          img: "../../../static/imgs/course-classification.png"
        },
        {
          name: "Android Hybrid App开发实战 我命由我",
          new_price: "199",
          old_price: "99",
          img: "../../../static/imgs/course-classification.png"
        },
        {
          name: "Android Hybrid App开发实战",
          new_price: "199",
          old_price: "99",
          img: "../../../static/imgs/course-classification.png"
        },
        {
          name: "Android Hybrid App开发实战",
          new_price: "199",
          old_price: "99",
          img: "../../../static/imgs/course-classification.png"
        },
        {
          name: "Android Hybrid App开发实战",
          new_price: "199",
          old_price: "99",
          img: "../../../static/imgs/course-classification.png"
        },
        {
          name: "Android Hybrid App开发实战",
          new_price: "199",
          old_price: "99",
          img: "../../../static/imgs/course-classification.png"
        },
        {
          name: "Android Hybrid App开发实战",
          new_price: "199",
          old_price: "99",
          img: "../../../static/imgs/course-classification.png"
        },
        {
          name: "Android Hybrid App开发实战",
          new_price: "199",
          old_price: "99",
          img: "../../../static/imgs/course-classification.png"
        },
        {
          name: "Android Hybrid App开发实战",
          new_price: "199",
          old_price: "99",
          img: "../../../static/imgs/course-classification.png"
        },
        {
          name: "Android Hybrid App开发实战",
          new_price: "199",
          old_price: "99",
          img: "../../../static/imgs/course-classification.png"
        },
        {
          name: "Android Hybrid App开发实战",
          new_price: "199",
          old_price: "99",
          img: "../../../static/imgs/course-classification.png"
        },
        {
          name: "Android Hybrid App开发实战",
          new_price: "199",
          old_price: "99",
          img: "../../../static/imgs/course-classification.png"
        }
      ]
    };
  },
  methods: {
    toSearch() {
      this.$router.push({
        path: "/search"
      });
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        this.courseClassification = this.courseClassification.concat(this.courseClassification);
        this.loading = false;
      }, 3000);
    }
  }
};
</script>

<style lang="scss">
.sort-detailed-head {
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
  z-index: 10;
  span {
    font-size: 0.483092rem;
  }
  span:nth-child(2) {
    width: 80%;
    text-align: center;
  }
}
.course-classification {
  position: absolute;
  top: 1.207729rem;
  width: 100%;
  padding: 0 0.483092rem;
  .course-classification-lists {
    width: 100%;
    margin: 0.483092rem 0;
    display: flex;
    justify-content: space-between;
    img {
      width: 35%;
      height: 1.690821rem;
      border-radius: 0.144928rem;
      display: inline-block;
      box-shadow: 0.024155rem 0.048309rem 0.120773rem #000;
    }
    .right-content {
      width: 60%;
      max-height: 1.690821rem;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h4 {
        width: 100%;
        font-size: 0.386473rem;
        line-height: 0.531401rem;
      }
      p {
        width: 100%;
        span:nth-of-type(1) {
          color: red;
        }
        span:nth-of-type(2) {
          text-decoration: line-through;
        }
      }
    }
  }
}
</style>

<template>
  <div class="sort-detailed">
    <div class="sort-detailed-head">
      <span @click="$router.back()">&lt;</span>
      <span>{{sortDetailed}}</span>
      <span class="iconfont" @click="toSearch">&#xe68f;</span>
    </div>
    <div class="course-classification">
      <div
        class="course-classification-lists"
        v-for="(item) in courseClassification"
        :key="item.id" @click="goCourseDetails(item.id)"
      >
        <img :src="item.mainImage" alt />
        <div class="right-content">
          <h4>{{ item.name }}</h4>
          <p>
            <span>￥ {{ item.activityPrice }}</span>
            <span>￥ {{ item.price }}</span>
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
      sortDetailed: '',
      courseClassification: [
        {
          id:1,
          name: "Android Hybrid App开发实战",
          activityPrice: "199",
          price: "99",
          mainImage: "../../../static/imgs/course-classification.png"
        },
        {
          id:2,
          name: "Android Hybrid App开发实战 我命由我",
          activityPrice: "199",
          price: "99",
          mainImage: "../../../static/imgs/course-classification.png"
        },
        {
          id:3,
          name: "Android Hybrid App开发实战",
          activityPrice: "199",
          price: "99",
          mainImage: "../../../static/imgs/course-classification.png"
        },
        {
          id:4,
          name: "Android Hybrid App开发实战",
          activityPrice: "199",
          price: "99",
          mainImage: "../../../static/imgs/course-classification.png"
        },
        {
          id:5,
          name: "Android Hybrid App开发实战",
          activityPrice: "199",
          price: "99",
          mainImage: "../../../static/imgs/course-classification.png"
        },
        {
          id:6,
          name: "Android Hybrid App开发实战",
          activityPrice: "199",
          price: "99",
          mainImage: "../../../static/imgs/course-classification.png"
        },
        {
          id:7,
          name: "Android Hybrid App开发实战",
          activityPrice: "199",
          price: "99",
          mainImage: "../../../static/imgs/course-classification.png"
        },
        {
          id:8,
          name: "Android Hybrid App开发实战",
          activityPrice: "199",
          price: "99",
          mainImage: "../../../static/imgs/course-classification.png"
        },
        {
          id:9,
          name: "Android Hybrid App开发实战",
          activityPrice: "199",
          price: "99",
          mainImage: "../../../static/imgs/course-classification.png"
        },
        {
          id:10,
          name: "Android Hybrid App开发实战",
          activityPrice: "199",
          price: "99",
          mainImage: "../../../static/imgs/course-classification.png"
        },
        {
          id:11,
          name: "Android Hybrid App开发实战",
          activityPrice: "199",
          price: "99",
          mainImage: "../../../static/imgs/course-classification.png"
        },
        {
          id:12,
          name: "Android Hybrid App开发实战",
          activityPrice: "199",
          price: "99",
          mainImage: "../../../static/imgs/course-classification.png"
        }
      ]
    };
  },
  created() {
    /* console.log(this.$route.query.name) */
    name=this.$route.query.name;
    this.sortDetailed = name;
    this.$axios.get('http://b3n79z.natappfre.cc/getcourselist?name').then(res=>{
      this.courseClassification = res.data;
    })

  },
  methods: {
    toSearch() {
      this.$router.push({
        path: "/search"
      });
    },
    goCourseDetails(id){
      this.$router.push(
        {
        path:"/courseSystems",
        query:{
          id:id,
        }
      });
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
  }
}
.course-classification {
  position: absolute;
  top: 1.207729rem;
  width: 100%;
  padding: 0 0.483092rem;
  .course-classification-lists {
    width: 100%;
    margin: .483092rem 0;
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
        font-size: .386473rem;
        line-height: .531401rem;
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

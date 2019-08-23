<template>
  <div class="my-courses" :class="{coursesMarginTop: navBarFixed}">
    <ul>
      <li class="courses-lists" v-for="(item,index) in myCourses" :key="index">
        <img :src="item.img" alt />
        <div class="lists-content">
          <h4>{{ item.name }}</h4>
          <span>{{ item.subtitle }}</span>
          <span>讲师: {{ item.teacher }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myCourses: [
        {
          name: "Android Hybrid App开发实战",
          teacher: "哪吒",
          subtitle: "双剑合璧打造高效高质App1111",
          img: "../../../static/imgs/course-classification.png"
        },
        {
          name: "Android Hybrid App开发实战",
          teacher: "哪吒",
          subtitle: "双剑合璧打造高效高质App22222",
          img: "../../../static/imgs/course-classification.png"
        },
        {
          name: "Android Hybrid App开发实战",
          teacher: "哪吒",
          subtitle: "双剑合璧打造高效高质App3333",
          img: "../../../static/imgs/course-classification.png"
        },
        {
          name: "Android Hybrid App开发实战",
          teacher: "哪吒",
          subtitle: "双剑合璧打造高效高质App",
          img: "../../../static/imgs/course-classification.png"
        },
        {
          name: "Android Hybrid App开发实战",
          teacher: "哪吒",
          subtitle: "双剑合璧打造高效高质App",
          img: "../../../static/imgs/course-classification.png"
        },
        {
          name: "Android Hybrid App开发实战",
          teacher: "哪吒",
          subtitle: "双剑合璧打造高效高质App",
          img: "../../../static/imgs/course-classification.png"
        },
        {
          name: "Android Hybrid App开发实战",
          teacher: "哪吒",
          subtitle: "双剑合璧打造高效高质App",
          img: "../../../static/imgs/course-classification.png"
        },
        {
          name: "Android Hybrid App开发实战",
          teacher: "哪吒",
          subtitle: "双剑合璧打造高效高质App",
          img: "../../../static/imgs/course-classification.png"
        },
        {
          name: "Android Hybrid App开发实战",
          teacher: "哪吒",
          subtitle: "双剑合璧打造高效高质App",
          img: "../../../static/imgs/course-classification.png"
        },
        {
          name: "Android Hybrid App开发实战",
          teacher: "哪吒",
          subtitle: "双剑合璧打造高效高质App",
          img: "../../../static/imgs/course-classification.png"
        },
        {
          name: "Android Hybrid App开发实战",
          teacher: "哪吒",
          subtitle: "双剑合璧打造高效高质App",
          img: "../../../static/imgs/course-classification.png"
        },
        {
          name: "Android Hybrid App开发实战",
          teacher: "哪吒",
          subtitle: "双剑合璧打造高效高质App",
          img: "../../../static/imgs/course-classification.png"
        },
        {
          name: "Android Hybrid App开发实战",
          teacher: "哪吒",
          subtitle: "双剑合璧打造高效高质App",
          img: "../../../static/imgs/course-classification.png"
        }
      ]
    };
  },
  props: ["navBarFixed"],
  created() {
    this.getMyScourse();
  },
  methods: {
    getMyScourse() {
      this.$axios({
        method: "get",
        url: "http://192.168.0.107:8080/user/findViCourses",
        params: {
          uid: 1
        }
      })
        .then(response => {
          console.log(response.data);
          // this.practiceScourse = response.data;
        })
        .catch(err => {
          console.log("服务器异常" + err);
        });
    }
  }
};
</script>

<style lang="scss">
.coursesMarginTop {
  margin-top: 1.111111rem;
}
.my-courses {
  width: 100%;
  .courses-lists {
    width: 100%;
    height: 1.690821rem;
    padding: 0 0.483092rem;
    margin: 0.386473rem 0;
    display: flex;
    justify-content: space-between;
    img {
      width: 35%;
      border-radius: 0.193237rem;
    }
    .lists-content {
      width: 60%;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h4 {
        font-size: 0.434783rem;
        color: black;
      }
      span {
        font-size: 0.338164rem;
        color: #555;
      }
    }
  }
}
</style>
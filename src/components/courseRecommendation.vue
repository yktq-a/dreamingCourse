<template>
  <div class="recommend">
    <!-- 课程推荐头部 -->
    <div class="recommend-head">
      <span @click="$router.back()">&lt;</span>
      <span>课程推荐</span>
      <span class="iconfont">&#xe60a;全部</span>
    </div>
    <!-- 课程推荐内容 -->
    <section class="recommmend-content">
      <ul>
        <li v-for="(item,index) in recommendCourse" :key="index">
          <img :src="item.img" alt />
          <h4>{{item.name}}</h4>
          <span>{{item.detailed}}</span>
        </li>
      </ul>
      <div class="noMore">
        <span>没有更多了</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommendCourse: [
        {
          name: "微信小程序入门",
          img: "../../static/imgs/course1.jpg",
          detailed:
            "来自筑梦云课堂的大牛教你玩转微信小程序，名额有限，点击即看。"
        },
        {
          name: "微信小程序入门",
          img: "../../static/imgs/course1.jpg",
          detailed:
            "来自筑梦云课堂的大牛教你玩转微信小程序，名额有限，点击即看。"
        },
        {
          name: "微信小程序入门",
          img: "../../static/imgs/course1.jpg",
          detailed:
            "来自筑梦云课堂的大牛教你玩转微信小程序，名额有限，点击即看。"
        },
        {
          name: "微信小程序入门",
          img: "../../static/imgs/course1.jpg",
          detailed:
            "来自筑梦云课堂的大牛教你玩转微信小程序，名额有限，点击即看。"
        },
          {
          name: "微信小程序入门",
          img: "../../static/imgs/course1.jpg",
          detailed:
            "来自筑梦云课堂的大牛教你玩转微信小程序，名额有限，点击即看。"
        },
          {
          name: "微信小程序入门",
          img: "../../static/imgs/course1.jpg",
          detailed:
            "来自筑梦云课堂的大牛教你玩转微信小程序，名额有限，点击即看。"
        },
          {
          name: "微信小程序入门",
          img: "../../static/imgs/course1.jpg",
          detailed:
            "来自筑梦云课堂的大牛教你玩转微信小程序，名额有限，点击即看。"
        },
          {
          name: "微信小程序入门",
          img: "../../static/imgs/course1.jpg",
          detailed:
            "来自筑梦云课堂的大牛教你玩转微信小程序，名额有限，点击即看。"
        },
          {
          name: "微信小程序入门",
          img: "../../static/imgs/course1.jpg",
          detailed:
            "来自筑梦云课堂的大牛教你玩转微信小程序，名额有限，点击即看。"
        },

          {
          name: "微信小程序入门",
          img: "../../static/imgs/course1.jpg",
          detailed:
            "来自筑梦云课堂的大牛教你玩转微信小程序，名额有限，点击即看。"
        },
          {
          name: "微信小程序入门",
          img: "../../static/imgs/course1.jpg",
          detailed:
            "来自筑梦云课堂的大牛教你玩转微信小程序，名额有限，点击即看。"
        },
          {
          name: "微信小程序入门",
          img: "../../static/imgs/course1.jpg",
          detailed:
            "来自筑梦云课堂的大牛教你玩转微信小程序，名额有限，点击即看。"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.recommend-head {
  width: 100%;
  height: 1.207729rem;
  background-color: #e5e5e5;
  padding: 0 0.386473rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  position: fixed;
  left: 0;
  top: 0;
  span {
    font-size: 0.483092rem;
  }
  span:nth-child(1) {
    width: 1.15942rem;
  }
  span:nth-child(3) {
    font-size: 0.386473rem;
  }
}
.recommmend-content {
  width: 100%;
  position: absolute;
  top: 1.207729rem;
}
.recommmend-content li {
  width: 46%;
  height: 4.10628rem;
  img {
    width: 100%;
    height: 2.415459rem;
    border-radius: 0.120773rem;
  }
  h4 {
    width: 100%;
    height: 0.483092rem;
    font-size: 0.386473rem;
    font-family: "微软雅黑";
    text-align: left;
    margin: 0.144928rem 0;
  }
  span {
    width: 100%;
    height: 0.483092rem;
    font-size: 0.289855rem;
    line-height: 0.483092rem;
    text-align: left;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.recommmend-content ul {
  margin: 0.289855rem 0.120773rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
}
.noMore {
  width: 100%;
  text-align: center;
  margin: .241546rem auto;
  span {
    color: #666; 
  }
}
</style>

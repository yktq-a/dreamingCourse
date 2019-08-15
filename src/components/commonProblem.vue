<template>
  <div class="common-problem">
    <!-- 常见问题头部 -->
    <div class="problem-head">
      <span @click="$router.back()">&lt;</span>
      <span>常见问题</span>
      <span></span>
    </div>
    <!-- 问题列表 -->
    <div class="problem-lists">
      <ul class="problem-detailed-lists">
        <li v-for="(item,index) in problemLists" :key="index">
          <div class="problem-title" @click="problemShow(index)">
            <div>
              <span>*</span>
              <span>{{item.name}}</span>
            </div>
            <span :class="{active:item.problem}">></span>
          </div>
          <p v-show="item.problem">{{item.answer}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // problem: false,
      problemLists: [
        {
          name: "课程有效期是多久？",
          answer: 
            "课程有效期根据课程的不同而不同，一般的课程都为永久有效。请您在购买前仔细确认课程有效期，以免给您的学习带来不必要的麻烦。",
          problem: false,
        },
        {
          name: "已购买课程可以退吗？",
          answer:
            "课程有效期根据课程的不同而不同，一般的课程都为永久有效。请您在购买前仔细确认课程有效期，以免给您的学习带来不必要的麻烦。",
          problem: false,
        }
      ]
    };
  },
  methods: {
    problemShow(i) {
      this.problemLists[i].problem = !this.problemLists[i].problem;
    }
  }
};
</script>

<style lang="scss">
.problem-head {
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
}
.problem-head span {
  font-size: 0.483092rem;
}
.problem-lists {
  width: 100%;
  position: absolute;
  top: 1.207729rem;
  padding: 0.241546rem;
}
.problem-detailed-lists ul {
  width: 100%;
}
.problem-detailed-lists li {
  width: 100%;
  text-align: left;
  margin-bottom: 0.241546rem;
  p {
    width: 100%;
    line-height: 0.386473rem;
    padding: 0.144928rem;
  }
}
.problem-title {
  width: 100%;
  height: 0.531401rem;
  line-height: 0.531401rem;
  padding: 0 0.241546rem;
  display: flex;
  justify-content: space-between;
  div span {
    font-size: 0.386473rem;
  }
  span {
    font-size: 0.386473rem;
  }
  div span:nth-child(1) {
    color: red;
  }
}
.problem-title .active {
  transform: rotate(90deg);
  transition: all .3s linear;
}
</style>
<template>
  <div>
    <!-- 搜索头部 -->
    <div class="search-head">
      <span @click="$router.back()">&lt;</span>
      <div class="search-bar">
        <input
          class="search-input"
          type="text"
          placeholder="javascript Web前端"
          v-model="searchInput"
          @keyup="showCross"
        />
        <div class="delete-input" v-show="inputFlag" @click="emptyInput">
          <span class="iconfont">&#xe62a;</span>
        </div>
      </div>
      <span class="iconfont search-logo" @click="toSearch">&#xe68f;</span>
    </div>
    <!-- 搜索历史&热门搜索 -->
    <div class="search-content" v-show="!whetherSearch">
      <div class="search-history" v-show="historyFlag">
        <div class="clear-title">
          <span>搜索历史</span>
          <span @click="clearHistory">清空</span>
        </div>
        <div class="history-words">
          <span v-for="(item,index) of searchHistory" :key="index">{{item}}</span>
        </div>
      </div>
      <div class="popular-search">
        <div class="popular-title">
          <span>热门搜索</span>
          <span></span>
        </div>
        <div class="popular-words">
          <span v-for="(item,index) of popularSearch" :key="index">{{item}}</span>
        </div>
      </div>
    </div>

    <!-- 搜索结果 -->
    <template>
      <searchResults v-show="this.whetherSearch"></searchResults>
    </template>
  </div>
</template>

<script>
//搜索结果组件
import searchResults from "../components/searchResults";

export default {
  data() {
    return {
      inputFlag: false,
      whetherSearch: false,
      historyFlag: true,
      searchInput: "",
      searchHistory: ["Java", "HTML&CSS", "Python"],
      popularSearch: [
        "JavaScript",
        "HTML&CSS",
        "Python",
        "Java",
        "HTML&CSS",
        "Python"
      ]
    };
  },
  created() {
    this.getSeach();
  },
  components: {
    searchResults
  },
  methods: {
    showCross() {
      if (this.searchInput) {
        this.inputFlag = true;
      } else {
        this.inputFlag = false;
      }
    },
    emptyInput() {
      this.searchInput = "";
      this.inputFlag = false;
    },
    toSearch() {
      this.whetherSearch = true;
    },
    clearHistory() {
      this.historyFlag = false;
      this.searchHistory = [];
    },
    getSeach() {
      this.$axios({
        methods: "get",
        url: "http://192.168.1.35:8080/es/search",
        params: {
          name: "三国"
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
.search-head {
  width: 100%;
  height: 1.449275rem;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 0.241546rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.search-bar {
  width: 80%;
  height: 0.628019rem;
  position: relative;
}
.search-input {
  width: 100%;
  height: 0.724638rem;
  color: #a0a0a0;
  font-size: 0.434783rem;
  border: 0;
  border-radius: 0.193237rem;
  padding-left: 0.120773rem;
  background-color: #e0e0e0;
}
.search-head > span {
  display: inline-block;
  width: 0.483092rem;
  height: 0.483092rem;
  font-size: 0.628019rem;
  font-weight: 600;
  color: #666;
}
.delete-input {
  position: absolute;
  top: 0.072464rem;
  right: 0.120773rem;
}
.search-content {
  width: 100%;
  position: absolute;
  top: 1.449275rem;
}
.search-history,
.popular-search {
  width: 90%;
  margin: 0.241546rem auto;
}
.clear-title,
.popular-title {
  height: 0.57971rem;
  width: 100%;
  line-height: 0.57971rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.144928rem;
}
.clear-title span,
.popular-title span {
  font-size: 0.289855rem;
  color: #a0a0a0;
}
.clear-title span:nth-child(2) {
  color: #34afd8;
}
.popular-words,
.history-words {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}
.popular-words span,
.history-words span {
  display: inline-block;
  height: 0.483092rem;
  line-height: 0.483092rem;
  padding: 0 0.072464rem;
  color: #8f8c8b;
  font-size: 0.386473rem;
  border: 1px solid #8f8c8b;
  border-radius: 0.120773rem;
  margin: 0 0.120773rem;
  margin-bottom: 0.241546rem;
}
</style>
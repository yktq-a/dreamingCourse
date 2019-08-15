<template>
  <div class="search-results">
    <ul class="search-results-lists">
      <li v-for="(item,index) in searchResults" :key="index">
        <img :src="item.img" alt />
        <div class="right-content">
          <h4>{{ item.name }}</h4>
          <p>
            <span>￥ {{ item.new_price }}</span>
            <span>￥ {{ item.old_price }}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchResults: [
        {
          name: "Android Hybrid App开发实战",
          new_price: "199",
          old_price: "99",
          img: "../../static/imgs/course-classification.png"
        },
         {
          name: "Android Hybrid App开发实战",
          new_price: "199",
          old_price: "99",
          img: "../../static/imgs/course-classification.png"
        },
         {
          name: "Android Hybrid App开发实战",
          new_price: "199",
          old_price: "99",
          img: "../../static/imgs/course-classification.png"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.search-results {
  width: 100%;
  position: absolute;
  top: 1.449275rem;
  bottom: 0;
  .search-results-lists li {
    height: 1.932367rem;
    margin: .386473rem 0;
    padding: 0 .483092rem;
    display: flex;
    justify-content: space-between;
    img{
      width: 36%;
    }
    .right-content {
      width: 60%;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h4 {
        font-size: .434783rem;
        line-height: .531401rem;
        font-family: '微软雅黑'
      }
    }
  }
}
</style>

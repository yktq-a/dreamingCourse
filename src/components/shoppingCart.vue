<template>
  <div class="shopping-cart">
    <div class="shopping-cart-head">
      <span @click="$router.back()">&lt;</span>
      <span>我的购物车</span>
      <span></span>
    </div>
    <div class="total">共{{ this.course.length }}门课程</div>

    <div class="shopping-lists">
      <ul>
        <li v-for="(item, index) in course" :key="index">
          <div class="lists-top">
            <div class="selection-box" @click="changeChoice(item)">
              <span v-show="!item.select" class="multiple-unselected iconfont">&#xe620;</span>
              <span v-show="item.select" class="multiple-selected iconfont">&#xe60d;</span>
            </div>
            <div class="course-details">
              <img :src="item.cover" alt />
              <div class="course-introduction">
                <h4>{{ item.titel }}</h4>
                <span>￥ {{ item.price }}</span>
              </div>
            </div>
            <span class="delete">删除</span>
          </div>
          <p class="subtotal">
            小计:
            <span>{{ }}</span>元
          </p>
        </li>
      </ul>
    </div>

    <!-- 底部合计模块 -->
    <div class="footer-settlement">
      <div class="selection-box" @click="changeSelectAll">
        <span v-show="!allSelect" class="multiple-unselected iconfont">&#xe620;</span>
        <span v-show="allSelect" class="multiple-selected iconfont">&#xe60d;</span>
      </div>
      <div class="total-price">
        合计:
        <span>{{ totalPrice }}</span>
      </div>
      <div class="settlement" @click="gopayment">去结算</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalPrice: "666",
      allSelect: false, //全选按钮状态
      course: [
        {
          price: "39.9",
          cover: "../../../static/imgs/course1.jpg",
          titel: "Angular 2 劲爆来袭 打造你的今日头条"
        },
        {
          price: "39.9",
          cover: "../../../static/imgs/course1.jpg",
          titel: "Angular 2 劲爆来袭 打造你的今日头条"
        },
        {
          price: "39.9",
          cover: "../../../static/imgs/course1.jpg",
          titel: "Angular 2 劲爆来袭 打造你的今日头条"
        }
      ]
    };
  },
  mounted: function() {
    var that = this;
    that.course.map(function(item) {
      that.$set(item, "select", false);
    });
  },
  methods: {
    gopayment(){
      this.$router.push({
        path:'/confirmBuy'
      });
    },
    changeChoice(i) {
      //单个选中
      i.select = !i.select;
    },
    changeSelectAll() {
      //切换全选
      this.allSelect = !this.allSelect;
      for (let i = 0; i < this.course.length; ++i) {
        this.course[i].select = this.allSelect;
      }
    }
  }
};
</script>

<style lang="scss">
.shopping-cart-head {
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
.shopping-cart-head span {
  font-size: 0.483092rem;
}
.total {
  width: 100%;
  height: 0.483092rem;
  font-size: 0.386473rem;
  color: #666;
  line-height: 0.483092rem;
  text-align: left;
  padding-left: 0.241546rem;
  position: fixed;
  left: 0;
  top: 1.207729rem;
}
.shopping-lists {
  width: 100%;
  position: absolute;
  top: 1.690821rem;
  bottom: 1.570048rem;
  overflow: auto;
}
.shopping-lists li {
  margin: 0.386473rem 0;
  border-bottom: 0.241546rem solid #ddd;
}
.lists-top {
  width: 90%;
  height: 3.140097rem;
  margin: 0 auto;
  height: 1.835749rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  .selection-box {
    width: 0.483092rem;
    height: 0.483092rem;
  }
}
.multiple-unselected {
  width: 0.483092rem;
  height: 0.483092rem;
  font-size: 0.434783rem;
}
.multiple-selected {
  width: 0.483092rem;
  height: 0.483092rem;
  font-size: 0.483092rem;
  color: #eb6100;
}
.course-details {
  width: 7.246377rem;
  display: flex;
  justify-content: space-between;
}
.course-details img {
  width: 2.898551rem;
  height: 1.690821rem;
}
.course-introduction {
  width: 4.202899rem;
  height: 1.690821rem;
  display: flex;
  flex-direction: column;
  align-items: space-between;
}
.course-introduction h4 {
  display: inline-block;
  width: 4.202899rem;
  height: 1.449275rem;
  line-height: 0.483092rem;
  text-align: left;
}
.course-introduction span {
  width: 4.347826rem;
  text-align: left;
}
.delete {
  height: 1.690821rem;
  line-height: 1.690821rem;
  font-size: 0.338164rem;
}
.subtotal {
  width: 100%;
  height: 0.434783rem;
  padding-right: 0.483092rem;
  margin-top: 0.241546rem;
  text-align: right;
}
.footer-settlement {
  width: 100%;
  height: 1.570048rem;
  background-color: #eee;
  position: fixed;
  left: 0;
  bottom: 0;
  .selection-box {
    width: 0.483092rem;
    height: 0.483092rem;
    position: absolute;
    left: 0.555556rem;
    top: 0.555556rem;
  }
}
.total-price {
  width: 4.10628rem;
  height: 1.570048rem;
  line-height: 1.570048rem;
  color: #333;
  font-size: 0.434783rem;
  position: absolute;
  right: 2.898551rem;
  top: 0;
}
.total-price span {
  color: #eb6100;
  font-size: 0.434783rem;
  line-height: 1.570048rem;
}
.settlement {
  width: 2.898551rem;
  height: 1.570048rem;
  background-color: #eb6100;
  font-size: 0.57971rem;
  color: #fff;
  line-height: 1.570048rem;
  text-align: center;
  position: absolute;
  right: 0;
  top: 0;
}
</style>

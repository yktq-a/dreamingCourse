<!-- 购物车组件 -->

<template>
  <div class="shopping-cart">
    <div class="shopping-cart-head">
      <span @click="$router.back()">&lt;</span>
      <span>我的购物车</span>
      <span></span>
    </div>
    <!-- 购物车删除弹窗 -->
    <div class="Pop-ups" v-show="detePopup">
      <span>确定要将该课程移出购物车？</span>
      <div>
        <span @click="confirmDeteCourse">确认</span>
        <span @click="undeleteCourse">取消</span>
      </div>
    </div>
    <div class="shopping-content" :class="{shopping_content_active:detePopup}">
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
              <span class="delete" @click="deteCourse(index)">删除</span>
            </div>
            <p class="subtotal">
              小计:
              <span>{{ }}</span>元
            </p>
          </li>
        </ul>
      </div>

      <!-- 底部合计模块 -->
      <div class="footer-settlement" :class="{footer_settlement_active:detePopup}">
        <div class="selection-box" @click="changeSelectAll">
          <span v-show="!allSelect" class="multiple-unselected iconfont">&#xe620;</span>
          <span v-show="allSelect" class="multiple-selected iconfont">&#xe60d;</span>
        </div>
        <div class="total-price">
          合计:
          <span>{{ totalPrice }}</span>
        </div>
        <div class="settlement">去结算</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detePopup: false,
      n: 0,
      count: 0,
      totalPrice: "666",
      allSelect: false, //全选按钮状态
      course: [
        {
          price: "39.9",
          cover: "../../../static/imgs/course1.jpg",
          titel: "Angular 2 劲爆来袭 打造你的今日头条111"
        },
        {
          price: "39.9",
          cover: "../../../static/imgs/course1.jpg",
          titel: "Angular 2 劲爆来袭 打造你的今日头条222"
        },
        {
          price: "39.9",
          cover: "../../../static/imgs/course1.jpg",
          titel: "Angular 2 劲爆来袭 打造你的今日头条333"
        }
      ]
    };
  },
  created(){
    this.getShopCart()
  },
  mounted: function() {
    var that = this;
    that.course.map(function(item) {
      that.$set(item, "select", false);
    });
  },
  methods: {
    changeChoice(i) {
      //单个选中
      var that = this;
      //每一次点击计数清零 否则会累积
      that.count = 0;
      i.select = !i.select;
      that.course.forEach(item => {
        if (item.select === true) {
          that.count++;
        }
      });
      if (that.count == that.course.length) {
        that.allSelect = true;
      } else {
        that.allSelect = false;
      }
    },
    changeSelectAll() {
      //切换全选
      this.allSelect = !this.allSelect;
      for (let i = 0; i < this.course.length; ++i) {
        this.course[i].select = this.allSelect;
      }
    },
    deteCourse(index) {
      this.detePopup = true;
      this.n = index;
    },
    undeleteCourse() {
      this.detePopup = false;
    },
    confirmDeteCourse() {
      this.course.splice(this.n, 1);
      this.detePopup = false;
    },
    //请求购物车数据
    getShopCart() {
      this.$axios({
        methods: "get",
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
.Pop-ups {
  width: 70%;
  height: 3.140097rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  > span {
    background-color: #7da2e7;
    display: inline-block;
    width: 100%;
    height: 1.690821rem;
    text-align: center;
    line-height: 1.690821rem;
    font-size: 0.483092rem;
    color: #f8264d;
  }
  div {
    background-color: #fff;
    width: 100%;
    height: 1.449275rem;
    span {
      display: inline-block;
      width: 48%;
      height: 1.449275rem;
      text-align: center;
      line-height: 1.449275rem;
      font-size: 0.434783rem;
    }
  }
}
.shopping_content_active {
  background-color: #ccc;
}
.shopping-cart .shopping-content {
  width: 100%;
  position: absolute;
  top: 1.207729rem;
  bottom: 1.570048rem;
  overflow: auto;
}
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
  top: 0.483092rem;
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
.shopping-content .footer_settlement_active {
  background-color: #ccc;
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

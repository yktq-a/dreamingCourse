<template>
  <div>
      <div id="v-heade">
                <div class="search" @click="toSearch">
                    <input type="text" placeholder="算法.Vue.Js." disabled>
                    <i class="icon iconfont">&#xe68f;</i>
                </div>
                <div class="shopping" @click="goShopping"><i class="icon iconfont">&#xe60c;</i></div>
      </div>
            <section>
                <div class="left">
                    <ul>
                    <li v-for="(item, index) in classes" :key="index"  class="htmls" :class="{on: index===current}"
                     @click="onclass(index)"><span>{{item}}</span></li>
                    </ul>
                </div>
                <ul class="right">
                    <li v-for="(item, index) in schedule" :key="index" @click="goDetailed">{{item}}</li>
                </ul>
            </section>
            <footerGuide/>
  </div>
</template>
<script>
import  footerGuide from '../../components/footerGuide.vue'
export default {
    data(){
        return{
            current:0,
            classes:['前端开发','后端开发','云计算与大数据','运维与测试','UI设计'],
            schedule:['HTML/CSS','JavaScript','Vue.js','React.JS','Angular','Node.js','jQuery','BootStrap','小程序']
        }
    },
    components:{
        footerGuide
    },
    methods:{
        toSearch() {
      this.$router.push({
        path: "/search"
      });
    },
    goDetailed(){
        this.$router.push({
            path:"/sortDetailed"
        });
    },
        onclass(index){
            this.current = index;
        },
        goShopping(){
            this.$router.push({
                path:'/shoppingCart'
            });
        }
        
    }

}

</script>
<style>
        #v-heade{
            width: 100%;
            height: 1.618357rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: fixed;
            top: 0;
        }
        #v-heade .search{
            position: relative;
        }
        #v-heade .search input{
            width: 6.280193rem;
            height: .869565rem;
            background-color: #eee;
            border-radius: 0.434778rem;
            color: #828179;
            line-height: .869565rem; 
            font-size: .434783rem;
            text-align: center;
            border: none;
        }
        #v-heade .shopping i{
           font-size: .966184rem;
        }
        #v-heade .search i{
           font-size:.57971rem;
           position: absolute;
           left: .821256rem;
           top: .241546rem;
        }
        #v-heade .search span{
            color: #828179;
            height:.869565rem;
            line-height: .869565rem; 
            font-size: .434783rem;
        }
        section .left ul{
            width: 2.512077rem;
            height: 14.613527rem;
            background-color: #eee;
            position: fixed;
            top:  1.618357rem;
            bottom: 1.570048rem;
            float: left;
        }
        section .left ul li{
            height: 2.922705rem;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            border-bottom: .024155rem solid #4d5353;

        }
        section .left ul li span{
            font: bold .483092rem '宋体';
        }
        section{
            width: 100%;
            position: absolute;
            top:  1.618357rem;
            bottom: 1.570048rem;
            overflow: auto;
        }
        section .left .on{
            background-color: #cfe4d2;
        }
       section .right{
            margin-left: 2.512077rem;
            overflow: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-content: space-between;
            padding: 0 .241546rem;
        }
 section .right li{
            height: 2.415459rem;
            width: 3.381643rem;
            background-color: #cfe4d2;
            margin-bottom: .241546rem;
             text-align: center; 
          font-size: .603865rem;
          line-height: 2.415459rem;
          border-radius: .241546rem;
        }
</style>
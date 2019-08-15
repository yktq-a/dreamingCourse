<template>
  <ul class="right">
                    <li v-for="(item, index) in schedule" :key="index"><span>{{item}}</span></li>
                </ul>
</template>

<script>
export default {
  data(){
    return{
      schedule:['HTML/CSS','JavaScript','Vue.js','React.JS','Angular','Node.js','jQuery','BootStrap','小程序']
    }
  }
}

</script>
<style>
  .right{
            margin-left: 2.512077rem;
            overflow: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-content: space-between;
            padding: 0 .241546rem;
        }
 .right li{
            height: 2.415459rem;
            width: 3.381643rem;
            background-color: #eeeeee;
            padding: .483092rem;
           /*  margin-left: .241546rem; */
            margin-bottom: .241546rem; 
        }
        .right li span{
          font-size: .603865rem;
        }
</style>
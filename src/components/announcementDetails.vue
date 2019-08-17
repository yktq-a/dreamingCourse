<template>
  <div class="announcement-details">
    <div class="announcement-details-head">
      <span @click="$router.back()">&lt;</span>
      <img src="../../static/imgs/公告.png" alt="">
    </div>
    <div class="announcement-details-content">
      <ul>
        <li v-for="(item,index) in announcementContent" :key="index" >
          <h4>{{ item.title }}</h4>
          <p>{{  item.content }}</p>          
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      announcementContent: [
        { title:'新人礼包大放送1' ,content:'哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'},
        { title:'新人礼包大放送2' ,content:'哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'},
        { title:'新人礼包大放送3' ,content:'哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'}
      ]
    }
  }
}
</script>

<style lang="scss">
.announcement-details {
  width: 100%;
  .announcement-details-head {
    position: relative;
    span {
      font-size: .483092rem;
      display: inline-block;
      position: absolute;
      top: .241546rem;
      left: .241546rem;
      color: black;
    }
    img{
      width: 100%;
    }
  }
}
.announcement-details-content {
  width: 100%;
  background-color: #ccc;
  ul li {
    width: 100%;
    background-color: #fff;
    border-radius: .169082rem;
    padding: .241546rem;
    h4 {
      font-size: .434783rem;
      color: black;
      font-weight: 500;
    }
    p {
      font-size: .386473rem;
      color: #666;
      padding: .241546rem 0;
      line-height: .57971rem;
    }
  }
}
</style>

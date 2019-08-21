<template>
  <div>
      <video controls id="myVideo" ref="vo" :src="src"></video>
  </div>
</template>

<script>
export default {
    data(){
        return{
            videoLink:'../../../static/Intermission-Walk-in.ogv'
        }
    },
    created() {
        this.$axios({
            method:"get",
            url:"/getcourse",
            params:{
                userld:userld
            }
        }).then(res=>{
            this.videoLink = res.data;
        }).catch((error)=>{
            console.log(error);
        })
    },
    mounted() {
      this.$refs.vo.play();
      this.isPlay = !this.isPlay ;
    },
}

</script>
<style>
 #myVideo{
  width: 100%;
  height: 5.555556rem;
  position: absolute;
  top: 0;
}
</style>
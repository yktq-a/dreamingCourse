<template>
  <div>
    <div class="up">
      <button @click="$router.back()">X</button>
      <span>处理结果</span>
    </div>
    <div class="content">
      <div>
        <span>√</span>
      </div>
      <p>重置密码成功!</p>
      <button @click="back">返回登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    back(){
      this.$router.push({
        path: "/login"
      })
    }
  }
}
</script>

<style scoped>
div .up {
  width: 100%;
  height: 1.207729rem;
  background-color: #ccc;
  position: relative;
  margin-bottom: 1.207729rem;
}
div .up button {
  width: 1.207729rem;
  height: 1.207729rem;
  line-height: 1.207729rem;
  text-align: center;
  font-size: 0.57971rem;
  border: none;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0.241546rem;
}
div .up span{
  display: inline-block;
  width: 100%;
  height: 100%;
  line-height: 1.207729rem;
  text-align: center;
  font-size: 0.57971rem;
}
div .content {
  width: 100%;
  height: 6.038647rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
div .content div{
  width: 2.415459rem;
  height: 2.415459rem;
  border-radius: 50%;
}
div .content div span{
  display: block;
  width:100%;
  height: 100%;
  background-color: green;
  line-height: 2.415459rem;
  font-size: 1.449275rem;
  border-radius: 50%;
  color: white;
  text-align: center;
  transform: rotate(16deg);
}
div .content p{
  font-size: .57971rem;
  font-weight: bold;
  font-family: 微软雅黑;
}
div .content button {
  display: block;
  width: 7.729469rem;
  height: 1.086957rem;
  background-color: #448aca;
  color: white;
  font-size: 0.724638rem;
  border: none;
}
</style>

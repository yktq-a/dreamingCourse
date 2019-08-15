<template>
  <div>
    <div class="up">
      <button @click="$router.back()">X</button>
      <button @click="register('/registration')">注册</button>
    </div>
    <p>账号登录</p>
    <div class="input">
      <input type="text" placeholder="手机号" />
      <input type="password" placeholder="密码" />
      <button>登录</button>
    </div>
    <div class="fail">
      <span>短信验证登录</span>
      <span>忘记密码</span>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {};
  },
  methods: {
    register() {
      this.$router.push({
        path: "/registration"
      });
    }
  }
};
</script>

<style scoped>
div .up {
  width: 100%;
  height: 1.207729rem;
  background-color: #ccc;
  position: relative;
}
div .up button:nth-of-type(1) {
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
div .up button:nth-of-type(2) {
  width: 2.415459rem;
  height: 1.207729rem;
  border-radius: 0.362319rem;
  line-height: 1.207729rem;
  font-size: 0.57971rem;
  text-align: center;
  border: none;
  position: absolute;
  right: 0.241546rem;
  top: 0;
}
div p {
  width: 100%;
  height: 0.724638rem;
  text-align: center;
  font-size: 0.724638rem;
  line-height: 0.724638rem;
  font-family: 微软雅黑;
  margin-top: 1.086957rem;
  margin-bottom: 0.966184rem;
}
div .input {
  width: 100%;
  height: 4.830918rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
div .input input {
  display: block;
  width: 7.729469rem;
  height: 0.869565rem;
  border: none;
  border-radius: 0.362319rem;
  padding-left: 0.483092rem;
  background-color: #e5e5e5;
  font-size: 0.434783rem;
}
div .input button {
  display: block;
  width: 7.729469rem;
  height: 1.086957rem;
  background-color: #448aca;
  color: white;
  font-size: 0.724638rem;
  border: none;
}
div .fail {
  width: 100%;
  height: 1.014493rem;
  display: flex;
  justify-content: space-around;
  font-family: "微软雅黑";
  font-size: 0.31401rem;
  font-weight: bold;
}
</style>

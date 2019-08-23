<template>
  <div>
    <div class="up">
      <button @click="$router.back()">X</button>
      <button @click="register">注册</button>
    </div>
    <p>短信验证登录</p>
    <div class="input">
      <input type="text" placeholder="手机号" v-model="phone" />
      <div class="confirm">
        <input type="text" placeholder="请输入验证码" v-model="code" />
        <span v-show="sendCode" @click="getcaptcha">获取验证码</span>
        <span v-show="!sendCode">{{downTime}}秒</span>
      </div>
      <button @click="notepass">登录</button>
    </div>
    <div class="fail">
      <span @click="forget">忘记密码</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sendCode: true,
      downTime: 0,
      phone: "",
      code: "",
    };
  },
  methods: {
    register() {
      this.$router.push({
        path: "/registration"
      });
    },
    forget(){
      this.$router.push({
        path: "/inputusername"
      });
    },
    getcaptcha(){
      let postdata = this.$qs.stringify({
        phone:this.phone
      });
      this.$axios(
        {
        method: "post",
        url: "http://192.168.0.115/hello/code",
        data: postdata
        }
      )
      .then((data)=>{
        if(data.data){
          this.sendCode = false;
          this.downTime = 60;
          var timer = setInterval(()=>{
          this.downTime--;
          if(this.downTime<=0){
              this.sendCode = true;
              clearInterval(timer);
            }
          },1000)
        }else{
          alert("手机号错误！");
        }
      })
    },
    notepass(){
      let postdata = this.$qs.stringify({
        code:this.code
      });
      this.$axios(
        {
        method: "post",
        url: "http://192.168.0.115/hello/yanzhengma",
        data: postdata
        }
      )
      .then((res)=>{
        if(res.data==true){
          this.$router.push({
            path: "/homepage",
          })
        }
      })
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
div .input .confirm {
  width: 7.729469rem;
  height: 0.869565rem;
  position: relative;
}
div .input .confirm span {
  width: 1.811594rem;
  height: 0.386473rem;
  position: absolute;
  right: 0.483092rem;
  line-height: 0.386473rem;
  top: 0.241546rem;
  border-left: 1px black solid;
  font-weight: bold;
  text-align: center;
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

<template>
  <div>
    <div class="up">
      <button @click="$router.back()">X</button>
      <button @click="load">登录</button>
    </div>
    <p class="registr">注册</p>
    <div class="input">
      <input type="text" placeholder="请输入用户名" v-model="username" />
      <input type="text" placeholder="请输入手机号" v-model="phone" />
      <input type="text" placeholder="请输入密保问题" v-model="question" />
      <input type="text" placeholder="请输入问题密码" v-model="answer" />
      <input type="password" placeholder="请输入密码" v-model="password" />
      <input type="password" placeholder="确认密码" v-model="confirmpassword" />
      <button @click="regist">注册</button>
    </div>
    <div class="agree">
      注册即代表同意
      <span @click="agree">注册协议</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sendCode: true,
      downTime: 0,
      username: "",
      password: "",
      email: "",
      phone: "",
      question: "",
      answer: "",
      image: "",
      code: "",
      confirmpassword: "",
    };
  },
  methods: {
    load() {
      this.$router.push({
        path: "/login"
      });
    },
    agree(){
      this.$router.push({
        path: "/agreement"
      })
    },
    regist(){
      let postdata = this.$qs.stringify({
        username:this.username,
        password: this.password,
        email: this.email,
        phone: this.phone,
        question: this.question,
        answer: this.answer,
        image: this.image,
        code: this.code,
      });
      if(this.password == this.confirmpassword){
        this.$axios(
          {
          method: "post",
          url: "http://192.168.0.115/hello/istrue",
          data: postdata
          }
        )
        .then((res)=>{
          if(res.data==true){
            this.$router.push({
              path: "/login",
            })
          }
        })
        }
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
div .registr {
  width: 100%;
  height: 0.724638rem;
  text-align: center;
  font-size: 0.724638rem;
  line-height: 0.724638rem;
  font-family: 微软雅黑;
  margin-top: 1.086957rem;
  margin-bottom: 0.966184rem;
  letter-spacing: 0.362319rem;
}
div .input {
  width: 100%;
  height: 8.454106rem;
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
  padding-right: 0.483092rem;
  background-color: #e5e5e5;
  font-size: 0.434783rem;
}
div .input .choosehead{
  width: 2.415459rem;
  height: 2.415459rem;
  background-color: rgba(132,132,132,0.5);
  border-radius: 50%;
  text-align: center;
  position: relative;
}
div .input .choosehead input{
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgba(132,132,132,0.5);
  border-radius: 50%;
  opacity: 0;
}
div .input .choosehead p{
  width: 2.415459rem;
  height: 2.415459rem;
  font-size: .483092rem;
  color: grey;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -1.207729rem;
  margin-top: -0.2657rem;
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
  font-size: 0.57971rem;
  border: none;
}
div .agree {
  text-align: center;
  margin-top: 0.483092rem;
}
div .agree span {
  color: #448aca;
}
</style>

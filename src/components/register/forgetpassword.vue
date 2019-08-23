<template>
  <div>
    <div class="up">
      <button @click="$router.back()">X</button>
      <button @click="register">注册</button>
    </div>
    <p>找回密码</p>
    <div class="input">
      <div>
        您的问题为:
        <span>{{question}}</span>
      </div>
      <div>
        请输入答案:
      </div>
      <input type="text" v-model="answer" />
      <button @click="pass">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "",
      answer: "",
      username: "",
    };
  },
  created: function() {
    this.question = this.$route.query.question
    this.username = this.$route.query.username
  },
  methods: {
    register() {
      this.$router.push({
        path: "/registration"
      });
    },
    pass(){
      let postdata = this.$qs.stringify({
        username : this.username,
        answer: this.answer,
      });
      this.$axios(
        {
        method: "post",
        url: "http://192.168.0.115/hello/input",
        data: postdata
        }
      )
      .then((res)=>{
        if(res.data=="input"){
          this.$router.push({
            path: "/newpassword",
            query: {
              username: this.username
            }
          });
        }else{
          alert("密码错误");
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
div .input div {
  display: block;
  width: 7.729469rem;
  height: 0.869565rem;
  line-height: 0.869565rem;
  border: none;
  padding-left: 0.483092rem;
  font-size: 0.434783rem;
}
div .input input {
  display: block;
  width: 7.729469rem;
  height: 0.869565rem;
  line-height: 0.869565rem;
  border: none;
  border-radius: 0.362319rem;
  padding-left: 0.483092rem;
  background-color: #e5e5e5;
  font-size: 0.434783rem;
}
div .input div span{
  font-size: 0.434783rem;
  line-height: 0.869565rem;
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
</style>

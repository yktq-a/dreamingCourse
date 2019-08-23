<template>
  <div>
    <div class="up">
      <button @click="$router.back()">X</button>
    </div>
    <div class="box">
      <div class="input">
        请输入用户名:
      </div>
      <input type="text" v-model="username" />
      <button @click="pass">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      question: "",
    }
  },
  methods: {
    pass(){
      let postdata = this.$qs.stringify({
        username : this.username
      });
      this.$axios(
        {
        method: "post",
        url: "http://192.168.0.115/hello/yrename",
        data: postdata
        }
      )
      .then((res)=>{
        if(res.data=="用户不存在"){
          alert("用户不存在");
          return false;
        }else{
          this.question = res.data;
          this.$router.push({
            path: "/forgetpassword",
            query: {
              username: this.username,
              question: this.question,
            }
          });
        }
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
div .box {
  width: 100%;
  height: 4.830918rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
div .box .input{
  display: block;
  width: 7.729469rem;
  height: 0.869565rem;
  line-height: 0.869565rem;
  border: none;
  padding-left: 0.483092rem;
  font-size: 0.434783rem;
}
div .box input {
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
div .box button {
  display: block;
  width: 7.729469rem;
  height: 1.086957rem;
  background-color: #448aca;
  color: white;
  font-size: 0.724638rem;
  border: none;
}
</style>

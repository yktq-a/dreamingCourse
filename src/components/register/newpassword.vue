<template>
  <div>
    <div class="up">
      <button @click="$router.back()">X</button>
      <span>设置密码</span>
    </div>
    <form action="">
      <div>新密码:</div>
      <input type="password" placeholder="请输入新密码" v-model="password" />
      <button @click="confirmpassword">确认</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    }
  },
  created: function(){
    this.username = this.$route.query.username
  },
  methods: {
    confirmpassword(){
      let postdata = this.$qs.stringify({
        password: this.password,
        username : this.username,
      });
      this.$axios(
        {
        method: "post",
        url: "http://192.168.0.115/hello/yanzheng",
        data: postdata
        }
      )
      .then((res)=>{
        if(res.data=="hello"){
          this.$router.push({
            path: "/result",
          });
        }
      })
      
    },
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
div form {
  width: 100%;
  height: 3.623188rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
div form button {
  display: block;
  width: 7.729469rem;
  height: 1.086957rem;
  background-color: #448aca;
  color: white;
  font-size: 0.724638rem;
  border: none;
}
div form div {
  width: 7.729469rem;
  height: 0.869565rem;
  line-height: 0.869565rem;
  padding-left: .241546rem;
  font-size: 0.434783rem;
  font-weight: bold;
}
div form input {
  display: block;
  width: 7.729469rem;
  height: 0.869565rem;
  border: none;
  border-radius: 0.362319rem;
  padding-left: 0.483092rem;
  background-color: #e5e5e5;
  font-size: 0.434783rem;
}
</style>

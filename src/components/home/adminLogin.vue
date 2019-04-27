<template>
  <div>
    <label>用户名</label>
    <input type="text" v-model="username">
    <p></p>
    <label>密&nbsp;&nbsp;&nbsp;码</label>
    <input type="password" v-model="password">
    <p></p>
    <button @click="login()">登录</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (this.username == "admin" && this.password == "19961220") {
        this.$router.push("/adminN")
      } else {
        alert("用户名密码错误")
      }
    }
  }
};
</script>


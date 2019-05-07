<template>
  <div class="login">
    <div class="container">
      <form class="form-horizontal innerPageCon_1">
        <div class="form-group">
          <label for="username" class="col-sm-3 control-label">用户名</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              v-model="username"
              placeholder="admin"
            >
          </div>
        </div>
        <div class="form-group">
          <label for="password" class="col-sm-3 control-label">密码</label>
          <div class="col-sm-9">
            <input
              type="password"
              class="form-control"
              v-model="password"
            >
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-3 col-sm-9 btnDiv">
            <button class="btn btn-default login2" @click="login()">登录</button>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-3 col-sm-9 error">{{msg}}</div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      msg: ""
    };
  },
  methods: {
    login() {
      if (this.username == "admin" && this.password == "19961220") {
        this.$router.push("/adminN")
      } else {
        this.msg = "用户名或密码错误"
        return;
      }
    }
  }
};
</script>
<style scoped>
.login {
  width: 100%;
  height: 780px;
  background-image: url("../../static/img/admin.jpg");
  background-size: cover;
}
.innerPageCon_1 {
  width: 420px;
  margin-top: 180px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  padding: 50px 30px 50px 30px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation: appear-up 1s ease;
  -moz-animation: appear-up 1s ease;
  -o-animation: appear-up 1s ease;
  animation: appear-up 1s ease;
}
input {
  border: solid 1px #3a3a3a;
}
.login2 {
  border: solid 1px #3a3a3a;
  padding: 5px 40px;
}
.login2:focus {
  background-color: white;
}
.login2:hover {
  background-color: #3a3a3a;
  color: white;
}
.error {
  color: red;
}
</style>


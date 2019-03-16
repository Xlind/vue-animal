<!-- 注册 -->
<template>
  <div class="register">
    <div class="container">
      <form class="form-horizontal innerPageCon_1" id="regiterform" @submit.prevent="registerData">
        <div class="form-group">
          <label for="name" class="col-sm-3 control-label">用户名</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" placeholder="请输入用户名" v-model="regist.username">
          </div>
        </div>
        <div class="form-group">
          <label for="email" class="col-sm-3 control-label">邮箱</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" placeholder="请输入邮箱" v-model="regist.email">
          </div>
        </div>
        <div class="form-group">
          <label for="password" class="col-sm-3 control-label">密码</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" placeholder="请输入密码" v-model="regist.password">
          </div>
        </div>
        <div class="form-group">
          <label class="radio-inline col-sm-3 control-label">
            <input type="radio" v-model="regist.sex" value="0">男
          </label>
          <label class="radio-inline">
            <input type="radio" v-model="regist.sex" value="1">女
          </label>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default zhuce">注册</button> {{ msg }}
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      regist: {
        username: "",
        email: "",
        password: "",
        sex: "0"
      },
      msg: ""
    };
  },
  methods: {
    registerData(e) {
      this.$ajax({
        url: "/register",
        method: "post",
        data: this.regist
      }).then(res => {
        if (res.data.code == 200) {
          this.msg = "注册成功, 3s后跳转至首页";
          setTimeout(() => {
            this.$router.push("/home");
          }, 3000);
        } else if (res.data.code == 400) {
          this.msg = "注册失败";
        }
      });
    }
  }
};
</script>
<style scoped>
.register {
  width: 100%;
  height: 780px;
  background-image: url("http://syds.ngchina.cn/resc/picture/20180502052822157.jpg");
  background-size: cover;
}
.innerPageCon_1 {
  width: 420px;
  margin-top: 200px;
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
.zhuce {
  border: solid 1px #3a3a3a;
  padding: 5px 20px;
}
.zhuce:focus {
  background-color: white;
}
.zhuce:hover {
  background-color: #3a3a3a;
  color: white;
}

</style>
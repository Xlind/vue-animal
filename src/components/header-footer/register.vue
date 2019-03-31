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
          <label for="password" class="col-sm-3 control-label">确认密码</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              placeholder="请再次输入密码"
              v-model="regist.password2"
            >
          </div>
        </div>
        <div class="form-group">
          <label class="radio-inline col-sm-offset-3 col-sm-3 control-label">
            <input type="radio" v-model="regist.sex" value="0">男
          </label>
          <label class="radio-inline">
            <input type="radio" v-model="regist.sex" value="1">女
          </label>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-3 col-sm-9 btnDiv">
            <button type="submit" class="btn btn-default register2">注册</button>
            <button type="submit" class="btn btn-default register2" @click="onBack()">返回</button>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-3 col-sm-9 error">
            {{ msg }}
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
        password2: "",
        sex: "0"
      },
      msg: ""
    };
  },
  methods: {
    registerData(e) {
      if (
        this.regist.username == "" ||
        this.regist.email == "" ||
        this.regist.password == "" ||
        this.regist.password2 == ""
      ) {
        this.msg = "注册信息不完整，请完善注册信息";
        return;
      }
      if (this.regist.password !== this.regist.password2) {
        this.msg = "两次输入的密码不一致";
      } else {
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
    },
    onBack() {
      this.$router.push({
        path: "/"
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
  padding: 50px 50px 30px 30px;
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
.register2 {
  border: solid 1px #3a3a3a;
  padding: 5px 45px;
}
.register2:focus {
  background-color: white;
}
.register2:hover {
  background-color: #3a3a3a;
  color: white;
}
.btnDiv {
  display: flex;
  justify-content: space-between;
}
.error {
  color: red;
}
</style>
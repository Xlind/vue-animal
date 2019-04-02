<!-- 登录 -->
<template>
  <div class="login">
    <div class="container">
      <form class="form-horizontal innerPageCon_1" id="loginform" @submit.prevent="loginData">
        <div class="form-group">
          <label for="email" class="col-sm-2 control-label">邮箱</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="email"
              v-model="formObj.email"
              placeholder="请输入邮箱"
            >
          </div>
        </div>
        <div class="form-group">
          <label for="password" class="col-sm-2 control-label">密码</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              id="password"
              v-model="formObj.password"
              placeholder="请输入密码"
            >
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-9">
            <div class="checkbox">
              <label>
                <input type="checkbox">
                <span class="checkbox-icon"></span>
                <span class="checkbox-lable">&nbsp;请记住我</span>
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-9 btnDiv">
            <button type="submit" class="btn btn-default login2">登录</button>
            <button type="button" class="btn btn-default login2" @click="onBack()">返回</button>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-9 error">{{msg}}</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formObj: {
        email: "",
        password: ""
      },
      msg: ""
    };
  },
  methods: {
    loginData(e) {
      if (this.formObj.email == "" || this.formObj.password == "") {
        this.msg = "登录信息不全，无法登录";
        console.log("eeeee");
        return;
      } else {
        this.$ajax({
          method: "post",
          data: this.formObj,
          url: "/login"
        }).then(res => {
          if (res.data.code == 200) {
            this.msg = "登录成功, 1s后跳转至首页";
            setTimeout(() => {
              this.$router.push("/home");
            }, 1000);
          } else if (res.data.code == 400) {
            this.msg = "密码不正确，登录失败";
          }
        });
      }
    },
    onBack() {
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
.login {
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
.btnDiv {
  display: flex;
  justify-content: space-between;
}
.checkbox {
  display: flex;
  width: 100px;
}
.checkbox label {
  padding-left: 0;
  align-items: center;
  display: flex;
}
.checkbox input {
  display: none;
}
.checkbox .checkbox-icon {
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 1px solid #999;
  color: #1f1f1f;
}
.checkbox .checkbox-icon::before {
  display: block;
  content: "";
  text-align: center;
  font-size: 14px;
  color: black;
}
input:checked + .checkbox-icon::before {
  content: "\2714";
}
.checkbox-label {
  font-size: 14px;
  padding-left: 8px;
}
.error {
  color: red;
}
</style>
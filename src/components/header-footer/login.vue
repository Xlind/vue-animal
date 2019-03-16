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
                <span class="checkbox-lable">请记住我</span>
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-9">
            <button type="submit" class="btn btn-default denglu">登录</button>
            
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
      formObj: {
        email: "",
        password: ""
      },
      msg: ""
    };
  },
  methods: {
    loginData(e) {
      this.$ajax({
        method: "post",
        data: this.formObj,
        url: "/login"
      }).then(res => {
        if (res.data.code == 200) {
          this.msg = "登录成功, 3s后跳转至首页";
          setTimeout(() => {
            this.$router.push("/home");
          }, 3000);
        } else if (res.data.code == 400) {
          this.msg = "登录失败";
        }
      });
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
.denglu {
  border: solid 1px #3a3a3a;
  padding: 5px 20px;
}
.denglu:focus {
  background-color: white;
}
.denglu:hover {
  background-color: #3a3a3a;
  color: white;
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
</style>
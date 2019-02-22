<!-- 登录 -->
<template>
  <div>
    <form class="form-horizontal" id="loginform" @submit.prevent="loginData">
      <div class="form-group">
        <label for="email" class="col-sm-2 control-label">邮箱</label>
        <div class="col-sm-10">
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
        <div class="col-sm-10">
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
        <div class="col-sm-offset-2 col-sm-10">
          <div class="checkbox">
            <label>
              <input type="checkbox">请记住我
            </label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default">登录</button> {{ msg }}
        </div>
      </div>
    </form>
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
      msg: ''
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
          this.msg = '登录成功, 3s后跳转至首页'
          setTimeout(() => {
            this.$router.push('/home')
          }, 3000)
        } else if (res.data.code == 400) {
          this.msg = '登录失败'
        }
      });
    }
  }
};
</script>
<style>
</style>
<!-- 注册 -->
<template>
  <div>
    <div class="container">
      <form class="form-horizontal" id="regiterform" @submit.prevent="registerData">
        <div class="form-group">
          <label for="name" class="col-sm-2 control-label">用户名</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" placeholder="请输入用户名" v-model="regist.username">
          </div>
        </div>
        <div class="form-group">
          <label for="email" class="col-sm-2 control-label">邮箱</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" placeholder="请输入邮箱" v-model="regist.email">
          </div>
        </div>
        <div class="form-group">
          <label for="password" class="col-sm-2 control-label">密码</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" placeholder="请输入密码" v-model="regist.password">
          </div>
        </div>
        <div class="form-group">
          <label class="radio-inline col-sm-2 control-label">
            <input type="radio" v-model="regist.sex" value="0">男
          </label>
          <label class="radio-inline">
            <input type="radio" v-model="regist.sex" value="1">女
          </label>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">注册</button>
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
      regist:{
        username:'',
        email:'',
        password:'',
        sex: '0'   
      }
    };
  },
  methods:{
   registerData(e){
     this.$ajax({
       url:"/register",
       method:"post",
       data:this.regist
     }).then(res=>{
       if(code==200){
         alert("注册成功")
       }else{
         alert("注册失败")
       }
     })
   }
  }
};
</script>
<style scoped>

</style>
<!-- header -->

<template>
  <nav role="navigation" class="navbar-fixed-top nav-color">
    <div class="container-fluid">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle"
          data-toggle="collapse"
          data-target="#example-navbar-collapse"
        >
          <span class="sr-only"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href>
          <img src="../../static/img/animal-logo.png" height="40px">&nbsp;&nbsp;动物守护之家
        </a>
      </div>
      <div class="collapse navbar-collapse" id="example-navbar-collapse">
        <ul class="nav navbar-nav">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              科普
              <b class="caret"></b>
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link :to="{name:'animalScience'}">野生动物</router-link>
              </li>
              <li>
                <router-link :to="{name:'animalCommonSense'}">动物常识</router-link>
              </li>
              <li>
                <router-link :to="{name:'animalNew'}">动物新闻</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link :to="{name:'applyForRelief'}">救助申领</router-link>
          </li>
          <li>
            <router-link :to="{name:'welfareActivity'}">公益活动</router-link>
          </li>
          <li>
            <router-link :to="{name:'relateRecommend'}">相关推荐</router-link>
          </li>
        </ul>
        <ul v-if="loginState == 1" class="nav navbar-nav navbar-right">
          <li>
            <router-link :to="{name:'register'}">
              <span class="glyphicon glyphicon-user"></span> 注册
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'login'}">
              <span class="glyphicon glyphicon-log-in"></span> 登录
            </router-link>
          </li>
        </ul>
        <ul v-if="loginState == 2" class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              {{ username }}
              <b class="caret"></b>
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link :to="{name:'account'}">个人中心</router-link>
              </li>
              <li>
                <a v-on:click="logout">登出</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      loginState: 0,
      username: ""
    };
  },
  methods: {
    logout() {
      this.$ajax({
        method: "post",
        url: "/logout"
      }).then(res => {
        this.loginState = 1;
        this.username = "";
      });
    }
  },
  created() {
    this.$ajax({
      method: "post",
      url: "/isLogin"
    }).then(res => {
      if (res.data.code == 200) {
        this.loginState = 2;
        this.username = res.data.username;
      } else if (res.data.code == 400) {
        this.loginState = 1;
      }
    });
  }
};
</script>
<style>
nav,
.dropdown-menu {
  min-width: 120px;
  background-color: #3d444c;
}
nav .navbar-header {
  line-height: 50px;
  padding-left: 10px;
  padding-right: 10px;
}
.nav .open > a,
.nav .open > a:focus,
.nav .open > a:hover,
.nav > li > a:focus,
.nav > li > a:hover,
.dropdown-menu > li > a:hover {
  background-color: #3d444c;
  color: white;
}
.dropdown-menu > li > a {
  padding: 10px 10px;
  text-align: center;
  background-color: #3d444c;
  color: #ffd04b;
}
.icon-bar {
  background-color: #ffd04b;
}
.nav-color a {
  color: #ffd04b;
  text-decoration: none;
}
</style>
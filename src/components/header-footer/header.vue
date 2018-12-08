<!-- header -->

<template>
    <nav role="navigation" class="navbar-fixed-top">
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
                  <a href="#">野生动物</a>
                </li>
                <li>
                  <a href="#">动物常识</a>
                </li>
                <li>
                  <a href="#">动物新闻</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">救助申领</a>
            </li>
            <li>
              <a href="#">公益活动</a>
            </li>
            <li>
              <a href="#">相关推荐</a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-user"></span> 注册
              </a>
            </li>
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-log-in"></span> 登录
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
nav,
.dropdown-menu {
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
  background-color: #3d444c;
  color: #ffd04b;
}
.icon-bar {
  background-color: #ffd04b;
}
</style>
<!-- footer -->
<template>
  <div id="footer">
    <div class="footab" v-if="flag">
      <div class="footab-itemstart">
        <ul>
          <li>
            <h4>友情链接/Link</h4>
          </li>
          <li>
            <a href="http://www.iltaw.com/">动物世界</a>
          </li>
          <li>
            <a href="http://www.xzwyu.com/dongwu/">行者物语.动物</a>
          </li>
          <li>
            <a href="https://www.bornfree.org.uk/animals">野生动物救援</a>
          </li>
          <li>
            <a href="https://www.worldanimalprotection.org.cn/">世界动物保护协会</a>
          </li>
        </ul>
      </div>
      <div class="footab-item">
        <ul>
          <li>
            <img src="../../static/img/footer-logo.png" height="120px">
          </li>
          <li>Copyright © 2018 xlind.com, All Rights Reserved</li>
        </ul>
      </div>
      <div class="footab-itemend">
        <ul>
          <li>
            <a href>关于我们</a> |
            <a href>在线留言</a> |
            <a href>招聘</a> |
          </li>
          <li>
            <a href>法律声明</a> |
            <a href>版权所有</a> |
          </li>
          <br>
          <li>JOIN US</li>
          <li>加入我们</li>
          <li class="iconstyle">
            <a href>
              <i class="iconfont icon-qq"></i>
            </a>
            <a href>
              <i class="iconfont icon-weixin"></i>
            </a>
            <a href>
              <i class="iconfont icon-weibo"></i>
            </a>
            <a href>
              <i class="iconfont icon-GitHub"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <nav class="navbar navbar-default navbar-fixed-bottom" role="navigation" v-else>
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">菜鸟教程</a>
        </div>
        <div>
          <ul class="nav navbar-nav">
            <li class="active">
              <a href="#">iOS</a>
            </li>
            <li>
              <a href="#">SVN</a>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Java
                <b class="caret"></b>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">jmeter</a>
                </li>
                <li>
                  <a href="#">EJB</a>
                </li>
                <li>
                  <a href="#">Jasper Report</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">分离的链接</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">另一个分离的链接</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // flag: false,
      flag: true
    };
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  }
};
</script>
<style scoped>
#footer {
  color: #ffd04b;
  background-color: rgba(0, 0, 0, 0.842);
  /* padding: 20px; */
  height: 200px;
}
.footab {
  margin: auto;
  padding-top: 25px;
  /* width: 90%; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* height: 200px; */
}
.footab-itemstart {
  text-align: left;
}
.footab-item {
  flex: 0.8;
  text-align: center;
}
.footab-itemend {
  text-align: right;
}
ul li {
  line-height: 25px;
}
.iconstyle i {
  margin-top: 2px;
  margin: 2px;
}
</style>
<!-- footer -->
<template>
  <div id="footer">
    <div class="footab">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  }
}
</script>
<style >
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
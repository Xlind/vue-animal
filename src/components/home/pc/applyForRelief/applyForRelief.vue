<!-- 申领救助站 -->
<template>
  <div>
    <!-- 头部 -->
    <header-vue></header-vue>
    <!-- 申领救助 -->
    <div class="nav-img"></div>
    <div class="container nav-content">
      <div class="item-nav">
        <a href="#">申领处</a>
        <p>说明hhhhhhhh</p>
      </div>
      <div class="item-nav">
        <a href="#">救助站</a>
        <p>hhhhhhhh</p>
      </div>
      <div class="item-nav">
        <a href="#">志愿者</a>
        <p>hhhhhhhh</p>
      </div>
    </div>
    <!-- 尾部 -->
    <footer-vue></footer-vue>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.nav-img {
  width: 100%;
  height: 400px;
  background-image: url("https://www.gzzoo.com/UploadFile/4(1).jpg");
  background-size: cover;
}
.nav-content {
  padding-top: 50px;
  padding-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.nav-content .item-nav a {
  color: #fff;
  background-color: #6fc0ce;
  display: block;
  text-align: center;
  width: 316px;
  height: 46px;
  line-height: 46px;
  vertical-align: middle;
  border: 1px solid #fff;
  font-size: 20px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  margin: 50px auto 0;
}
.nav-content .item-nav p {
  padding: 10px 10px;
  color: #5a5a5a;
  font-size: 18px;
}
</style>
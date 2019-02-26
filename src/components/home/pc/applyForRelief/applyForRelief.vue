<!-- 申领救助站 -->
<template>
  <div>
    <!-- 头部 -->
    <header-vue></header-vue>
    <!-- 申领救助 -->
    <div class="nav-img"></div>
    <div class="container nav-content">
      <div class="item-nav">救助站</div>
      <div class="item-nav">救助站</div>
      <div class="item-nav">救助站</div>
    </div>
    <div class="container item-content"></div>
    <div class="nav-title"></div>
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
.nav-content .item-nav {
  width: 300px;
  height: 300px;
  background-color: aqua;
  color: #000;
}
.item-content{
    width: 100%;
    padding: 30px;
    background-color: azure;
}

</style>
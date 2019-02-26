<!-- 动物新闻 -->
<template>
  <div>
    <!-- 头部 -->
    <header-vue></header-vue>
    <!-- 动物新闻 -->
    <div class="new-img"></div>
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
.new-img {
  margin-top: 40px;
  width: 100%;
  height: 400px;
  background-image: url("https://www.gzzoo.com/UploadFile/7.jpg");
  background-size: cover;
}
</style>
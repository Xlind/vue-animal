<!-- 动物常识 -->
<template>
  <div>
    <!-- 头部 -->
    <header-vue></header-vue>
    <!-- 动物新闻 -->
    <div class="sense-img"></div>
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
.sense-img {
  width: 100%;
  height: 440px;
  background-image: url(" https://www.gzzoo.com/UploadFile/%E8%B0%83%E6%95%B4%E5%A4%A7%E5%B0%8FTMZ_0734.jpg");
  background-size: cover;
  background-position-y: 40%;
}
</style>
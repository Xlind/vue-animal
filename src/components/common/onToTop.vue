<!-- 返回顶部 -->
<template>
  <div class="goTop" id="js-go_top">
    <a href="#"><img src="../../static/img/icon_top.png" alt="回到顶部图片"></a>
  </div>
</template>

<script>
import './GoToTop.js';
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.goTop > img {
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.goTop {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
</style>
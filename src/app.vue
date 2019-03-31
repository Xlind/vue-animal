<!--appVue  -->
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  beforeMount() {
    if (this._isMobile()) {
      this.$router.replace({ name: "homeMob" });
    } else {
      this.$router.replace({ name: "home" });
    }
  },
  methods: {
    //判断是否为手机端，返回flag
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  }
};
</script>
<style>
</style>
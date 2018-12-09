<!-- 移动端 -->
<template>
  <div>
    <h1>我是手机尾部</h1>
    <h1 v-for="(home,index) in homes" :key="index">{{home.name}}说：{{home.mesg}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homes: {}
    };
  },
  created() {
    this.$ajax
      .get("lunbo.json")
      .then(res => {
        this.homes = res.data.homes;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
</style>
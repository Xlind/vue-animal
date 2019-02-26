<!-- 动物新闻 -->
<template>
  <div>
    <!-- 头部 -->
    <header-vue></header-vue>
    <!-- 动物新闻 -->
    <div class="containMain">
      <div class="innerPageBg">
        <img src="https://www.gzzoo.com/UploadFile/7.jpg">
      </div>
      <!-- 新闻 -->
      <div class="innerPageCon_1">
        <div class="panel-group" id="accordion">
          <div class="panel panel-default" v-for="(n, index) in news" :key="index">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a
                  data-toggle="collapse"
                  data-parent="#accordion"
                  v-bind:href="'#collapse' + index"
                >{{ n.title }}</a>{{ n.time }}
              </h4>
            </div>
            <div v-bind:id="'collapse' + index" class="panel-collapse collapse">
              <div class="panel-body">{{ n.content }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 尾部 -->
    <footer-vue></footer-vue>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: {}
    };
  },
  created() {
    this.$ajax
      .get("animalNews.json")
      .then(res => {
        this.news = res.data.animalNews;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
.containMain {
  position: relative;
  margin-top: 50px;
  margin-bottom: 50px;
  overflow-x: hidden;
}
.innerPageBg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: -10;
}
.innerPageBg img {
  width: 100%;
  height: auto;
}
.innerPageCon_1 {
  width: 1200px;
  margin-top: 300px;
  margin-left: auto;
  margin-right: auto;
  background-color: azure;
  -webkit-animation: appear-up 1s ease;
  -moz-animation: appear-up 1s ease;
  -o-animation: appear-up 1s ease;
  animation: appear-up 1s ease;
}
</style>
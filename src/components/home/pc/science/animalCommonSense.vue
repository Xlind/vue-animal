<!-- 动物常识 -->
<template>
  <div>
    <!-- 头部 -->
    <header-vue></header-vue>
    <!-- 动物常识 -->
    <div class="sense-img"></div>
    <!-- 常识 -->
    <div class="innerPageCon_1">
      <div class="panel-group" id="accordion">
        <div class="grayTitle">
          <strong>
            动物常识
            <span class="lineL"></span>
            <span class="lineR"></span>
          </strong>
        </div>
        <div class="panel panel-default news" v-for="(n, index) in commons" :key="index">
          <div class="panel-heading">
            <h4 class="panel-title">
              <strong>
                <a
                  data-toggle="collapse"
                  data-parent="#accordion"
                  v-bind:href="'#collapse' + index">{{ n.title }}</a>
                {{ n.time }}
              </strong>
            </h4>
          </div>
          <div v-bind:id="'collapse' + index" class="panel-collapse collapse">
            <div class="panel-body">{{ n.content }}</div>
          </div>
        </div>
      </div>
      <ul class="pager">
        <li class="previous disabled">
          <a href="#">&larr; 上一页</a>
        </li>
        <li class="next">
          <a href="#">下一页 &rarr;</a>
        </li>
      </ul>
    </div>
    <!-- 尾部 -->
    <footer-vue></footer-vue>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commons: {}
    };
  },
  created() {
    this.$ajax
      .get("animalSense.json")
      .then(res => {
        this.commons = res.data.sense;
      })
      .catch(err => {});
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
.innerPageCon_1 {
  padding: 20px;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  -webkit-animation: appear-up 1s ease;
  -moz-animation: appear-up 1s ease;
  -o-animation: appear-up 1s ease;
  animation: appear-up 1s ease;
}
.grayTitle {
  text-align: center;
  margin-bottom: 30px;
  color: #413d3b;
  font-size: 24px;
  overflow: hidden;
}
.grayTitle strong {
  display: inline-block;
  position: relative;
  font-weight: normal;
}
.grayTitle span {
  width: 100px;
  height: 1px;
  overflow: hidden;
  background-color: #413d3b;
  font-size: 1px;
  position: absolute;
  top: 50%;
  display: inline-block;
}
.grayTitle .lineL {
  left: -120px;
}
.grayTitle .lineR {
  right: -120px;
}
.news .panel-heading {
  background-color: white;
}
.news .panel-heading a {
  font-size: 20px;
  color: #4b9e98;
}
.news .panel-body {
  line-height: 2.2;
  font-size: 17px;
  color: black;
  padding: 15px 25px;
}
</style>
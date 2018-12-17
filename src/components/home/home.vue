<!-- homeVue -->
<template>
  <div>
    <!-- 头部 -->
    <header-vue></header-vue>

    <!-- banner和搜索框 -->
    <banner-vue></banner-vue>

    <!-- 热门Hot top -->
   <hot-vue></hot-vue>

    <!-- 新增动物轮播 -->
    <anlunbo-vue></anlunbo-vue>

    <!-- 动物专题-->
    <pgrahy-vue></pgrahy-vue>

    <!-- 中国重点保护 -->
    <div id="Keyprotection">
      <div class="kp">
        <div class="kp-item">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-9 kp-leftstyle">
              <h2>中华人民共和国动物资源</h2>
              <h4>
                据统计，全中国陆栖脊椎动物约有2070种，占世界陆栖脊椎动物的9.8%。
                其中鸟类1170多种、兽类400多种、两栖类184种，分别占世界同类动物的13.5%、11.3%和7.3%。
              </h4>
              <h4>
                中国是生物多样性破坏较严重的国家，在联合国《国际濒危物种贸易公约》列出的640种世界濒危物种中，中国有156种，约占总数的1/4，形势十分严峻。
                造成物种灭绝的最主要原因是人类对野生动植物资源的掠夺式开发和利用。
              </h4>
              <a href="#" class="kp-btn">了解国家重点保护动物</a>
            </div>
          </div>
        </div>
        <div class="kp-item">
          <img src="../../static/img/animal-lb.png">
        </div>
      </div>
    </div>

    <!-- 栏目 -->
   <colum-vue></colum-vue>

    <!-- 尾部 -->
    <footer-vue></footer-vue>
  </div>
</template>

<script>
const bannerVue = r => require.ensure([], () => r(require('./pc/banner.vue')), 'bannerVue');//搜索
const hotVue = r => require.ensure([], () => r(require('./pc/hot.vue')), 'hot');//热门推送
const anlunboVue = r => require.ensure([], () => r(require('./pc/anlunbo.vue')), 'anlunboVue');//新增动物轮播
const pgrahyVue = r => require.ensure([], () => r(require('./pc/pgrahy.vue')), 'pgrahyVue');//动物专题
const columVue = r => require.ensure([], () => r(require('./pc/colum.vue')), 'columVue');//栏目

export default {
  data() {
    return {   
    };
  },
  components:{
    bannerVue,
    anlunboVue,
    pgrahyVue,
    columVue,
    hotVue
  }
};
</script>
<style>


/* 重点保护 */
#keyprotection {
  background-color: rgb(246, 255, 127);
}
.kp {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.kp-item {
  flex: 1;
  text-align: center;
  background-color: rgb(205, 235, 235);
}
.kp-item img {
  width: 100%;
  height: auto;
}
.kp-leftstyle {
  margin: 30px 0;
}
.kp-leftstyle h4 {
  padding: 0 50px;
  line-height: 30px;
  text-align: left;
  text-indent: 20px;
}
.kp-leftstyle h4,
.kp-leftstyle h2 {
  color: #333;
}
#Keyprotection a {
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
#Keyprotection a:hover {
  background-color: #5a5a5a;
}
</style>
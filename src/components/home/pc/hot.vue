<!-- 首页热门推送 -->
<template>
  <div>
    <div id="hot">
      <div class="container">
        <div class="page-header">
          <a class="btn btn-link">
            <h3>
              <b>热门推送 Hot Tags Push</b>
            </h3>
          </a>
        </div>
        <div class="row card">
          <div class="col-md-4 col-lg-4">
            <img src="../../../static/img/lion.jpeg" width="350px">
          </div>
          <div class="col-md-8 col-lg-8">
            <p>
              狮，俗称狮子（古称狻猊／狻麑），被人称为万兽之王。狮是一种生存在非洲和亚洲的大型猫科动物，
              豹属四种著名的大型猫科动物之一。其雄性的鬃毛是其特征之一。过去它分布在多个洲，但因为人类的开发，
              现代的狮群生存环境与分布已经大大缩小了。中国地区本来没有狮子，直到张骞通西域以后，
              才从伊朗附近的地区知道狮子的存在。
            </p>
            <p>
              雄狮体重150-250千克，身高达1.2米，体长大约1.8~3.3米，母狮体型较公狮小，但全长仍可达1.5米，
              体重100-160千克，相当于两个成年男人的重量，是非洲最顶级的掠食者，是最凶猛的猫科动物之一。
              公狮颈部周围包著一层的鬃毛名为“狮鬃”，狮鬃颜色不等，包括金褐、咖啡、黑色，有些狮的狮鬃浓密而杂乱，
              有的稀疏且平顺，科学家研究发现，狮鬃又黑又浓又乱的公狮因为长相较吓人因此很少受攻击，也较吸引母狮,
              狮鬃太少颜色太淡看起来不吓人的公狮反而常受到攻击，狮鬃在打猎埋伏上并没有任何的帮助。有些狮体色为纯白，
              并不是因为白化病，而是一些狮子本身就带有白色的基因，会影响到猎食，白狮十分的稀少。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
/* 热门Hot top  */
#hot {
  margin: 0;
  background-color: #f4fddf;
  padding-bottom: 40px;
}
#hot .card {
  margin-top: 20px;
  padding: 20px 5px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: #333;
  text-align: left;
  letter-spacing: 1px;
}
</style>
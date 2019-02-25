<!-- 公益活动 -->
<template>
  <div>
    <!-- 头部 -->
    <header-vue></header-vue>
    <!-- 活动 -->
    <div class="containMain">
      <div class="innerPageBg">
        <img src="http://www.awfchina.cn/upload/2015/06/Billy_Dodson_Elephants.jpg" alt>
      </div>
      <div class="gary-bg">
        <h1 class="cateTitle cateTitleColorWhite">保护人类最后一片原生态净土！</h1>
        <div class="innerPageCon_1">
          <div class="grayTitle">
            <strong>
              公益活动的职责
              <span class="lineL"></span>
              <span class="lineR"></span>
            </strong>
          </div>
          <ul class="messDescListA">
            <li>
              <div class="t">
                <span>停止消费</span>
              </div>
              <p>随着对野生动物制品消费需求的增加，非法野生动物贸易日益猖獗，非洲野生动物基金会通过&ldquo;Say No&rdquo; 运动号召人们减少对野生动物制品的消费需求。通过邀请亚洲知名人士拍摄公益视频，发布广告牌和平面广告，此项运动旨在警醒公众非法野生动物贸易的巨大破坏性。&ldquo;Say No&rdquo; 运动2012年进入中国，如今已经扩展到了泰国和越南。</p>
            </li>
            <li>
              <div class="t">
                <span>停止杀害</span>
              </div>
              <p>非洲野生动物基金会同样也进行实地保护工作，防止偷猎者偷盗非洲珍贵物种，避免人与野生动物产生冲突。基金会训练和部署了一批野生动物侦查员，同时修建栅栏以保护家畜不被食肉动物袭击，建立企业和学校造福当地社区，以保护野生动物的繁衍生息。</p>
            </li>
            <li>
              <div class="t">
                <span>停止非法交易</span>
              </div>
              <p>非洲的自然遗产属于非洲，不容他人践踏！非洲野生动物基金会、政府以及执法官员共同努力，维护机场和港口的安全，运用训练有素的猎犬检测是否有走私的野生动物，防止贩卖者跨国走私野生动物。我们也积极开展适当的培训，建立法律框架，逮捕和惩罚偷猎者。</p>
            </li>
          </ul>
          <div class="grayTitle">
            <strong>
              最新信息
              <span class="lineL"></span>
              <span class="lineR"></span>
            </strong>
          </div>
          <div class="consumptionDesc">
            <div v-for="(act, index) in activites.newAct" :key="index">
              <div class="activity-item">
                <img v-bind:src="act.url">
                <h5>{{ act.title }}</h5>
                <p class="item-content">{{ act.content }}</p>
                <p class="item-time">{{ act.date }}</p>
              </div>
            </div>
          </div>
          <div class="grayTitle">
            <strong>
              往期回顾
              <span class="lineL"></span>
              <span class="lineR"></span>
            </strong>
          </div>
          <div class="consumptionDesc">
            <div v-for="(act, index) in activites.oldAct" :key="index">
              <div class="activity-item">
                <img v-bind:src="act.url">
                <h5>{{ act.title }}</h5>
                <p class="item-content">{{ act.content }}</p>
                <p class="item-time">{{ act.date }}</p>
              </div>
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
      activites: {}
    };
  },
  created() {
    this.$ajax
      .get("animalActs.json")
      .then(res => {
        this.activites = res.data;
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
.cateTitle {
  height: 165px;
  line-height: 165px;
  font-size: 30px;
  max-width: 1000px;
  color: #413d3b;
}
.cateTitleColorWhite {
  padding-left: 100px;
  color: #fff;
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
.messDescListA li {
  padding-bottom: 15px;
  font-size: 14px;
  line-height: 1.8;
}
.messDescListA .t {
  line-height: 32px;
  font-size: 16px;
  margin-bottom: 8px;
}
.messDescListA .t span {
  color: #fff;
  background-color: #4b9e98;
  height: 32px;
  padding: 0 40px 0 22px;
  position: relative;
  border-radius: 5px 0 0 5px;
  display: inline-block;
}
.messDescListA .t b {
  width: 0;
  height: 0;
  border: 16px solid;
  border-color: #fff #fff #fff #4b9e98;
  display: inline-block;
  position: absolute;
  right: -5px;
  top: 0;
}

.innerPageCon_1 {
  width: 1200px;
  margin: auto;
  background-color: azure;
  padding: 30px 30px 0 30px;
  -webkit-animation: appear-up 1s ease;
  -moz-animation: appear-up 1s ease;
  -o-animation: appear-up 1s ease;
  animation: appear-up 1s ease;
}

.innerPageCon {
  background-color: #fff;
  padding: 0 40px;
  opacity: 0;
  padding-top: 10px;
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
.innerPageBg .tips {
  position: absolute;
  left: 20px;
  bottom: 20px;
  color: #fff;
  font-family: "AVENIR LT 45 BOOK";
}
.innerPageCon .messDesc {
  line-height: 1.8;
  font-size: 14px;
}
.innerPageCon .messDesc p {
  padding-bottom: 15px;
}
.innerPageCon .messDesc img {
  max-width: 100%;
}
.consumptionDesc {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 40px;
}
.activity-item {
  width: 32%;
  height: auto;
  margin-top: 20px;
  padding: 15px;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: #333;
  text-align: left;
  letter-spacing: 1px;
}
.activity-item img {
  width: 100%;
  height: auto;
}
.activity-item h5 {
  color: #4b9e98;
}
.activity-item .item-content {
  color: #333;
}
.activity-item .item-time {
  color: rgb(172, 169, 169);
}
</style>
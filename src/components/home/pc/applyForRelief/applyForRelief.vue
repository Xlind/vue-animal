<!-- 申领救助站 -->
<template>
  <div>
    <!-- 头部 -->
    <header-vue></header-vue>
    <!-- 申领救助 -->
    <div class="nav-img">
      <h1 class="cateTitle cateTitleColorWhite">珍惜生命，珍爱我们的朋友—动物</h1>
    </div>
    <div class="container nav-content">
      <div class="tabOut">
        <div class="tab" @click="toggleTab('relief')">
          <a>救助站</a>
          <p>
            <span>寻找主人</span>——发布帮助流浪动物寻找主人的帖子~~
          </p>
          <p>
            <span>寻找宠物</span>——发布自己走失宠物的信息~~
          </p>
        </div>
      </div>
      <div class="tabOut">
        <div class="tab" @click="toggleTab('apply')">
          <a>申领站</a>
          <p>
            <span>流浪动物保护基地入驻</span>——希望有更多的基地加入我们，一起为基地的毛孩子们寻找一个温暖的家~~
          </p>
          <p>
            <span>申领处</span>——希望有更多的社会爱心人士关注我们的毛孩子，带它回家，给它们一个温暖的家~~
          </p>
        </div>
      </div>
      <div class="tabOut">
        <div class="tab" @click="toggleTab('volunteers')">
          <a>志愿者</a>
          <p>
            <span>加入我们成为志愿者</span>——志愿者是最值得敬佩也是最宝贵的社会财富，动保事业需要更多“志愿者”的加入~~
          </p>
        </div>
      </div>
    </div>
    <!-- 系统内容 -->
    <div class="system">
      <!-- <hr style="border:1 dashed #987cb9" width="80%" color=#987cb9 size=1> -->
      <applyVue v-if="this.currentTab == 'apply'"></applyVue>
      <reliefVue v-if="this.currentTab == 'relief'"></reliefVue>
      <volunteerVue v-if="this.currentTab == 'volunteers'"></volunteerVue>
    </div>
    <!-- 尾部 -->
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import applyVue from "./applyForReliefChild/apply.vue";
import reliefVue from "./applyForReliefChild/relief.vue";
import volunteerVue from "./applyForReliefChild/volunteer.vue";
export default {
  data() {
    return {
      currentTab: ""
    };
  },
  components: {
    applyVue,
    reliefVue,
    volunteerVue
  },
  methods: {
    toggleTab(tab) {
      this.currentTab = tab;
    }
  }
};
</script>
<style scoped>
.nav-img {
  width: 100%;
  height: 400px;
  background-image: url("https://www.gzzoo.com/UploadFile/4(1).jpg");
  background-size: cover;
}
.nav-content {
  position: absolute;
  padding-bottom: 50px;
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
}
.nav-content .tabOut {
  position: relative;
  top: -100px;
  width: 100%;
  padding: 30px;
}
.nav-content .tabOut .tab {
  height: 280px;
  border-radius: 10px;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
}
.nav-content .tabOut .tab a {
  color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #6fc0ce;
  display: block;
  text-align: center;
  width: 100%;
  height: 46px;
  line-height: 46px;
  font-size: 24px;
}
.nav-content .tabOut .tab p {
  padding: 20px 30px;
  color: #5a5a5a;
  font-size: 18px;
  margin: auto;
}
.nav-content .tabOut .tab p span {
  font-weight: 600;
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
.system {
  padding: 250px;
}
</style>
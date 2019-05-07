<template>
  <div>
    <div class="container">
      <h1>欢迎登陆后台管理页面！</h1>
      <div class="mange row">
        <div class="col-md-2">
          <div class="tab-box">
          <div class="tab" @click="tgTab('volunteerMange')">志愿者信息管理</div>
          <div class="tab" @click="tgTab('scienceMange')">救助基地入驻登记信息管理</div>
          <div class="tab" @click="tgTab('activityMange')">活动信息管理</div>
          <div class="tab" @click="tgTab('relateMange')">相关推荐管理</div>
          </div>
        </div>
        <div class="col-md-10">
          <div class="system">
            <vmVue v-if="this.tggTab == 'volunteerMange'"></vmVue>
            <smVue v-if="this.tggTab == 'scienceMange'"></smVue>
            <amVue v-if="this.tggTab == 'activityMange'"></amVue>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vmVue from "./volunteerMange.vue";
import smVue from "./scienceMange.vue";
import amVue from "./activityMange.vue";
export default {
  data() {
    return {
      tggTab: "volunteerMange"
    };
  },
  components: {
    vmVue,
    smVue,
    amVue
  },
  methods: {
    tgTab(tab) {
      this.tggTab = tab;
    }
  }
};
</script>
<style scoped>
.tab {
  width: 100%;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  color: white;
  box-sizing: border-box;
  background-color: black;
  cursor: pointer;
}
.tab-box {
  padding-top:10px;
  padding-bottom: 10px;
  background-color: black; 
}
h1 {
  text-align: center;
}
.mange {
  padding-top: 30px;
}

</style>



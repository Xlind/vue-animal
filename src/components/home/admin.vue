<template>
  <div>
    <label>志愿者列表</label>
    <p></p>
    <div v-for="(item, index) in volunteers" :key="index">
      <h5>{{item.name}}</h5>
      <h5>{{item.sex}}</h5>
      <h5>{{item.age}}</h5>
      <h5>{{item.contact}}</h5>
      <h5>{{item.introduction}}</h5>
    </div>
  </div>
</template>
<script>
import volunteerVue from "./pc/applyForRelief/applyForReliefChild/volunteer.vue";
export default {
  data() {
    return {
      volunteers: {}
    };
  },
  created() {
    // 发送帖子。
    this.$ajax({
      method: "post",
      data: {
        secret: "xldxldxld"
      },
      url: "/gainVolunteersApplication"
    }).then(res => {
      if (res.data.code == 200) {
        this.volunteers = res.data.applications;
      } else {
        alert("获取志愿者。原因： " + res.data.reason);
      }
    });
  }
};
</script>


<!-- 后台管理志愿者 -->
<template>
  <div class="vol">
   <h2 class="sub-header">志愿者列表</h2>
   <hr>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>序号</th>
            <th>姓名</th>
            <th>性别</th>
            <!-- <th>出生日期</th> -->
            <th>联系方式</th>
            <th>简介</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in volunteers" :key="index">
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td v-if="item.sex=0?'男':'女'">{{item.sex}}</td>
            <!-- <td>{{item.age}}</td> -->
            <td>{{item.contact}}</td>
            <td>{{item.introduction}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
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
<style scoped>
.vol {
    border: 1px solid black;
}
.sub-header {
    text-indent: 30px;
}
table {
    font-size: 20px;
}
</style>
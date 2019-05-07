<!-- 后台管理相关推荐 -->
<template>
    <div class="act">
   <h2 class="sub-header">活动信息管理</h2>
   <hr>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th style="width:60px">序号</th>
            <th style="width:120px">时间</th>
            <th>标题</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in activites.oldAct" :key="index">
            <td>{{index+1}}</td>
            <td>{{item.date}}</td>
            <td>{{item.title}}</td>
            <td>{{item.content}}</td>
            <td style="width:60px">
              <a class="curd" href="#">编辑</a>
              <a class="curd" href="#">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
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
}

</script>
<style scoped>
.act {
    border: 1px solid black;
}
.sub-header {
    text-indent: 30px;
}
table {
    font-size: 20px;
}
.curd {
    color: rgba(0, 0, 255, 0.637);
}
.curd:hover {
    color: black;
}
</style>
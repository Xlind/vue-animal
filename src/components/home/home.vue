<!-- homeVue -->
<template>
  <div class="jumbotron">
    <div class="container textstyle">
      <h3>让我们一起分享奇妙的动物世界</h3>
      <p>Let us share the wonderful animal world</p>
    </div>
    <div class="row">
      <div class="col-md-4 col-xs-4"></div>
    <div class="col-md-4 col-xs-4 seach">
      <div class="input-group">
        <input type="text" class="form-control">
        <span class="input-group-btn">
          <button class="btn btn-default " type="button"><span class="glyphicon glyphicon-search" ></span></button>
        </span>
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
.jumbotron {
  margin: 0;
  background: url("../../static/img/animal-banner.jpg") no-repeat;
  background-size: cover;
  width: 100%;
}
.textstyle {
  margin-top: 60px;
}
.jumbotron h3,
.jumbotron p {
  line-height: 20px;
  color: white;
}
.jumbotron .seach{
  margin-top:200px;
}
</style>
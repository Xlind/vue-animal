<!-- banner和搜索框 -->
<template>
  <div>
    <div class="jumbotron">
      <div class="container textstyle">
        <h2>
          <b>让我们一起分享奇妙的动物世界</b>
        </h2>
        <p>
          <b>Let us share the wonderful animal world</b>
        </p>
        <br>
        <h3>
          <b>我们的愿景</b>
        </h3>
        <h4>
          <b>一个人与动物和谐相处的世界</b>
        </h4>
        <h3>
          <b>我们的使命</b>
        </h3>
        <h4>
          <b>引领人们走进动物世界</b>
        </h4>
        <h4>
          <b>呼吁人们友好对待动物</b>
        </h4>
      </div>
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4 seach">
          <input type="text" class="form-seach" placeholder="搜索你想知道的">
          <a class="glyphicon glyphicon-search"></a>
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
/* banner和搜索框 */
.jumbotron {
  margin-top: 50px;
  margin-bottom: 0;
  background: url("../../../static/img/animal-banner.jpg") no-repeat
    rgba(0, 0, 0, 0.7);
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.08);
  width: 100%;
}
.textstyle {
  margin-top: 60px;
}
.jumbotron h2,
.jumbotron h3,
.jumbotron h4,
.jumbotron p {
  text-shadow: 3px 3px 3px #333;
  line-height: 20px;
  color: white;
}
.jumbotron .seach {
  margin-top: 80px;
  opacity: 0.9;
}
.jumbotron a {
  position: relative;
  left: -35px;
  display: inline-block;
}
.jumbotron a:hover {
  color: #333;
}
.jumbotron .form-seach {
  width: 90%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid rgba(255, 255, 255, 0.95);
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.95);
  color: #444;
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.07), 0 1px 3px 0 rgba(0, 0, 0, 0.02),
    0 0 0 1px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}
</style>
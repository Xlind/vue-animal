<!-- homeVue -->
<template>
  <div>
    <!-- 头部 -->
    <header-vue></header-vue>

    <!-- banner和搜索框 -->
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

    <!-- 热门Hot top -->
    <div id="hot">
      <div class="container">
        <div class="page-header">
          <a class="btn btn-link">
            <h3>
              <b>热门推送 Hot Tags</b>
            </h3>
          </a>
        </div>
        <div class="row card">
          <div class="col-md-4">
            <img src="../../static/img/test.jpg" width="350px">
          </div>
          <div class="col-md-8">
            <p>我又再次见到了那飘散着的一片片落叶。见到落叶并不稀奇，但是这是在春天，四月的春天！
              <br>春天见得最多的应是傲然怒放的鲜花和春风得意的杨柳，而不是这像蝴蝶一般在空中翩翩起舞，萦绕的落叶。
              <br>我看着地上的落叶，有三种不同的颜色：翡翠般绿的，金子般黄的，火一般红的，真可以说是色彩繁多了。
              <br>今年似乎与往年不同，春天的落叶特别多，几乎在每一棵树旁，都会有一片片落叶静静地躺在那儿等着清洁工人来打扫。
              <br>有些地方的叶子更多。我家附近的一个公园里，成堆的落叶铺散在石路上，没有什么人来打扫这里。
              <br>落叶有很多种，按季节，可以分为春夏秋冬四个季节的叶子；
              <br>按树木，可以分为梨树叶、桃树叶、樟树叶等形态各异的叶子；按颜色，可以分为红、绿、黄三种颜色。
              <br>谁都知道，落叶是秋的使者，在秋天，会有许许多多的落叶像仙女一样飘落下来，但在春天，也会有许多落叶的。
              <br>其实，每一个季节都会有落叶的包括在寒风凛冽的冬天，四季常青的樟树也会有落叶。
              <br>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 专题轮播 -->
    <div class="container" id="an-special">
      <div class="page-header">
        <a class="btn btn-link">
          <h3>
            <b>动物专题 Animal special</b>
          </h3>
        </a>
      </div>
      <div id="single" class="carousel slide" data-ride="carousel" data-shift="1">
        <div class="carousel-inner">
          <ul class="row item active">
            <li class="col-md-3 one">
              <img
                src="http://placehold.it/200/666dc0/ffffff&text=1"
                srcset="http://placehold.it/200/666dc0/ffffff&text=1 1x"
                class="img-responsive"
              >
            </li>
            <li class="col-md-3 two">
              <img
                src="http://placehold.it/200/666dc0/ffffff&text=2"
                srcset="http://placehold.it/200/666dc0/ffffff&text=2 1x"
                class="img-responsive"
              >
            </li>
            <li class="col-md-3 three">
              <img
                src="http://placehold.it/200/666dc0/ffffff&text=3"
                srcset="http://placehold.it/200/666dc0/ffffff&text=3 1x"
                class="img-responsive"
              >
            </li>
            <li class="col-md-3 four">
              <img
                src="http://placehold.it/200/666dc0/ffffff&text=4"
                srcset="http://placehold.it/200/666dc0/ffffff&text=4 1x"
                class="img-responsive"
              >
            </li>
          </ul>
          <ul class="row item">
            <li class="col-md-3 five">
              <img
                src="http://placehold.it/200/666dc0/ffffff&text=5"
                srcset="http://placehold.it/200/666dc0/ffffff&text=5 1x"
                class="img-responsive"
              >
            </li>
            <li class="col-md-3 six">
              <img
                src="http://placehold.it/200/666dc0/ffffff&text=6"
                srcset="http://placehold.it/200/666dc0/ffffff&text=6 1x"
                class="img-responsive"
              >
            </li>
            <li class="col-md-3 seven">
              <img
                src="http://placehold.it/200/666dc0/ffffff&text=7"
                srcset="http://placehold.it/200/666dc0/ffffff&text=7 1x"
                class="img-responsive"
              >
            </li>
            <li class="col-md-3 eight">
              <img
                src="http://placehold.it/200/666dc0/ffffff&text=8"
                srcset="http://placehold.it/200/666dc0/ffffff&text=8 1x"
                class="img-responsive"
              >
            </li>
          </ul>
        </div>

        <a class="carousel-control left" href="#single" data-slide="prev">Previous</a>
        <a class="carousel-control right" href="#single" data-slide="next">Next</a>
      </div>
    </div>

    <!-- 留个坑 -->
    <div id="ee"></div>

    <!-- 尾部 -->
    <footer-vue></footer-vue>
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
  background: url("../../static/img/animal-banner.jpg") no-repeat
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
/* 热门Hot top  */
#hot {
  margin: 0;
  background-color: white;
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

/* 轮播专题 */
#an-special {
  margin-bottom: 20px;
}

.page-header {
  border-bottom: none;
  margin: 20px 0 20px;
}
.page-header,
.glyphicon-search {
  color: #5a5a5a;
}
/*title动画*/
.btn {
  display: inline-block;
  outline: none;
  border: none;
}
.btn-link,
.btn-link:hover {
  position: relative;
  color: #5a5a5a;
  padding-bottom: 2px;
  padding-left: 0;
  padding-right: 0;
  text-decoration: none;
  letter-spacing: 1px;
}
.btn-link:before,
.btn-link:after {
  content: "";
  position: absolute;
  background: -webkit-radial-gradient(#5a5a5a, white); /* Safari 5.1 - 6.0 */
  height: 3px;
  width: 0%;
  bottom: 0;
  left: 0;
}
a.btn-link:after {
  animation-duration: 1s;
  animation-name: slideunderline;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
a.btn-link.loaded:before,
a.btn-link.loaded:after {
  animation-duration: 0s;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  background: -webkit-radial-gradient(#5a5a5a, white); /* Safari 5.1 - 6.0 */
  height: 3px;
  color: #5a5a5a;
}
a.btn-link:hover:after {
  animation-duration: 0.6s;
  animation-name: resetunderline;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
/* 定义title动画 */
@keyframes slideunderline {
  to {
    background: -webkit-radial-gradient(#5a5a5a, white); /* Safari 5.1 - 6.0 */
    width: 100%;
  }
}
@keyframes resetunderline {
  0% {
    background: -webkit-radial-gradient(#5a5a5a, white); /* Safari 5.1 - 6.0 */
    width: 0%;
  }
  100% {
    background: -webkit-radial-gradient(#5a5a5a, white); /* Safari 5.1 - 6.0 */
    width: 100%;
  }
}
/* 轮播*/
*,
*:before,
*:after {
  box-sizing: border-box;
}
*,
*:focus,
*:active,
*:focus:active,
*:before,
*:before:focus,
*:before:active,
*:before:focus:active,
*:after,
*:after:focus,
*:after:active,
*:after:focus:active {
  outline: none;
}
.carousel {
  margin: 30px 0;
  width: 100%;
  /* width: calc(100% - ($button-spacing * 2)); */
}
.carousel .carousel-inner > .item.row {
  margin: 0;
}
.carousel .carousel-control {
  background: none;
  color: transparent;
  overflow: hidden;
  text-shadow: none;
  -webkit-transition: all 5s ease-in-out;
  transition: all 5s ease-in-out;
  width: 30px;
}
.carousel .carousel-control:before {
  color: #444;
  font-family: "Glyphicons Halflings";
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 30px;
}
.carousel .carousel-control:after {
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  content: "";
  height: 60%;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: all 2s ease-in-out;
  transition: all 2s ease-in-out;
  width: 100%;
}
.carousel .carousel-control:hover:after {
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.7);
}
.carousel .carousel-control.left {
  left: -30px;
}
.carousel .carousel-control.left:before {
  content: "\e079";
}
.carousel .carousel-control.left:after {
  right: -100%;
}
.carousel .carousel-control.right {
  right: -30px;
}
.carousel .carousel-control.right:before {
  content: "\e080";
}
.carousel .carousel-control.right:after {
  left: -100%;
}

/* 留坑 */
#ee {
  background: url("https://www.bornfree.org.uk/assets/images/front/segment/map.svg")
    no-repeat;
  background-size: cover;
  background-position: 50%;
  height: 300px;
}
</style>
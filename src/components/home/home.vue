<!-- homeVue -->
<template>
  <div>
    <!-- 头部 -->
    <header-vue></header-vue>

    <!-- banner和搜索框 -->
    <div class="jumbotron">
      <div class="container textstyle">
        <h3><b>让我们一起分享奇妙的动物世界</b></h3>
        <p><b>Let us share the wonderful animal world</b></p>
      </div>
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4 seach">
            <input type="text" class="form-seach" placeholder="搜索你喜欢的">
                <a class="glyphicon glyphicon-search"></a>
        </div>
      </div>
    </div>
    <!-- 专题轮播 -->
    <div class="container" id="an-special">
      <!-- <div class="row"> -->
        <div class="page-header">
          <h3><b>动物专题 Animal special</b></h3>
        </div>
      <!-- </div> -->
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
  margin-top:50px;
  margin-bottom: 0;
  background: url("../../static/img/animal-banner.jpg") no-repeat;
  background-size: cover;
  background-color: rgba(0,0,0,.08);
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
.jumbotron .seach {
  margin-top: 120px;
  opacity: 0.9;
}
/* .jumbotron .glyphicon .glyphicon-search{
  width: 40px;
  height: 40px;
} */
.jumbotron a {
  position: relative;
  left: -35px;
  display: inline-block;
}
.jumbotron a:hover{
  color:#333;
}
.jumbotron .form-seach {
    width: 90%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid rgba(255,255,255,.95);
    border-radius: 2px;
    background-color: rgba(255,255,255,.95);
    color: #444;
    box-shadow: 0 16px 32px 0 rgba(0,0,0,.07), 0 1px 3px 0 rgba(0,0,0,.02), 0 0 0 1px rgba(0,0,0,.1);
    box-sizing: border-box;
}

/* 轮播专题 */
#an-special{
  margin-bottom: 20px;
}
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
.container {
  margin: 0 auto;
  max-width: 100%;
}
.page-header,.glyphicon-search{
  color: #5A5A5A;
}
.carousel {
  margin: 30px 0;
  width: 100%;
  /* width: calc(100% - ($button-spacing * 2)); */
}
/* .carousel[data-shift="1"] .carousel-inner > .item {
  -webkit-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
} */
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
#ee{
  background: url('https://www.bornfree.org.uk/assets/images/front/segment/map.svg') no-repeat;
  background-size: cover;
  background-position: 50%;
  height: 300px;
}
</style>
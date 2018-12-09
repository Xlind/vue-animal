<!-- 轮播专题 -->
<template>
  <div id="an-special">
    <div class="container">
      <div class="page-header">
        <a class="btn btn-link">
          <h3>
            <b>新增野生动物Add Wild Animal</b>
          </h3>
        </a>
      </div>
      <div id="single" class="carousel slide" data-ride="carousel" data-shift="1">
        <div class="carousel-inner">
          <ul class="row item active">
            <li class="col-md-3 col-lg-3 one">
              <img
                src="../../../static/img/animal-lb.png"
                srcset="../../../static/img/animal-lb.png"
              >
            </li>
            <li class="col-md-3 col-lg-3 two">
              <img
                src="../../../static/img/animal-lb.png"
                srcset="../../../static/img/animal-lb.png"
              >
            </li>
            <li class="col-md-3 col-lg-3 three">
              <img src="../../../static/img/animal-lb.png">
            </li>
            <li class="col-md-3 col-lg-3 four">
              <img
                src="../../../static/img/animal-lb.png"
                srcset="../../../static/img/animal-lb.png"
              >
            </li>
          </ul>
          <ul class="row item">
            <li class="col-md-3 col-lg-3 five">
              <img
                src="../../../static/img/animal-lb.png"
                srcset="../../../static/img/animal-lb.png"
              >
            </li>
            <li class="col-md-3 col-lg-3 six">
              <img
                src="../../../static/img/animal-lb.png"
                srcset="../../../static/img/animal-lb.png"
              >
            </li>
            <li class="col-md-3 col-lg-3 seven">
              <img
                src="../../../static/img/animal-lb.png"
                srcset="../../../static/img/animal-lb.png"
              >
            </li>
            <li class="col-md-3 col-lg-3 eight">
              <img
                src="../../../static/img/animal-lb.png"
                srcset="../../../static/img/animal-lb.png"
              >
            </li>
          </ul>
        </div>

        <a class="carousel-control left" href="#single" data-slide="prev">Previous</a>
        <a class="carousel-control right" href="#single" data-slide="next">Next</a>
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
/* 新增动物轮播 */
#an-special{
  margin: 0;
  background-color: bisque;
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
</style>
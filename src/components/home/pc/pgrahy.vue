<!-- 动物专题 -->
<template>
  <div>
    <div id="pgrahy">
      <div class="container">
        <div class="page-header">
          <a class="btn btn-link">
            <h3>
              <b>动物专题 Animal Theme</b>
            </h3>
          </a>
        </div>
        <div class="row">
          <div class="col-md-4 colmn grid-item" v-for="(theme, index) in themes" :key="index">
            <figure>
              <div class="box-overlay">
                <a href>
                  <button type="button" class="btn btn-site">{{ theme.title }}</button>
                </a>
              </div>
              <img v-bind:src="theme.url" v-bind:alt="theme.msg">
            </figure>
            <figcaption>
              <a class="page-link" href>
                <span class="ellipsis-multiline">{{ theme.msg }}</span>
              </a>
              <span class="date">{{ theme.date }}</span>
            </figcaption>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      themes: [
        {
          title: "狮子专题",
          url: "/api/img/lion2.jpeg",
          msg: "南非母狮遭鬣狗群围困，长啸一声喊来同伴支援",
          date: "2019年02月9日 18:30"
        },
        {
          title: "老虎专题",
          url: "/api/img/tiger.jpeg",
          msg: "一山不容二虎！老虎姐妹上演激烈领地之争",
          date: "2019年02月10日 19:39"
        },
        {
          title: "大象专题",
          url: "/api/img/elephant.jpeg",
          msg: "失眠还是不敢睡？研究称野生大象每天只睡2小时",
          date: "2019年2月11日 15:09"
        }
      ]
    };
  }
};
</script>
<style>
/* 动物专题 */
#pgrahy {
  background-color: #f4fddf;
  padding-bottom: 35px;
}
figure img {
  width: 100%;
  height: 200px;
}
.box-overlay {
  opacity: 0;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  /* -webkit-backface-visibility: hidden; */
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
}
.btn-site {
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 40px;
  transition: all 0.5s ease 0s;
  -webkit-transition: all 0.5s ease 0s;
  -ms-transition: all 0.5s ease 0s;
  padding: 0 25px;
}
.btn-site {
  line-height: 37px;
}
.grid-item:hover .box-overlay {
  background: rgba(0, 0, 0, 0.8);
  opacity: 0.9;
  z-index: 2;
}
.box-overlay button {
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  color: #333;
  transform: translate(-50%, -50%);
}
.colmn figure {
  position: relative;
}
.colmn figure .label {
  position: absolute;
  display: inline-block;
  top: 0px;
  left: 0px;
  background: #5a5a5a;
  line-height: 1.1em;
  padding-top: 0.44em;
  font-size: 20px;
  font-weight: 100;
  letter-spacing: 1px;
  border-radius: 0;
}
figcaption {
  padding: 8px 25px 1px 25px;
  background-color: #fff;
  vertical-align: top;
  font-size: 20px;
  position: relative;
  height: 5em;
}
figcaption h5 {
  margin-top: 5px;
  margin-bottom: 5px;
  color: #333;
  height: 2.6em;
  overflow: hidden;
}
.ellipsis-multiline {
  color: #333;
  font-size: 18px;
}
span.date {
  position: absolute;
  padding-bottom: 0px;
  top: auto;
  bottom: 10px;
  left: 25px;
  color: #333;
  font-size: 15px;
}
</style>
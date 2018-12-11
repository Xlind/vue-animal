<!-- homeVue -->
<template>
  <div>
    <!-- 头部 -->
    <header-vue></header-vue>

    <!-- banner和搜索框 -->
    <banner-vue></banner-vue>

    <!-- 热门Hot top -->
    <div id="hot">
      <div class="container">
        <div class="page-header">
          <a class="btn btn-link">
            <h3>
              <b>热门推送 Hot Tags Push</b>
            </h3>
          </a>
        </div>
        <div class="row card">
          <div class="col-md-4 col-lg-4">
            <img src="../../static/img/test.jpg" width="350px">
          </div>
          <div class="col-md-8 col-lg-8">
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

    <!-- 新增动物轮播 -->
    <anlunbo-vue></anlunbo-vue>

    <!-- 动物专题-->
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
              <span class="label">图标</span>
              <img
                v-bind:src="theme.url"
                alt="Singapore Government Proposes Ban on Sale of Elephant Ivory"
              >
            </figure>
            <figcaption>
              <h5>
                <a class="page-link" href>
                  <span class="ellipsis-multiline">{{ theme.msg }}</span>
                </a>
              </h5>
              <span class="date">{{ theme.date }}</span>
            </figcaption>
          </div>
        </div>
      </div>
    </div>

    <!-- 中国重点保护 -->
    <div id="Keyprotection">
      <div class="kp">
        <div class="kp-item">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-9 kp-leftstyle">
              <h2>中华人民共和国动物资源</h2>
              <h4>
                据统计，全中国陆栖脊椎动物约有2070种，占世界陆栖脊椎动物的9.8%。
                其中鸟类1170多种、兽类400多种、两栖类184种，分别占世界同类动物的13.5%、11.3%和7.3%。
              </h4>
              <h4>
                中国是生物多样性破坏较严重的国家，在联合国《国际濒危物种贸易公约》列出的640种世界濒危物种中，中国有156种，约占总数的1/4，形势十分严峻。
                造成物种灭绝的最主要原因是人类对野生动植物资源的掠夺式开发和利用。
              </h4>
              <a href="#" class="kp-btn">了解国家重点保护动物</a>
            </div>
          </div>
        </div>
        <div class="kp-item">
          <img src="animal-lb.png">
        </div>
      </div>
    </div>

    <!-- 栏目 -->
    <div id="column">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="page-header">
              <a class="btn btn-link">
                <h3>
                  <b>动物新闻 Animal News</b>
                </h3>
              </a>
            </div>
            <ul class="cm-line">
              <li class="lititle" v-for="(newp, index) in news" :key="index">
                <i class="z"></i>
                <a :href="newp.url">{{ newp.title }}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <div class="page-header">
              <a class="btn btn-link">
                <h3>
                  <b>动物知识Animal Knowledge</b>
                </h3>
              </a>
            </div>
            <ul  class="cm-line"> 
              <li class="lititle" v-for="(newp, index) in news" :key="index">
                <i class="z"></i>
                <a :href="newp.url">{{ newp.title }}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <div class="page-header">
              <a class="btn btn-link">
                <h3>
                  <b>动物保护 Animal protection</b>
                </h3>
              </a>
            </div>
            <ul class="cm-line">
              <li class="lititle" v-for="(newp, index) in news" :key="index">
                <i class="z"></i>
                <a :href="newp.url">{{ newp.title }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 尾部 -->
    <footer-vue></footer-vue>
  </div>
</template>

<script>
export default {
  data() {
    return {
      themes: [
        {
          title: "狮子专题",
          url:
            "http://img5.imgtn.bdimg.com/it/u=2168427908,4072089613&fm=200&gp=0.jpg",
          msg: "Singapore Government Proposes Ban on Sale of Elephant Ivory",
          date: "November 29, 2018"
        },
        {
          title: "老虎专题",
          url: "animal-lb.png",
          msg: "Singapore Government Proposes Ban on Sale of Elephant Ivory",
          date: "November 29, 2018"
        },
        {
          title: "大象专题",
          url: "animal-lb.png",
          msg: "Singapore Government Proposes Ban on Sale of Elephant Ivory",
          date: "November 29, 2018"
        }
      ],
      news: [
        { url: " ", title: "海滩惊现怪兽尸体 形似史前动物(组图)" },
        { url: " ", title: "这不是哺乳动物的专利，蜘蛛竟然也有“乳汁”！" },
        { url: " ", title: "“悬崖精灵”：北美大角羊的力量与美丽" },
        { url: " ", title: "为什么哈士奇的眼睛是蓝色的？" },
        { url: " ", title: "憨态可掬的松鼠竟然藏着一个惊天大秘密！" },
        { url: " ", title: "奇特怪诞虫露出真面目" },
        { url: " ", title: "千只白鹭栖息昆明动物园" },
      ]
    };
  }
};
</script>
<style>
/* 栏目 */
#column {
  background-color: #eaf6f3;
  padding-bottom: 40px;
}
#column a {
  color: #5a5a5a;
  line-height: 33px;
}
#column .cm-line {
  border-left: 1px solid #aebbc6;
  padding-left: 12px;
}

#column i.z {
  width: 6px;
  height: 6px;
  background: #ffd04b;
  margin: 15px 8px 0px 0px;
  float: left;
}
.lititle {
  word-wrap: break-word;
  vertical-align: middle;
}
/* 热门Hot top  */
#hot {
  margin: 0;
  background-color: #f4fddf;
  padding-bottom: 40px;
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
  font-size: 15px;
}
span.date {
  position: absolute;
  padding-bottom: 0px;
  top: auto;
  bottom: 10px;
  left: 25px;
  color: #333;
}
/* 重点保护 */
#keyprotection {
  background-color: rgb(246, 255, 127);
}
.kp {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.kp-item {
  flex: 1;
  text-align: center;
  background-color: rgb(205, 235, 235);
}
.kp-item img {
  width: 100%;
  height: auto;
}
.kp-leftstyle {
  margin: 30px 0;
}
.kp-leftstyle h4 {
  padding: 0 50px;
  line-height: 30px;
  text-align: left;
  text-indent: 20px;
}
.kp-leftstyle h4,
.kp-leftstyle h2 {
  color: #333;
}
#Keyprotection a {
  color: #fff;
  background-color: #6fc0ce;
  display: block;
  text-align: center;
  width: 316px;
  height: 46px;
  line-height: 46px;
  vertical-align: middle;
  border: 1px solid #fff;
  font-size: 20px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  margin: 50px auto 0;
}
#Keyprotection a:hover {
  background-color: #5a5a5a;
}
</style>
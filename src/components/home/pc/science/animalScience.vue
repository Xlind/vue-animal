<!-- 动物科普 -->
<template>
  <div>
    <header-vue></header-vue>
    <animalsciencebg-vue></animalsciencebg-vue>
    <div class="container" id="science">
      <div class="row">
        <div class="col-md-3">
          <div id="menu">
            <ul class="nav">
              <li v-for="category in categories" :key="category.id" class="active">
                <a href="javascript:;" @click="tab(category.id)">
                  {{category.title}}</a>
                  <!-- <span>{{category.enTitle}}</span> -->
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-9">
          <div class="science-list">
            <ul>
              <li
                v-for="img in tabIndex==0? imgs: categories[tabIndex].list"
                :key="img.id"
                class="clearfix"
              >
                <div class="image-wrap">
                  <router-link :to="{name:'scidence.detail',params:{id:img.id}}">
                    <img :src="img.imgUrl">
                  </router-link>
                </div>
                <div class="text-wrap">
                  <h3>
                    <a href>{{img.name}}</a>
                    <span>{{img.enName}}</span>
                  </h3>
                  <p v-text="img.desc"></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const animalsciencebgVue = r =>
  require.ensure(
    [],
    () => r(require("./animalsciencebg.vue")),
    "animalsciencebgVue"
  ); //栏目
export default {
  data() {
    return {
      categories: [], //分类
      imgs: [], //图片数据
      tabIndex: 1
    };
  },
  created() {
    this.$ajax
      .get("science.json")
      .then(res => {
        this.categories = res.data.categories;
        for (var i = 0; i < this.categories.length; i++) {
          var category = this.categories[i];
          if (category.list != undefined) {
            for (var j = 0; j < category.list.length; j++) {
              this.imgs.unshift(category.list[j]);
            }
            this.imgs.sort((a,b)=>{
              return a-b;
            })
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    tab(index) {
      this.tabIndex = index;
    }
  },
  components: {
    animalsciencebgVue
  }
};
</script>

<style scoped>
div {
  background-color: #eaf6f3;
}
#science {
  margin-top: 30px;
}
#menu {
  width: 160px;
  border: 1px solid rgb(253, 253, 253);
}

#menu ul {
  margin: 0px;
  padding: 0px;
  list-style: none;
  /* 隐藏默认列表符号*/
}

#menu ul li {
  background-color: #3d444c;
  padding-top: 5px;
  line-height: 50px;
  /*行距*/
  text-align: center;
}
#menu a {
  display: block;
  font-size: 20px;
  text-decoration: none;
  /*隐藏超廉价默认下划线*/
}

#menu ul li:hover ul {
  display: block;
}

#menu ul li:hover ul li a {
  display: block;
}
.nav > li > a {
  padding: 0;
}

/* 右边盒子 */
.science-list .image-wrap {
  float: left;
  position: relative;
  padding-bottom: 15px;
}
.science-list li .image-wrap a {
  /* width: 226px;
  height: auto; */
  position: relative;
  display: block;
}
.science-list li .image-wrap a:hover img {
  filter: alpha(opacity=80);
  -moz-opacity: 0.8;
  opacity: 0.8;
}
.science-list li .image-wrap img {
  width: 100%;
  height: auto;
}
.science-list li .image-wrap i.voice {
  display: block;
  width: 19px;
  height: 19px;
  position: absolute;
  top: 6px;
  right: 6px;
  background-position: -145px -86px;
}
.science-list li .text-wrap {
  float: left;
  width: 500px;
  margin: 0 0 0 26px;
  display: inline;
}
.science-list li .text-wrap h3 a {
  font-size: 25px;
  color: #3f3f43;
  font-weight: 800;
  line-height: 22px;
}
.science-list li .text-wrap h3 span{
  font-size: 18px;
  font-weight: 800;
}
.science-list li .text-wrap h3 a:hover {
  color: #656769;
}
.science-list li .text-wrap p {
  font-size: 14px;
  color: #656769;
  line-height: 24px;
  margin-top: 15px;
}
/* start clearfix */
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  line-height: 0;
  clear: both;
  visibility: hidden; /*元素仍占据其本来的空间*/
}
/* 这是对非IE6/7的处理，IE6/7并不支持生成元素(不支持伪类:before :after )*/
.clearfix {
  display: inline-block;
}
/*  
 这是对 Mac 上的IE浏览器进行的 */
* html .clearfix {
  height: 1%;
}
/*  
 这是对 win 上的IE6浏览器进行的处理 */
.clearfix {
  display: block;
}
/* end clearfix */
.col-md-9 {
  position: relative;
  left: -5em;
}
</style>
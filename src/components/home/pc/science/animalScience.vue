<!-- 动物科普 -->
<template>
  <div>
    <header-vue></header-vue>
    <animalsciencebg-vue></animalsciencebg-vue>
    <div class="container" id="science">
      <div class="row">
        <div class="col-md-2">
          <div id="menu">
            <ul>
              <li v-for="category in categorys" :key="category.id">
                <a href="javascript:;" @click="category.id">{{category.title}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-10">
          <div class="science-list">
            <ul>
              <li v-for="img in imgs" :key="img.id" class="clearfix">
                <div class="image-wrap">
                  <router-link :to="{name:'scidence.detail',params:{id:img.id}}">
                    <img :src="img.img_url">
                  </router-link>
                </div>
                <div class="text-wrap">
                  <h3>
                    <a href>{{img.title}}</a>
                  </h3>
                  <p v-text="img.content"></p>
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
      categorys: [], //分类
      imgs: [], //图片数据
      num: 1
    };
  },
  created() {
    this.$ajax
      .get("science.json")
      .then(res => {
        this.categorys = res.data.categorys;
        this.imgs = res.data.msg;
      })
      .catch(err => {
        console.log(err);
      });
  },
  method: {
    tab(index) {
      this.num = index;
    }
  },
  components: {
    animalsciencebgVue
  }
};
</script>

<style scoped>
#science {
  margin-top: 30px;
}
#menu {
  width: 160px;
  background-color: #5a5a5a;
  border: 1px solid rgb(253, 253, 253);
}

#menu ul {
  margin: 0px;
  padding: 0px;
  list-style: none;
  /* 隐藏默认列表符号*/
}

#menu ul li {
  background-color: #5a5a5a;
  height: 50px;
  line-height: 50px;
  /*行距*/
  text-align: center;
  /* border-bottom: 2px solid rgb(255, 255, 255); */
  position: relative;
}

#menu a {
  display: block;
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  /*隐藏超廉价默认下划线*/
}

#menu a:hover {
  color: white;
  font-size: 25px;
}

#menu ul li ul {
  display: none;
  /*默认隐藏*/
  top: 0px;
  width: 130px;
  /* border: 1px solid #ccc; */
  border-bottom: none;
  position: absolute;
  left: 100px;
}

#menu ul li:hover ul {
  display: block;
}

#menu ul li:hover ul li a {
  display: block;
}
.science-list .image-wrap {
  float: left;
  position: relative;
}
.science-list li .image-wrap a {
  width: 226px;
  height: 157px;
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
  width: 540px;
  margin: 10px 0 0 26px;
  display: inline;
}
.science-list li .text-wrap h3 a {
  font-size: 18px;
  color: #3f3f43;
  font-weight: 500;
  line-height: 22px;
}
.science-list li .text-wrap h3 a:hover {
  color: #396da8;
}
.science-list li .text-wrap p {
  font-size: 14px;
  color: #656769;
  line-height: 24px;
  margin-top: 15px;
}
</style>
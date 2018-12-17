<!-- 首页栏目 -->
<template>
  <div>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
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
}

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
</style>
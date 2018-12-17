<!-- 首页热门推送 -->
<template>
  <div>
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
            <img src="../../../static/img/test.jpg" width="350px">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  }
}

</script>
<style>
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
</style>
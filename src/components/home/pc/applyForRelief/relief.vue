<!-- 救助站 -->
<template>
  <div>
    <!-- 头部 -->
    <header-vue></header-vue>
    <!-- 救助 -->
    <div class="containMain">
      <div class="innerPageBg">
        <img src="https://www.gzzoo.com/UploadFile/4(1).jpg" alt>
      </div>
      <div class="gary-bg">
        <h1 class="cateTitle cateTitleColorWhite">珍惜生命，珍爱我们的朋友—动物</h1>
        <div class="innerPageCon_1">
          <div class="grayTitle">
            <strong>
              救助站
              <span class="lineL"></span>
              <span class="lineR"></span>
            </strong>
          </div>
          <ul class="messDescListA">
            <li>
              <div class="t">
                <span data-toggle="modal" data-target="#myModal">发布信息</span>
              </div>
            </li>
          </ul>
          <!-- 模态框（Modal） -->
          <div
            class="modal fade"
            id="myModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >&times;</button>
                  <h4 class="modal-title" id="myModalLabel">救助帖</h4>
                </div>
                <div class="modal-body">
                  <div class="container">
                      <div class="theme">
                    <label>
                      <input type="checkbox">
                      <span class="checkbox-icon"></span>
                      <span class="checkbox-lable">寻找主人</span>
                    </label>
                    <label>
                      <input type="checkbox">
                      <span class="checkbox-icon"></span>
                      <span class="checkbox-lable">寻找宠物</span>
                    </label>
                    </div>
                    <div>标题</div>
                    <div>内容</div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                  <button type="button" class="btn btn-primary">发布帖子</button>
                </div>
              </div>
              <!-- /.modal-content -->
            </div>
            <!-- /.modal -->
          </div>
          <div class></div>
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
    return {};
  }
};
</script>
<style scoped>
.containMain {
  position: relative;
  margin-top: 50px;
  margin-bottom: 50px;
  overflow-x: hidden;
}
.cateTitle {
  height: 165px;
  line-height: 165px;
  font-size: 30px;
  max-width: 1000px;
  color: #413d3b;
}
.cateTitleColorWhite {
  padding-left: 100px;
  color: #fff;
}
.grayTitle {
  text-align: center;
  margin-bottom: 30px;
  color: #413d3b;
  font-size: 24px;
  overflow: hidden;
}
.grayTitle strong {
  display: inline-block;
  position: relative;
  font-weight: normal;
}
.grayTitle span {
  width: 100px;
  height: 1px;
  overflow: hidden;
  background-color: #413d3b;
  font-size: 1px;
  position: absolute;
  top: 50%;
  display: inline-block;
}
.grayTitle .lineL {
  left: -120px;
}
.grayTitle .lineR {
  right: -120px;
}
.messDescListA li {
  padding-bottom: 15px;
  font-size: 14px;
  line-height: 1.8;
}
.messDescListA .t {
  line-height: 32px;
  font-size: 16px;
  margin-bottom: 8px;
}
.messDescListA .t span {
  color: #fff;
  background-color: #4b9e98;
  height: 32px;
  padding: 0 40px 0 22px;
  position: relative;
  border-radius: 5px 0 0 5px;
  display: inline-block;
  cursor: pointer;
}
.messDescListA .t b {
  width: 0;
  height: 0;
  border: 16px solid;
  border-color: #fff #fff #fff #4b9e98;
  display: inline-block;
  position: absolute;
  right: -5px;
  top: 0;
}

.innerPageCon_1 {
  width: 1200px;
  margin: auto;
  background-color: azure;
  padding: 30px 30px 0 30px;
  -webkit-animation: appear-up 1s ease;
  -moz-animation: appear-up 1s ease;
  -o-animation: appear-up 1s ease;
  animation: appear-up 1s ease;
}

.innerPageCon {
  background-color: #fff;
  padding: 0 40px;
  opacity: 0;
  padding-top: 10px;
}
.innerPageBg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: -10;
}
.innerPageBg img {
  width: 100%;
  height: auto;
}
.innerPageBg .tips {
  position: absolute;
  left: 20px;
  bottom: 20px;
  color: #fff;
  font-family: "AVENIR LT 45 BOOK";
}
.innerPageCon .messDesc {
  line-height: 1.8;
  font-size: 14px;
}
.innerPageCon .messDesc p {
  padding-bottom: 15px;
}
.innerPageCon .messDesc img {
  max-width: 100%;
}
.checkbox {
  display: flex;
  width: 100px;
}
.checkbox label {
  padding-left: 0;
  align-items: center;
  display: flex;
}
.checkbox input {
  display: none;
}
.checkbox .checkbox-icon {
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 1px solid #999;
  color: #1f1f1f;
}
.checkbox .checkbox-icon::before {
  display: block;
  content: "";
  text-align: center;
  font-size: 14px;
  color: black;
}
input:checked + .checkbox-icon::before {
  content: "\2714";
}
.checkbox-label {
  font-size: 14px;
  padding-left: 8px;
}
</style>
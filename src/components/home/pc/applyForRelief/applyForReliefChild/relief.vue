<!-- 救助站 -->
<template>
  <div>
    <!-- 救助 -->
    <div class="containerDiv">
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
      <div class="media">
        <div class="media-left">
          <img src="../../../static/img/1.png" class="media-object" style="width:60px">
        </div>
        <div class="media-body">
          <h4 class="media-heading">寻找主人</h4>
          <p>本人于2019年3月29日13:50左右在开福区吉​‌‌祥巷生鲜农贸市场附近丢失一只棕色泰迪公犬，
            全身棕色，躯干剃过毛，比头不毛发少，年龄1岁，体重约4.5公斤，左下犬齿有两颗，走丢时没有穿衣服，
            没有带项圈，如有知情者请联系我，提供可靠信息，若能找到，必将重谢。
            </p>
        </div>
      </div>
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
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
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
<style scoped>
.containerDiv {
  padding: 10px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
.messDesc {
  line-height: 1.8;
  font-size: 14px;
}
.messDesc p {
  padding-bottom: 15px;
}
.messDesc img {
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
<!-- 申领处 -->
<template>
  <div>
    <!-- 申领-->
    <div class="containerDiv">
      <div class="grayTitle">
        <strong>
          申领站
          <span class="lineL"></span>
          <span class="lineR"></span>
        </strong>
      </div>
      <ul class="messDescListA">
        <li>
          <div class="t">
            <span data-toggle="modal" data-target="#apply">领养申请表</span>
            <p>下面这些汪小宝儿和喵小宝儿都在寻找着领养家庭，TA们一直在殷殷期待着主人的到来，给TA们一个家，TA们还你终生的爱！</p>
          </div>
        </li>
      </ul>
      <div class="imgDiv">
        <img src="../../../../../static/img/01.jpg">
        <img src="../../../../../static/img/02.jpg">
        <img src="../../../../../static/img/03.jpg">
        <img src="../../../../../static/img/04.jpg">
        <img src="../../../../../static/img/05.jpg">
        <img src="../../../../../static/img/06.jpg">
        <img src="../../../../../static/img/07.jpg">
        <img src="../../../../../static/img/08.jpg">
        <img src="../../../../../static/img/09.jpg">
      </div>
      <hr>
          <div class="applyRule">
            <p class="applyTitle">
              带TA回家前，请先仔细阅读以下的内容，你是否已经具备成为一个好主银的资格呢？
            </p>
            <p>
              <span>一、申请条件</span><br>
              1、申请人必须是年满18周岁的成年人，并且具有完全行为能力。未满18周岁者需由家长（监护人）同意并签字。<br>
              2、领养人一定要真心喜欢动物并且有一定的经济实力，最基本的要求是给它们一个温暖的居住所，以及每日温饱的保证。<br>
              3、与家人共同居住的申请人，需在征得其他家庭成员同意的情况下领养动物。租住他人房屋的申请人，需得到屋主的许可，出具屋主书面许可饲养宠物的信件。<br>
              4、住校的学生请不要申请，一般学校不允许寝室饲养宠物，而且你并不能保障它们的生活。<br>
              5、频繁更换工作地点的人们请慎重考虑，因为你异地搬迁的情况可能会造成它们再次流浪。而且新居所的业主如果对于宠物比较排斥，它们又会继续流浪，除非你能做到不离不弃。<br>
              6、新婚夫妻慎重申请，避免将来以怀孕为名抛弃动物。<br>
              7、有多年养宠物经验者优先。<br>
              8、家中有爱动物的老人优先。<br>
              <span>二、领养准则</span><br>
              1、保证领养动物的正常生活，爱护它们，不能虐待宠物。<br>
              2、保证无论环境如何变化，要对小动物不离不弃。<br>
              3、在犬或猫十几、二十年的生涯当中，不得将它们转送甚至出售，如的确发生不可抗因素的变故，不能再继续养它，请通知原救助人，退回原救助处；或是有比较可靠的新领养人时，请通知原救助人，及时变更资料。我们需要了解所救下的动物最终的归宿，以便我们再次回访，确保它们有人领养，请体谅我们的心情。<br>
              4、为了主人和小动物之间能够更好的相处，申请人需亲自选定领养的动物，不得请其他人代劳。<br>
              5、科学喂养，尽量给动物吃专用粮（狗粮、猫粮及罐头），不要给它们不利于其健康的食物。<br>
              6、在小动物生病的情况下，请到医院医治，保证领养动物的健康是你对它的责任。<br>
              7、请为领养回去的犬或猫做绝育手术。<br>
              8、每年定期免疫，请带领养回去的动物到动物医院进行免疫。<br>
              9、领养后定期向中国小动物保护协会提供反馈信息。<br>
              10、接受中国小动物保护协会的回访并积极配合。<br>
              11、如遇领养环境发生变化须与中国小动物保护协会联系并确认是否适合继续领养。<br>
              12、严格遵守有关法律法规和社会公德，合法、合理地饲养宠物，并为您领养的狗狗办理相关证件。领养人保证做文明的宠物主人，做到保护动物的福利、不虐待动物（保证不为领养动物做任何肉体的改观，提供水、食品、避风遮阳居所、正常锻炼、洗澡和梳理）；不扰乱邻里正常生活（必要时，为动物提供行为训练，不故意激怒动物伤人。）；保证环境卫生（遛狗时捡拾粪便，不破坏环境）。<br>
              13、动物与人类不同。它们的行为通常无法预测。因此当它们同儿童相处时，需有成人在场。在领养前，请充分了解动物的性情、习惯，根据自身条件和偏好选择合适的小动物进行领养。<br>
              14、领养时允许拍摄领养人和被领养动物的照片，如出现失访、虐待等情况，将在官网予以公布，情节严重者将追究其相关法律责任。<br>
            </p>
          </div>
      <!-- 模态框（Modal） -->
      <div
        class="modal fade"
        id="apply"
        tabindex="-1"
        role="dialog"
        aria-labelledby="applyForm"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="applyForm">领养申请表</h4>
            </div>
            <div class="modal-body">
              <div class="content">
                <form class="form-horizontal formStyle" role="form">
                  <div class="form-group">
                    <label>姓名</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <div class="theme">
                      <label>
                        <input type="checkbox">
                        <span class="checkbox-icon"></span>
                        <span class="checkbox-lable">男</span>
                      </label>
                      <label>
                        <input type="checkbox">
                        <span class="checkbox-icon"></span>
                        <span class="checkbox-lable">女</span>
                      </label>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>身份证号码</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <label>出生日期</label>
                    <input type="text" class="form-control" placeholder="1996-12-20">
                  </div>
                  <div class="form-group">
                    <label>现居住地址</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <label>手机</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <label>邮箱</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <label>单位名称</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <label>现居住环境</label>
                    <div class="theme2">
                      <label>
                        <input type="checkbox">
                        <span class="checkbox-icon"></span>
                        <span class="checkbox-lable">产权房</span>
                      </label>
                      <label>
                        <input type="checkbox">
                        <span class="checkbox-icon"></span>
                        <span class="checkbox-lable">独立租房</span>
                      </label>
                      <label>
                        <input type="checkbox">
                        <span class="checkbox-icon"></span>
                        <span class="checkbox-lable">合租房</span>
                      </label>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>领养动物的编号</label>
                    <input type="text" class="form-control" placeholder="输入想要领养的动物的编号">
                  </div>
                  <div class="form-group">
                    <label>领养动物需求</label>
                    <label class="description">已选好领养动物，请直接填写TA的领养编号；如未选中，可填写你期望的TA的样子，包括：性格、毛色等……</label>
                    <textarea class="form-control" rows="5"></textarea>
                  </div>
                  <div class="form-group">
                    <label>其它</label>
                    <textarea class="form-control" rows="5"></textarea>
                  </div>
                </form>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
              <button type="button" class="btn btn-primary">提交</button>
            </div>
          </div>
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
.content {
  padding: 20px;
}
.theme {
  display: flex;
  width: 150px;
  justify-content: space-between;
  padding-bottom: 10px;
}
.theme2 {
  display: flex;
  width: 400px;
  justify-content: space-between;
  padding-bottom: 10px;
}
.theme label,
.theme2 label {
  padding-left: 0;
  align-items: center;
  display: flex;
}
.theme input,
.theme2 input {
  display: none;
}
.theme .checkbox-icon,
.theme2 .checkbox-icon {
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 1px solid #999;
  color: #1f1f1f;
  margin-right: 5px;
}
.theme .checkbox-icon::before,
.theme2 .checkbox-icon::before {
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
  padding-left: 15px;
}
.relBody .media-heading {
  font-size: 22px;
}
.relBody .media-heading .small-heading {
  font-size: 15px;
  padding-left: 10px;
  color: #4b9e98;
}
.small-adress {
  margin-left: 40px;
}
.formStyle input {
  outline: none;
}
.imgDiv {
  text-align: center;
}
.imgDiv img {
  width: 600px;
  height: auto;
  padding-bottom: 20px;
}
.applyRule {
 padding: 10px 20px;
}
.applyRule p {
  font-size: 15px;
  color: #0c0b0a;
  line-height: 30px;
}
.applyRule p span {
  font-size: 18px;
  padding-top: 10px;
}
.applyRule .applyTitle {
  font-size: 25px;
  color: rgb(227, 108, 9);
}
</style>
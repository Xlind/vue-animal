<!-- 志愿者 -->
<template>
  <div>
    <!-- 志愿者-->
    <div class="containerDiv">
      <div class="grayTitle">
        <strong>
          志愿者
          <span class="lineL"></span>
          <span class="lineR"></span>
        </strong>
      </div>
      <ul class="messDescListA">
        <li>
          <div class="t">
            <span data-toggle="modal" data-target="#volunteer">志愿者申请表</span>
            <p class="volunteerStyle">志愿者——是社会的财富，更是TA的希望！</p>
            <p>
              我们需要组织工作者——组织活动，对外联络等；
              <br>我们需要宣传工作者——编辑、摄影等；
              <br>我们需要医疗工作者——防疫、救助等；
              <br>
            </p>
            <p>志愿者是最值得敬佩也是最宝贵的社会财富，动保事业需要更多“志愿者”的加入。</p>
            <p>
              只要你想为动保事业尽一份力！
              <br>愿意一起为动保事业、为TA们奉献自己的爱！
              <br>我们就欢迎你的加入!
              <br>
            </p>
          </div>
        </li>
      </ul>

      <!-- 模态框（Modal） -->
      <div
        class="modal fade"
        id="volunteer"
        tabindex="-1"
        role="dialog"
        aria-labelledby="volunteerForm"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="volunteerForm">志愿者申请表</h4>
            </div>
            <div class="modal-body">
              <div class="content">
                <form class="form-horizontal formStyle" role="form">
                  <div class="form-group">
                    <label>姓名</label>
                    <input type="text" class="form-control" v-model="name">
                  </div>
                  <div class="form-group">
                    <div class="theme">
                      <label>
                        <input type="checkbox" v-model="tmpMan">
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
                    <label>所在地</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <label>出生日期</label>
                    <input type="text" class="form-control" placeholder="1996-12-20">
                  </div>
                  <div class="form-group">
                    <label>手机</label>
                    <input type="text" class="form-control" v-model="contact">
                  </div>
                  <div class="form-group">
                    <label>邮箱</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <label class="volTitle">志愿者参与行动信息</label>
                  </div>
                  <div class="form-group">
                    <label>动保宣传员</label>
                    <label
                      class="volContext"
                    >传播是高效宣传科学、文明养宠，动物福利理念的重要工作，无论你在哪里，请积极为TA发声，让更多人看到TA们的处境！</label>
                    <div class="theme2">
                      <label>
                        <input type="checkbox">
                        <span class="checkbox-icon"></span>
                        <span class="checkbox-lable">我传播我光荣</span>
                      </label>
                      <label>
                        <input type="checkbox">
                        <span class="checkbox-icon"></span>
                        <span class="checkbox-lable">不参与</span>
                      </label>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>活动志愿行</label>
                    <label
                      class="volContext"
                    >我们会不定期在全国各地举办落地活动，每一场活动都需要志愿者的支持与参与。假如有一天，我们来到你的身边，请你一定加入进来！</label>
                    <div class="theme2">
                      <label>
                        <input type="checkbox">
                        <span class="checkbox-icon"></span>
                        <span class="checkbox-lable">带我一个</span>
                      </label>
                      <label>
                        <input type="checkbox">
                        <span class="checkbox-icon"></span>
                        <span class="checkbox-lable">不参与</span>
                      </label>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>个人简介</label>
                    <textarea
                      class="form-control"
                      rows="5"
                      placeholder="根据自身的兴趣爱好等简要介绍，不超过200字..."
                      v-model="introduction"
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
              <button type="button" class="btn btn-primary" @click="applyForVolunteers()">提交</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./spop.js";
export default {
  data() {
    return {
      name: "",
      sex: 0,
      age: 0,
      contact: "",
      introduction: "",
      tmpMan: false
    };
  },
  methods: {
    applyForVolunteers() {
      if (this.tmpMan == true) {
        this.sex = 0;
      } else {
        this.sex = 1;
      }
      // 申请志愿者。
      this.$ajax({
        method: "post",
        data: {
          name: this.name,
          sex: this.sex,
          age: this.age,
          contact: this.contact,
          introduction: this.introduction
        },
        url: "/applyForVolunteers"
      }).then(res => {
        if (res.data.code == 200) {
          $("#volunteer").modal("hide");
           spop({
            template: "申请表提交成功，等待管理员审核...",
            style: 'success',
            position  : 'bottom-right',
            autoclose: 8000
          });
        } else {
           spop({
            template: "申请失败。可能是信息不全",
            style: 'error',
            position  : 'bottom-right',
            autoclose: 8000
          });
        }
      });
    }
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
  width: 300px;
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
.volunteerStyle {
  font-size: 25px;
  padding-top: 10px;
  color: #4b9e98;
}
.volTitle {
  font-size: 20px;
}
.volContext {
  font-size: 12x;
  color: #999;
}
</style>
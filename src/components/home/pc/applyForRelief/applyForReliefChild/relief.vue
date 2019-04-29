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
      <div class="media" v-for="(item, index) in reliefData" :key="index">
        <div class="media-left">
          <img
            v-if="item.type == 0"
            src="../../../../../static/img/1.png"
            class="media-object"
            style="width:150px"
          >
          <img
            v-if="item.type == 1"
            src="../../../../../static/img/2.png"
            class="media-object"
            style="width:150px"
          >
        </div>
        <div class="media-body relBody">
          <h4 class="media-heading">
            {{item.title}}
            <span class="small-heading">{{item.type == 0?'寻找主人':'寻找宠物'}}</span>
          </h4>
          <span>遗失时间：{{item.lostTime}}</span>
          <span class="small-adress">地点：{{item.address}}</span>
          <span class="small-adress">联系邮箱：{{item.email}}</span>
          <p>{{item.content}}</p>
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
              <div class="content">
                <div class="theme">
                  <label>
                    <input type="checkbox" v-model="tmp.tmpCheckBox0">
                    <span class="checkbox-icon"></span>
                    <span class="checkbox-lable">寻找主人</span>
                  </label>
                  <label>
                    <input type="checkbox" v-model="tmp.tmpCheckBox1">
                    <span class="checkbox-icon"></span>
                    <span class="checkbox-lable">寻找宠物</span>
                  </label>
                </div>
                <form class="form-horizontal formStyle" role="form">
                  <div class="form-group">
                    <label class="col-sm-2 control-label">标题</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" v-model="sendPostObj.title">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label">遗失时间</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" v-model="sendPostObj.lostTime" placeholder="2019-04-01">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label">地点</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" v-model="sendPostObj.address">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label">联系邮箱</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" v-model="sendPostObj.email">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label">详细内容</label>
                    <div class="col-sm-10">
                      <textarea class="form-control" rows="3" v-model="sendPostObj.content" placeholder="简单描述以下宠物特征等..."></textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
              <button type="button" class="btn btn-primary" @click="sendPost()">发布帖子</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <onToTop-vue></onToTop-vue>
  </div>
</template>

<script>
import "./spop.js";
export default {
  data() {
    return {
      tmp: {
        tmpCheckBox0: false,
        tmpCheckBox1: false
      },
      sendPostObj: {
        title: "",
        content: "",
        email: "",
        type: 0,
        address: "",
        lostTime: ""
      },
      applyVolunteerObj: {},
      reliefData: []
    };
  },
  created() {
    this.initDate();
  },
  methods: {
    initDate() {
      // 获取帖子。
      this.$ajax({
        method: "post",
        data: { email: "all" },
        url: "/gainPosts"
      }).then(res => {
        if (res.data.code == 200) {
          this.reliefData = res.data.posts;
        }
      });
    },
    sendPost() {
      if (this.tmp.tmpCheckBox0 == true) {
        this.sendPostObj.type = 0;
      } else {
        this.sendPostObj.type = 1;
      }
      // 发送帖子。
      this.$ajax({
        method: "post",
        data: {
          title: this.sendPostObj.title,
          content: this.sendPostObj.content,
          email: this.sendPostObj.email,
          type: this.sendPostObj.type,
          address: this.sendPostObj.address,
          lostTime: this.sendPostObj.lostTime
        },
        url: "/sendPosts"
      }).then(res => {
        if (res.data.code == 200) {
          $("#myModal").modal("hide");
          this.initDate();
          spop({
            template: "发布成功",
            style: 'success',
            position  : 'bottom-right',
            autoclose: 8000
          });
          // return;
        } else {
            spop({
            template: res.data.reason == 1042?'发布失败，查无此注册用户邮箱':'保存失败，可能未登录或信息不全',
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
  width: 200px;
  justify-content: space-between;
  padding-bottom: 10px;
}
.theme label {
  padding-left: 0;
  align-items: center;
  display: flex;
}
.theme input {
  display: none;
}
.theme .checkbox-icon {
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 1px solid #999;
  color: #1f1f1f;
  margin-right: 5px;
}
.theme .checkbox-icon::before {
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
.relBody {
  padding: 20px 10px 0 10px;
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
</style>
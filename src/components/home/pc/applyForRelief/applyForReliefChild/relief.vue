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
            v-if="item.type == 1"
            src="../../../../../static/img/1.png"
            class="media-object"
            style="width:150px"
          >
          <img
            v-if="item.type == 2"
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
                      <input type="text" class="form-control" v-model="sendPostObj.lostTime">
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
                      <textarea class="form-control" rows="3" v-model="sendPostObj.content"></textarea>
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
      reliefData: [
        {
          title: "急寻找猫猫 ",
          type: 2,
          lossTime: "2019-03-30",
          address: "东门北路2081号11栋一楼",
          email: "872937462@qq.com",
          content:
            "本人养了五年多的公猫于2019年3月20日离家出走​‌‌，现在不明什么原因出走，应该是生病或者是发情，现已经6天未归，主人很着急加心疼，每天都有出去寻找但没有结果，恳请好心人士如看见此猫请速与主人联系，必有酬谢，谢谢！"
        },
        {
          title: "寻找棕色泰迪",
          type: 2,
          lossTime: "2019-03-29",
          address: "开福区吉​‌‌祥巷生鲜农贸市场附近",
          email: "872937462@qq.com",
          content:
            "本人于2019年3月29日13:50左右在开福区吉​‌‌祥巷生鲜农贸市场附近丢失一只棕色泰迪公犬，全身棕色，躯干剃过毛，比头不毛发少，年龄1岁，体重约4.5公斤，左下犬齿有两颗，走丢时没有穿衣服，没有带项圈，如有知情者请联系我，提供可靠信息，若能找到，必将重谢。"
        },
        {
          title: "寻狗狗主人",
          type: 1,
          lossTime: "2019-03-27",
          address: "城区园林吉祥花园百货商店",
          email: "824537462@qq.com",
          content:
            "寻狗狗主人​‌‌,本人在27号发现了一只棕色的博美一直在百货商店门口等待，样子很可爱很干净，哪个粗心大意的主人把狗狗弄丢了，速来领回哦。"
        },
        {
          title: "寻找小鹿犬 ",
          type: 2,
          lossTime: "2019-03-11",
          address: "汕尾城区赤岭东侧交警大队隔壁车场",
          email: "736237462@qq.com",
          content:
            "家养小鹿犬，铁包金母系，3月11日上午于汕尾城区赤​‌‌岭成业路受惊，离家至今未归，离家时无佩带任何标志，请有线索或捡拾者好心归还，红包酬谢，拾者若想收养麻烦回音，谢谢"
        },
        {
          title: "捡到一条大金毛，狗狗的样子来跟我确认",
          type: 1,
          lossTime: "2019-03-05",
          address: "开福万达广场",
          email: "63782753@qq.com",
          content: "捡到一条大金毛，狗狗的样子来跟我确定，怕骗​‌‌子。"
        },
        {
          title: "寻找爱犬",
          type: 2,
          lossTime: "2019-01-15",
          address: "长沙市金麓小区",
          email: "783928763@qq.com",
          content:
            "本人有只雪纳瑞11个月的公狗叫贝利，特别黏人，穿着​‌‌横条纹的衣服和牛仔短裤，昨天在金麓小区不慎走失，麻烦大家帮帮忙，万分感谢。"
        }
      ]
    };
  },
  created() {
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
  methods: {
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
          alert("发帖成功");
        } else {
          alert("发帖失败。原因： " + res.data.reason);
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
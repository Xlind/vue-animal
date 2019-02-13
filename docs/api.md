# 后台api接口

统一使用post方式传入参数。
符号规则：
1. 冒号前的为key名，冒号后为示例。
2. 方括号表示该字段的值只能是方括号内中的一种。
3. 顿号隔开每种情况。
4. 小括号意为解释。
5. ...意为还有其他很多一般情况。

## 登录

1. 请求地址：/login
2. 请求参数：
+ email: 936947038@qq.com
+ password: 12345678
3. 返回json数据字段：
+ code: [200(登录成功)、400(登录失败)]。
+ reason(仅当code为400时才有此字段): [1001(无此用户)、1002(密码错误)]。
示例：
{
    "code": "200"
}

## 注册账户

1. 请求地址：/register
2. 请求参数：
+ email: 936947038@qq.com
+ name: 黄业
+ password: 12345678
+ sex: [0(男)、1(女)]
3. 返回json数据格式：
+ code: [200(注册成功)、400(注册失败)]。
+ reason(仅当code为400时才有此字段): [1011(该邮箱已注册)]。
示例：
{
    "code": "200"
}

## 获取个人信息。

1. 请求地址：/gainAccountInfo
2. 请求参数：
+ email: 936947038@qq.com
3. 返回json数据格式：
+ code: [200(修改成功)、400(修改失败)]。
+ reason(仅当code为400时才有此字段): [1021(无此邮箱用户)]。
+ email: 936947038@qq.com
+ username: 黄业
+ sex: [0(男)、1(女)]
示例1：
{
    "code": "200",
    "email": "936947038@qq.com",
    "username": "黄业",
    "sex": "0"
}
示例2：
{
    "code": "400",
    "reason": "1021"
}

## 个人中心修改信息。

1. 请求地址：/changeAccountInfo
2. 请求参数：
+ email: 936947038@qq.com
+ name: 黄业业
+ sex: [0(男)、1(女)]
3. 返回json数据格式：
+ code: [200(修改成功)、400(修改失败)]。
+ reason(仅当code为400时才有此字段): [1031(无此邮箱用户)]。
示例：
{
    "code": "400",
    "reason": "1021"
}

## 获取帖子

1. 请求地址：/gainPosts
2. 请求参数：
+ email: [all(返回所有的帖子)、9346947038@qq.com(返回发帖人为指定邮箱的帖子)...]
+ postsType: [0(获取已发布的帖子)、1(获取已解决的帖子)、2(获取已发布、已接近的帖子)]
3. 返回json数组中帖子的数据格式：
+ title: 申请领养
+ content: xxxxx
+ posterEmail: 936947038@qq.com
+ status: [0(已发布)、1(已解决)]
+ publishTime: 1544258923(时间戳，单位秒)
+ solveTime: [0(该帖子未解决)、1544258923(时间戳，单位秒)...]
+ type: [0(寻找主人帖)、1(寻找宠物帖)]
示例：
{
    "posts": [
        {
            "title": "我的狗走丢了",
            "content": "我的狗狗毛是金色的，很可爱，大家帮忙找一下哈",
            "posterEmail": "936947038@qq.com",
            "status": "0",
            "publishTime": "1544258923",
            "solveTime": "0",
            "type": "1"
        },
        {
            "title": "发现一只流浪狗",
            "content": "流浪狗狗毛是金色的，很可爱，大家帮忙找一下主人哈",
            "posterEmail": "936947038@qq.com",
            "status": "0",
            "publishTime": "1544258923",
            "solveTime": "0",
            "type": "0"
        },
    ]
}

## 发布帖子

1. 请求地址：/sendPosts
2. 请求参数：
+ title: 申请领养
+ content: xxxxx
+ email: 936947038@qq.com
+ type: [0(寻找主人帖)、1(寻找宠物帖)]
3. 返回json数据格式：
+ code: [200(发布成功)、400(发布失败)]。
+ reason(仅当code为400时才有此字段): [1041(无此邮箱用户)、1042(保存失败)]。
示例：
{
    "code": "400",
    "reason": "1021"
}

## 申请志愿者

1. 请求地址：/applyForVolunteers
2. 请求参数：
+ name: 黄业
+ sex: [0(男)、1(女)]
+ age: 22
+ contact: 17329967263
+ introduction: 我是一名正直守法的好公民。
3. 返回json数据格式：
+ code: [200(发布成功)]。
示例：
{
    "code": "200"
}

## 查看所有志愿者申请

1. 请求地址：/gainVolunteersApplication
2. 请求参数：
+ secret: xldxldxld
3. 返回json数据格式：
请求secret字段为xldxldxld时才返回成功，否则失败。
+ code: [200(发布成功)、400(发布失败)]。
+ reason(仅当code为400时才有此字段): [1051(密码错误)]。
示例1：
{
    "code": "200",
    applications: [
        {
            "name": "黄业",
            "sex": "0",
            "age": "22",
            "contact": "17329967263",
            "introduction": "我是一名正直守法的好公民。"
        },
        {
            "name": "许琳丹",
            "sex": "1",
            "age": "22",
            "contact": "13679739727",
            "introduction": "我也是一名正直守法的好公民。"
        }
    ]
}
示例2：
{
    "code": "400",
    "reason": "1051"
}



是否使用图片暂未确定，等待技术验证
+ petImg: http://111.230.232.189:8004/imgs/dog.png
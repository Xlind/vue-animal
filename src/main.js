"use strict"
import Vue from 'vue'
//引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// //引入element-ui
// import Element from 'element-ui'
//引入css文件
// import 'element-ui/lib/theme-chalk/index.css';
import './static/css/common.css'
import './static/css/iconfont.css'
import './static/js/components.js'

// Vue.use(Element)
// Vue.prototype.$ELEMENT = { size: 'x-small', zIndex: 2000 };
//axios引入
import Axios from 'axios'
//挂载原型
Vue.prototype.$ajax = Axios
//默认配置
// Axios.defaults.baseURL = 'http://127.0.0.1:8004/api/'

//引入自己的组件
import App from './app.vue'   
import headerVue from './components/header-footer/header.vue'    //pc端头部组件
import footerVue from './components/header-footer/footer.vue'    //pc端尾部组件
import footerMVue from './components/header-footer/footerM.vue'   //mobile端尾部组件
import Home from './components/home/home.vue'                     //pc首页
import HomeMob from './components/home/homeMob.vue'               //mobile首页

//注册全局组件
Vue.component('headerVue',headerVue)
Vue.component('footerVue',footerVue)



let router =new VueRouter({
    routes:[
        {path :'',redirect : '/home'},
        {name : 'home',path : '/home',component : Home},
        {name : 'homeMob',path : '/homeMob',component : HomeMob},
        {name : 'footerM',path : '/footerM',component : footerMVue}
    ]
})

new Vue ({
    el:'#app',
    router,
    render:c=>c(App)
})
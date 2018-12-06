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
// import $ from '././static/vendor/jquery-vendor.js'
// import $ from 'jquery'
// import 'jquery-ui'
// Vue.use(Element)
// Vue.prototype.$ELEMENT = { size: 'x-small', zIndex: 2000 };
//axios引入
import Axios from 'axios'
Vue.prototype.$ajax = Axios

//引入自己的组件
import App from './app.vue'
import headerVue from './components/header-footer/header.vue'
import footerVue from './components/header-footer/footer.vue'
import footerMVue from './components/header-footer/footerM.vue'
import Home from './components/home/home.vue'

//注册全局组件
Vue.component('headerVue',headerVue)
Vue.component('footerVue',footerVue)
Vue.component('footerMVue',footerMVue)


let router =new VueRouter({
    routes:[
        {path :'/',redirect : {name : 'home'}},
        {name : 'home',path : '/home',component : Home}
    ]
})

new Vue ({
    el:'#app',
    router,
    render:c=>c(App)
})
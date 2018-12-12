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
// Axios.defaults.baseURL = 'http://192.168.100.18:8004/api/'
Axios.defaults.baseURL = 'http://111.230.232.189:8004/api/'

//过滤器
import Moment from 'moment'
Vue.filter('covedate' , value =>{
    return Moment(value).format('YYYY-MM-DD')
})


//引入自己的组件
const App = r => require.ensure([], () => r(require('./app.vue')), 'app');
const Home = r => require.ensure([], () => r(require('./components/home/home.vue')), 'Home');//pc首页
const HomeMob = r => require.ensure([], () => r(require('./components/home/homeMob.vue')), 'HomeMob');//mobile首页
const headerVue = r => require.ensure([], () => r(require('./components/header-footer/header.vue')), 'headerVue');//pc端头部组件
const footerVue = r => require.ensure([], () => r(require('./components/header-footer/footer.vue')), 'footerVue');//pc端尾部组件
const headerMVue  = r => require.ensure([], () => r(require('./components/header-footer/headerM.vue')), 'headerMVue');//mobile端头部组件
const footerMVue  = r => require.ensure([], () => r(require('./components/header-footer/footerM.vue')), 'footerMVue');//mobile端尾部组件


//home
const bannerVue = r => require.ensure([], () => r(require('./components/home/pc/banner.vue')), 'bannerVue');//搜索
const anlunboVue = r => require.ensure([], () => r(require('./components/home/pc/anlunbo.vue')), 'anlunboVue');//新增动物轮播
const loginVue = r => require.ensure([], () => r(require('./components/home/login.vue')), 'login');//登录
const registerVue = r => require.ensure([], () => r(require('./components/home/register.vue')), 'register');//登录

//注册全局组件
Vue.component('headerVue', headerVue)
Vue.component('footerVue', footerVue)
Vue.component('headerMVue', headerMVue)
Vue.component('footerMVue', footerMVue)
Vue.component('bannerVue',bannerVue)
Vue.component('anlunboVue',anlunboVue)


let router = new VueRouter({
    routes: [{
            path: '/',
            redirect: { name: 'home' },   
        },
        {
            name: 'home',
            path: '/home',
            component: Home
        },
        {
            name: 'login',
            path: '/login',
            component: loginVue
        },
        {
            name: 'homeMob',
            path: '/homeMob',
            component: HomeMob
        },
        {
            name: 'footerM',
            path: '/footerM',
            component: footerMVue
        },
        {
            name: 'register',
            path: '/register',
            component: registerVue
        }
    ]
})

new Vue({
    el: '#app',
    router,
    render: c => c(App)
})
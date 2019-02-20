
import Vue from 'vue'
//引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// //引入element-ui
// import Element from 'element-ui'
//引入css文件
// import 'element-ui/lib/theme-chalk/index.css';
import './static/scss/common.scss'
import './static/scss/iconfont.scss'

// Vue.use(Element)
// Vue.prototype.$ELEMENT = { size: 'x-small', zIndex: 2000 };
//axios引入
import Axios from 'axios'
//挂载原型
Vue.prototype.$ajax = Axios
//默认配置
// Axios.defaults.baseURL = 'http://127.0.0.1:8004/api/'
Axios.defaults.baseURL = 'http://111.230.232.189:8004/api/'

//过滤器
// import Moment from 'moment'
// Vue.filter('covedate' , value =>{
//     return Moment(value).format('YYYY-MM-DD')
// })


//引入自己的组件
const App = r => require.ensure([], () => r(require('./app.vue')), 'app');
const Home = r => require.ensure([], () => r(require('./components/home/home.vue')), 'Home'); //pc首页
const HomeMob = r => require.ensure([], () => r(require('./components/home/homeMob.vue')), 'HomeMob'); //mobile首页
const headerVue = r => require.ensure([], () => r(require('./components/header-footer/header.vue')), 'headerVue'); //pc端头部组件
const footerVue = r => require.ensure([], () => r(require('./components/header-footer/footer.vue')), 'footerVue'); //pc端尾部组件
const headerMVue = r => require.ensure([], () => r(require('./components/header-footer/headerM.vue')), 'headerMVue'); //mobile端头部组件
const footerMVue = r => require.ensure([], () => r(require('./components/header-footer/footerM.vue')), 'footerMVue'); //mobile端尾部组件

//注册全局组件
Vue.component('headerVue', headerVue)
Vue.component('footerVue', footerVue)
Vue.component('headerMVue', headerMVue)
Vue.component('footerMVue', footerMVue)

const registerVue = r => require.ensure([], () => r(require('./components/header-footer/register.vue')), 'register'); //注册
const loginVue = r => require.ensure([], () => r(require('./components/header-footer/login.vue')), 'login'); //登录
const animalScienceVue = r => require.ensure([], () => r(require('./components/home/pc/science/animalScience.vue')), 'animalScience'); //科普
const relateRecommendVue = r => require.ensure([], () => r(require('./components/home/pc/relateRecommend/relateRecommend.vue')), 'relateRecommend'); //相关推荐

//注册通用组件
Vue.component('onToTopVue', onToTopVue)
const onToTopVue = r => require.ensure([], () => r(require('./components/common/onToTop.vue')),'onToTop'); //返回顶部

let router = new VueRouter({
    routes: [{
            path: '/',
            redirect: {
                name: 'home'
            },
        },
        {
            name: 'home',
            path: '/home',
            component: Home
        },
        {
            name: 'homeMob',
            path: '/homeMob',
            component: HomeMob
        },
        {
            name: 'animalScience',
            path: '/home/animalScience',
            component: animalScienceVue
        },
        {
            name: 'relateRecommend',
            path: '/home/relateRecommend',
            component: relateRecommendVue
        },
        {
            name: 'login',
            path: '/login',
            component: loginVue
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
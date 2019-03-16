
import Vue from 'vue'
//引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 引入css
import './static/scss/common.scss'
import './static/scss/iconfont.scss'


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
const animalNewVue = r => require.ensure([], () => r(require('./components/home/pc/science/animalNew.vue')), 'animalNew'); //动物新闻
const animalCommonSenseVue = r => require.ensure([], () => r(require('./components/home/pc/science/animalCommonSense.vue')), 'animalCommonSense'); //动物常识
const applyForReliefVue = r => require.ensure([], () => r(require('./components/home/pc/applyForRelief/applyForRelief.vue')), 'applyForRelief'); //申领救助
const relateRecommendVue = r => require.ensure([], () => r(require('./components/home/pc/relateRecommend/relateRecommend.vue')), 'relateRecommend'); //相关推荐
const welfareActivityVue = r => require.ensure([], () => r(require('./components/home/pc/welfareActivity/welfareActivity.vue')), 'welfareActivity'); //公益活动

//注册通用组件
Vue.component('onToTopVue', onToTopVue)
const onToTopVue = r => require.ensure([], () => r(require('./components/common/onToTop.vue')),'onToTop'); //返回顶部

let router = new VueRouter({
    routes: [
        {
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
            name: 'animalNew',
            path: '/home/animalNew',
            component: animalNewVue
        },
        {
            name: 'animalCommonSense',
            path: '/home/animalCommonSense',
            component: animalCommonSenseVue
        },
        {
            name: 'applyForRelief',
            path: '/home/applyForRelief',
            component: applyForReliefVue
        },
        {
            name: 'relateRecommend',
            path: '/home/relateRecommend',
            component: relateRecommendVue
        },
        {
            name: 'welfareActivity',
            path: '/home/welfareActivity',
            component: welfareActivityVue
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
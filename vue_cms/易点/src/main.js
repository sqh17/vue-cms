import Vue from 'vue';
//引入mintUi和Mui-> css
import MintUi from 'mint-ui';
//引入mintUi的css
import 'mint-ui/lib/style.css';
//路由插件
import VueRouter from 'vue-router';
//引入vue-resource插件
import VueResource from 'vue-resource';
//引入moment对象，不需要安装
import Moment from 'moment';
//引入vue图片预览插件
import VuePreview from 'vue-preview';
//引入我们自己的插件
import MyPluginAddConfig from './myPlugin.js';

//引入mui中的css
import '../static/render/mui/dist/css/mui.css';

//引入自己的css
import '../static/css/global.css';

import App from './app.vue';
//引入轮播图组件对象
import MySwipe from './components/commons/mySwipe.vue';
//引入返回/标题功能组件
import Title from './components/commons/title.vue';
//引入评论组件对象
import Comment from './components/commons/comment.vue';

//使用按需加载的方式，异步组件
//引入主页组件
const Home = r => require(['./components/home/home.vue'], r);
//新闻列表组件 
const NewsList = r => require(['./components/news/list.vue'], r);
//新闻详情组件
const NewsDetail = r => require(['./components/news/detail.vue'], r);
//引入图片分享列表组件
const PhotoShare = r => require(['./components/photo/share.vue'], r);
//引入图片详情组件
const PhotoDetail = r => require(['./components/photo/detail.vue'], r);
//引入商品列表组件对象
const GoodsList = r => require(['./components/goods/list.vue'], r);
//引入商品详情组件对象
const GoodsDetail = r => require(['./components/goods/detail.vue'], r);
//引入商品评论组件
const ProdComment = r => require(['./components/goods/prodComment.vue'], r);
//引入shopcart组件
const ShopCart = r => require(['./components/shopcart/shopcart.vue'], r);
//引入ProdComments组件
const ProdComments=r=>require(['./components/ProdComments/ProdComments.vue'],r);
//引入登录组件
const Login=r=>require(['./components/login/login.vue'],r);
//引入find组件
const Find=r=>require(['./components/find/find.vue'],r);
//引入owener组件
const Owner=r=>require(['./components/owner/owner.vue'],r);

//安装插件
Vue.use(MintUi);
//安装router插件
Vue.use(VueRouter);
Vue.use(VueResource); //此时有this.$http
//安装我们自己的插件挂载config属性
Vue.use(MyPluginAddConfig);

//安装预览插件
Vue.use(VuePreview);

//构建对象配置路由规则
let router = new VueRouter({
    linkActiveClass: 'mui-active', // 默认当匹配路由以后，外部a标签所添加的类名
});
router.addRoutes([
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/news/newsList', component: NewsList, },
    { path: '/news/detail/:id', component: NewsDetail, }, //新闻页面的详情显示
    { path: '/photo/share', component: PhotoShare, }, //配置图片分享列表
    { path: '/photo/detail/:id', component: PhotoDetail, }, //图片详情
    { path: '/goods/list', component: GoodsList }, //显示商品列表
    { path: '/goods/detail/:id', component: GoodsDetail }, //显示商品详情
    { path: '/goods/detailInfo/:id', component: NewsDetail }, //复用新闻组件
    { path: '/goods/comment/:cid', component: ProdComment }, //商品评论显示
    { path: '/shopcart', component: ShopCart }, //显示购物车
    { path:'/comment',component:ProdComments}, //留言反馈
    { path:'/login',component:Login}, 
    { path:'/find',component:Find},
    { path:'/owner',component:Owner},
]);



//注册一个全局的组件
Vue.component('my-title', Title);
//注册全局的评论组件
Vue.component('comment', Comment);
//轮播图组件
Vue.component('my-swipe', MySwipe);
//注册全局过滤器
Vue.filter('convertTime', function(add_time) { 
    return Moment(add_time).format('YYYY-MM-DD');
})

new Vue({
    el: '#app',
    router, 
    render: c => c(App),
});

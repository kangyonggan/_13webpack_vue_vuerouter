import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';
import Sidebar from './components/sidebar.vue';

Vue.use(VueRouter);

// 1. 定义 (路由) 组件。
const index = {template: '<div>首页</div>'};
const user = {template: '<div>用户管理</div>'};
const role = {template: '<div>角色管理</div>'};
const menu = {template: '<div>菜单管理</div>'};
const dict = {template: '<div>字典管理</div>'};
const article = {template: '<div>文章管理</div>'};

// 2. 定义路由
const routes = [
    {path: '/', component: index},
    {path: 'user', component: user},
    {path: 'role', component: role},
    {path: 'menu', component: menu},
    {path: 'dict', component: dict},
    {path: 'article', component: article}
];

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    mode: 'history',
    routes // (缩写) 相当于 routes: routes
});

new Vue({
    el: '#app',
    router,
    components: {Sidebar}
});
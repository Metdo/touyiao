import Vue from 'vue';

// 引入router 插件
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 引入单页面组件
import Home from '../views/Home.vue';
// import Demo from "../views/2.vue";
// 实例化router 并传参配置参数
let router = new VueRouter({
    routes: [
        {
            name: 'Home',
            path: '/',
            component: Home,
            children:[
                {
                    name: 'NavVideo',
                    path: '/navVideo',
                    component: () => import( /* webpackChunkName: "about" */ '../views/NavRouter/NavVideo.vue')
                },
                {
                    name: 'NavHot',
                    path: '/navHot',
                    component: () => import( /* webpackChunkName: "about" */ '../views/NavRouter/NavHot.vue')
                },
                {
                    name: 'NavSociety',
                    path: '/navSociety',
                    component: () => import( /* webpackChunkName: "about" */ '../views/NavRouter/NavSociety.vue')
                },
                {
                    name: 'NavRecreation',
                    path: '/navRecreation',
                    component: () => import( /* webpackChunkName: "about" */ '../views/NavRouter/NavRecreation.vue')
                },
            ]
        },
        // {
        //     path: '/',
        //     // component:{template:'<div>404</div>'}
        //     redirect: '/home'
        // },
       
        // // 首页导航栏下的路由，整个页面变化，先不采用路由嵌套的写法

        // {
        //     name: 'NavVideo',
        //     path: '/navVideo',
        //     component: () => import( /* webpackChunkName: "about" */ '../views/NavRouter/NavVideo.vue')
        // },
        // {
        //     name: 'NavHot',
        //     path: '/navHot',
        //     component: () => import( /* webpackChunkName: "about" */ '../views/NavRouter/NavHot.vue')
        // },
        // {
        //     name: 'NavSociety',
        //     path: '/navSociety',
        //     component: () => import( /* webpackChunkName: "about" */ '../views/NavRouter/NavSociety.vue')
        // },
        // {
        //     name: 'NavRecreation',
        //     path: '/navRecreation',
        //     component: () => import( /* webpackChunkName: "about" */ '../views/NavRouter/NavRecreation.vue')
        // },
    ]
})

export default router;
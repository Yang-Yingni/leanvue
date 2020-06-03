//配置路由相关信息

import VueRouter from 'vue-router'
import Vue from 'vue'//因为下面用了vue的方法，所以要先导入vue

// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'
//将以上导入组件改写成路由懒加载模式
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const Profile = () => import('../components/Profile.vue')


const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')

//1.通过Vue.use(插件名)安装Vue插件
Vue.use(VueRouter)


//映射关系为数组类型
const routes = [
  //一个映射关系就是一个{}对象
  {
    //配置默认页面，一点进去的页面
    path:'',
    redirect: '/home'
    //redirect重定向，当页面路径为''（一进去）时，自动进入home页面
  },
  {
    path:'/home',//配置页面对应浏览器显示路径
    component:Home,
    //即component:() => import('../components/Home.vue')  （因为Home前面定义了，Home = () => import('../components/Home.vue')
    meta:{
      title:'首页'
    },

    //配置子路由
    children: [
      //注意！！！在子路由里配置path路径不需要加“/”，因为它会自动给你加上，你多加反而不行
      //然而！！！根路由（App.vue里访问的）配置path必须加“/”（康康上面一行呢）！！！不加不行！！！
      {
        path:'',
        redirect: 'news'
      },//默认页面
      {
        path:'news', 
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path:'/about',
    component:About,
    meta:{
      title:'关于'
    },
  },
  {//配置动态路由
    path: '/user/:userId',
    component: User,
    meta:{
      title:'用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      title:'档案'
    },
  }
]

//2.创建VueRouter对象
const router = new VueRouter({
  //配置路由和组件的映射关系
  routes,//此句用了ES6的增强写法，相当于routes:routes
  mode: 'history',
  //改变页面url模式（默认为hash模式，会有“#”，丑陋

  linkActiveClass: 'active'
})

//利用全局导航守卫实现实时改变页面标题（除了全局的导航守卫，当然有局部的，用到的话自行去官网查，其实都差不多
//前置守卫（跳转前调用
router.beforeEach((to, from, next) => {
  next();//必须调用next()函数
  //document.title = to.meta.title 这样写不对，子页面路由时就无法显示标题了，因为没定义
  document.title = to.matched[0].meta.title//matched[0],下标0固定，因为取辈分最老的那个爹路由里的标题
  //console.log('跳转前');
  
})
//后置钩子（跳转后调用，所以函数中不需再调用next()
router.afterEach( route => {
  //console.log('跳转后');
})




//3.将router对象导出
export default router
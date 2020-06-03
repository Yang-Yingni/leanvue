import VueRouter from "vue-router"
import Vue from "vue"

const Home = () => import('../views/Home')
const Type = () => import('../views/Type')
const Cart = () => import('../views/Cart')
const Center = () => import('../views/Center')

Vue.use(VueRouter)

//tabbar重复点击报错的终极解决方法：
//自定义router的push方法（具体原理俺也看不太懂呜呜呜
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/type',
    component: Type
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/center',
    component: Center
  },
  

]

const router = new VueRouter({
  routes
})

export default router
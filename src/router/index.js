import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/page/home'
// import blog from '@/page/blog'
// import about from '@/page/about'
// import contactMe from '@/page/contactMe'

const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const blog = r => require.ensure([], () => r(require('@/page/blog')), 'blog');
const about = r => require.ensure([], () => r(require('@/page/about')), 'about');
const contactMe = r => require.ensure([], () => (require('@/page/contactMe')), 'contactMe');
const detail = r => require.ensure([],() => (require('@/page/detail')), 'detail')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/blog',
      component: blog
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/contactMe',
      component: contactMe
    },
    {
      path: '/detail',
      component: detail
    }
  ]
})

export default router

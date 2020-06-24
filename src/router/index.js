import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/celebrityHome'
    },
    //首页
    {
      path: '/celebrityHome',
      name: 'celebrityHome',
      component: () => import('@/views/celebrityHome/celebrityHome'),
      // meta: { keepAlive: true }
    },
    //股份
    {
      path: '/celebrityShares',
      name: 'celebrityShares',
      component: () => import('@/views/celebrityShares/celebrityShares'),
      // meta: { keepAlive: true }
    },
    //单位
    {
      path: '/celebrityCompany',
      name: 'celebrityCompany',
      component: () => import('@/views/celebrityCompany/celebrityCompany'),
      // meta: { keepAlive: true }
    },
    //我的
    {
      path: '/celebrityMy',
      name: 'celebrityMy',
      component: () => import('@/views/celebrityMy/celebrityMy'),
      // meta: { keepAlive: true }
    },
    //某个奖项
    {
      path: '/celebrityPrize',
      name: 'celebrityPrize',
      component: () => import('@/views/celebrityPrize/celebrityPrize'),
      // meta: { keepAlive: true }
    },
    //搜索页
    {
      path: '/celebritySearch',
      name: 'celebritySearch',
      component: () => import('@/views/celebritySearch/celebritySearch'),
      // meta: { keepAlive: true }
    },
    // {
    //   path: '/past',
    //   name: 'past',
    //   component: () => import('@/views/past/past')
    // },
    // {
    //   path: '/pastMag',
    //   name: 'pastMag',
    //   component: () => import('@/views/past/pastMag/pastMag')
    // },
    // {
    //   path: '/me',
    //   name: 'me',
    //   component: () => import('@/views/me/me')
    // },
    // {
    //   path: '/avatar',
    //   name: 'avatar',
    //   component: () => import('@/views/me/avatar/avatar')
    // },
    // {
    //   path: '/name',
    //   name: 'name',
    //   component: () => import('@/views/me/name/name')
    // },
    // {
    //   path: '/info',
    //   name: 'news',
    //   component: () => import('@/views/news/news')
    // },
  ]
})

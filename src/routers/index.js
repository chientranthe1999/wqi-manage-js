import Vue from 'vue'
import VueRouter from 'vue-router'
import AmdinLayout from '@/layout/AdminLayout'
import i18n from '@/plugins/i18n'

Vue.use(VueRouter)

const allRoutes = [
  // {
  //   path: '/403',
  //   component: () => import('../views/error/403'),
  //   hidden: true
  // },
  // {
  //   path: '/404',
  //   component: () => import('../views/error/404'),
  //   hidden: true
  // },

  {
    path: '/',
    component: AmdinLayout,
    meta: { title: i18n.t('router.home'), icon: 'el-icon-s-home' },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Home'),
        meta: { title: i18n.t('router.home') }
      }
    ]
  },
  {
    path: '/devices',
    component: AmdinLayout,
    meta: { title: i18n.t('router.device'), icon: 'el-icon-cpu' },
    children: [
      {
        path: '',
        name: 'device',
        component: () => import('@/views/Home'),
        meta: { title: i18n.t('router.device') }
      }
    ]
  },
  {
    path: '/users',
    component: AmdinLayout,
    meta: { title: i18n.t('router.user'), icon: 'el-icon-s-custom' },
    children: [
      {
        path: '',
        name: 'user',
        component: () => import('@/views/Home'),
        meta: { title: i18n.t('router.user') }
      }
    ]
  },
  {
    path: '/articles',
    component: AmdinLayout,
    meta: { title: i18n.t('router.article'), icon: 'el-icon-reading' },
    children: [
      {
        path: '',
        name: 'article',
        component: () => import('@/views/Home'),
        meta: { title: i18n.t('router.article') }
      }
    ]
  }
]

// const notFoundRoutes = [
//   {
//     path: '/',
//     redirect: '/parts',
//     hidden: true
//   }
// ]

const createRouter = () => {
  const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) {
      return originalPush.call(this, location, onResolve, onReject)
    }
    return originalPush.call(this, location).catch((err) => {
      if (VueRouter.isNavigationFailure(err)) {
        return err
      }
      return Promise.reject(err)
    })
  }

  // allRoutes = allRoutes.concat(notFoundRoutes)

  const routes = allRoutes

  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes
  })
}

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

import router from './routers'
import store from './stores'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  await store.dispatch('user/getInfo')

  // determine whether the user has logged in
  NProgress.done()

  return next()
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

import router from '@/routers'

export function replaceUrl(query = {}) {
  const params = []
  for (const key in query) {
    if (query[key] === undefined || !query[key]) {
      continue
    }
    params.push(`${key}=${query[key]}`)
    router.currentRoute.query[key] = query[key]
  }
  history.replaceState(
    {},
    null,
    router.currentRoute.path + (params.length ? '?' + params.join('&') : '')
  )
}

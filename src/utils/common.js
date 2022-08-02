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
  history.replaceState({}, null, router.currentRoute.path + (params.length ? '?' + params.join('&') : ''))
}

export function wqiBg(wqi) {
  if (wqi >= 0 && wqi <= 25) {
    return 'wqi--bad'
  } else if (wqi > 25 && wqi <= 50) {
    return 'wqi--warning'
  } else if (wqi > 50 && wqi <= 75) {
    return 'wqi--mid'
  } else if (wqi > 75 && wqi <= 90) {
    return 'wqi--medium'
  } else if (wqi > 90 && wqi <= 100) {
    return 'wqi--good'
  }
}

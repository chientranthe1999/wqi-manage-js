import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Car Part'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}

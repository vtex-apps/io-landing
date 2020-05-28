/* eslint-disable quote-props */
import { Router } from '@vtex/micro'
import { pack } from '@vtex/micro-react-router'

import { locales } from '../components/locales'

const removeEndingSlash = (x: string) => x.length > 1 && x.endsWith('/') ? x.slice(0, x.length - 1) : x

const pages = {
  'io': 'io',
  'store-features': 'store-features',
  '404': '404'
}

const paths: Record<string, string | undefined> = {
  '/': pages.io,
  '/store-features': pages['store-features']
}

const router: Router<any> = async request => {
  const { path, query } = request

  const locale = locales.has(query.locale) ? query.locale : 'en'

  const fixedPath = removeEndingSlash(path)
  const name = paths[fixedPath] || '404'

  const resolved = {
    data: null,
    name: `${name}.${locale}`,
    status: name === '404' ? 404 : 200
  }

  return pack(resolved, path)
}

export default router

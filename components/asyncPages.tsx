import loadable, { LoadableComponent } from '@loadable/component'
import { AsyncPageProps } from '@vtex/micro-react-router'

export const AsyncPages: LoadableComponent<AsyncPageProps> = loadable(
  ({ name }) => import(`./pages/${name}`),
  { ssr: false }
)

export const AsyncImport = /* #__LOADABLE__ */ ({ name }: { name: string }) => import(`./pages/${name}`)

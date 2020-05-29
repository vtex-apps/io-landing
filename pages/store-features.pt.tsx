import { LoadMicroComponent } from '@vtex/micro-react'
import { withRouter } from '@vtex/micro-react-router'
import { withIntlProvider } from '@vtex/micro-react-intl'

import { AsyncImport } from '../components/asyncPages'
import Page from '../components/pages/features'
import messages from '../messages/pt.json'

export default LoadMicroComponent(
  withIntlProvider(
    withRouter(Page, AsyncImport),
    messages,
    'pt'
  )
)
import { useIntl } from '@vtex/micro-react-intl'
import React from 'react'

import AppStore from './icons/AppStore'
import Branches from './icons/Branches'
import Stack from './icons/Stack'

const HowItWorks: React.FunctionComponent = () => {
  const intl = useIntl()
  return (
    <section className="flex flex-column flex-row-l items-center justify-between w-90 vh-75-l center c-on-base--inverted mv7">
      <article className="mh7-l mv5 mv0-l">
        <Stack />
        <p className="t-body mb3">
          {intl.formatMessage({ id: 'io.howitworks.appstore.scale' })}
        </p>
        <p className="f2 mt0">
          {intl.formatMessage({ id: 'io.howitworks.appstore' })}
        </p>
        <p className="t-body lh-copy">
          {intl.formatMessage({ id: 'io.howitworks.appstore.solutions' })}
        </p>
      </article>
      <article className="mh7-l mv5 mv0-l">
        <Branches />
        <p className="t-body mb3">
          {intl.formatMessage({ id: 'io.howitworks.abtesting.decisions' })}
        </p>
        <p className="f2 mt0">
          {intl.formatMessage({ id: 'io.howitworks.abtesting' })}
        </p>
        <p className="t-body lh-copy">
          {intl.formatMessage({ id: 'io.howitworks.abtesting.tests' })}
        </p>
      </article>
      <article className="mh7-l mv5 mv0-l">
        <AppStore />
        <p className="t-body mb3">
          {intl.formatMessage({ id: 'io.howitworks.storeframework.build' })}
        </p>
        <p className="f2 mt0">
          {intl.formatMessage({ id: 'io.howitworks.storeframework' })}
        </p>
        <p className="t-body lh-copy">
          {intl.formatMessage({ id: 'io.howitworks.storeframework.develop' })}
        </p>
      </article>
    </section>
  )
}

export default HowItWorks

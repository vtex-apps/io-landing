import { FormattedMessage } from '@vtex/micro-react-intl'
import React from 'react'

import Lightbulb from './icons/Lightbulb'
import Serverless from './icons/Serverless'
import Sync from './icons/Sync'
import Workspaces from './icons/Workspaces'

const KeyFeatures = () => (
  <section className="mv9 mt5-l vh-75-l bg-base--inverted c-on-base--inverted center w-90">
    <p className="mb0">
      <FormattedMessage id="io.features.title.small" />
    </p>
    <p className="t-heading-1 w-50-ns mt3">
      <FormattedMessage id="io.features.title" />
    </p>
    <div className="flex flex-column flex-row-l items-center justify-between">
      <article className="mh7-l mv5 mv0-l">
        <Sync />
        <p className="f4">
          <FormattedMessage id="io.features.cloud" />
        </p>
        <p className="t-body lh-copy">
          <FormattedMessage id="io.features.cloud.description" />
        </p>
      </article>
      <article className="mh7-l mv5 mv0-l">
        <Lightbulb />
        <p className="f4">
          <FormattedMessage id="io.features.setupless" />
        </p>
        <p className="t-body lh-copy">
          <FormattedMessage id="io.features.setupless.description" />
        </p>
      </article>
      <article className="mh7-l mv5 mv0-l">
        <Workspaces />
        <p className="f4">
          <FormattedMessage id="io.features.workspaces" />
        </p>
        <p className="t-body lh-copy">
          <FormattedMessage id="io.features.workspaces.description" />
        </p>
      </article>
      <article className="mh7-l mv5 mv0-l">
        <Serverless />
        <p className="f4">
          <FormattedMessage id="io.features.serverless" />
        </p>
        <p className="t-body lh-copy">
          <FormattedMessage id="io.features.serverless.description" />
        </p>
      </article>
    </div>
  </section>
)

export default KeyFeatures

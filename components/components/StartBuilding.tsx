import '../../assets/illustrationBlue.png'

import { FormattedMessage } from '@vtex/micro-react-intl'
import { Button } from '@vtex/styleguide'
import React from 'react'

const StartBuilding = () => {
  const image = '/assets/illustrationBlue.png'

  return (
    <section className="flex flex-row-m flex-column vh-100-l c-on-base bg-base">
      <div className="w-50-l flex-l dn-s">
        <img src={image} alt="" className="h-100 w-100" />
      </div>
      <div className="w-50-l h-100 flex flex-column justify-around items-center">
        <p className="w-90 center t-heading-1 w-50-l">
          <FormattedMessage id="io.startbuilding.title" />
        </p>
        <div className="w-50-ns w-90-s flex flex-column justify-center pb4">
          <p className="t-body mb7 w-100-s">
            <FormattedMessage id="io.startbuilding.text" />
          </p>
          <div className="w-75 mb5">
            <a href="https://www.vtex.com/partner/">
              <Button variation="primary">
                <p className="action-secondary">
                  <FormattedMessage id="io.startbuilding.cta" />
                </p>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StartBuilding

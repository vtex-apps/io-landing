import { FormattedMessage } from '@vtex/micro-react-intl'
import React from 'react'

const ProductDisplay: React.FunctionComponent = () => {
  const products = '/assets/product.svg'

  return (
    <section className="w-100 flex flex-column flex-row-l justify-between pv10 bg-base--inverted">
      <div className="c-on-base--inverted flex flex-column justify-center w-33-l pl9-l mh0-l">
        <p className="t-small w-90 center left-l">
          <FormattedMessage id="io.product.deliver" />
        </p>
        <p className="f1 mt1 mb1 w-90 center left-l">
          <FormattedMessage id="io.product.scale" />
        </p>
        <p className="t-body w-90 center left-l">
          <FormattedMessage id="io.product.cloud" />
        </p>
      </div>
      <img src={products} alt="Store Framework sample" />
    </section>
  )
}

export default ProductDisplay

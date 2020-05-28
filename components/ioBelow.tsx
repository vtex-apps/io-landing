import React, { Fragment } from 'react'

import EvolutionSection from './components/Evolution'
import HowItWorks from './components/HowItWorks'
import KeyFeatures from './components/KeyFeatures'
import ProductDisplay from './components/Product'
import StartBuilding from './components/StartBuilding'

const LandingBelowTheFold: React.FunctionComponent = () => (
  <Fragment>
    <ProductDisplay />
    <HowItWorks />
    <EvolutionSection />
    <KeyFeatures />
    <StartBuilding />
  </Fragment>
)

export default LandingBelowTheFold

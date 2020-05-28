import React, { Fragment } from 'react'
import loadable from '@loadable/component'

import CardGrid from '../components/CardGrid'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const BelowTheFold = loadable(() => import(
  /* webpackChunkName: "ioBelow" */
  /* webpackPreload: true */
  '../ioBelow'
), {
  ssr: false
})

const Landing: React.FunctionComponent = () => (
  <Fragment>
    <Navbar />
    <main className="w-100 bg-base--inverted">
      <Hero />
      <CardGrid />
      <BelowTheFold />
    </main>
    <Footer />
  </Fragment>
)

export default Landing

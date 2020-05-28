import '../../styles/tachyons.css'

import React, { Fragment } from 'react'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { storeComponents, storePixel } from '../FeaturesData'

const FeaturesDisplay: React.FunctionComponent = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="w-100 pv10">
        <div className="flex-ns items-baseline w-90 w-80-ns center mb8">
          <h1 className="c-base t-heading-1 pr7">Store Features</h1>
          <nav>
            <ul className="flex-ns list t-heading-5 pl0">
              <li className="pr6 pb4 pb0-ns">
                <a
                  href="/store-features#store-component-apps"
                  className="no-underline c-emphasis dim"
                >
                  Store Component Apps
                </a>
              </li>
              <li>
                <a
                  href="/store-features#store-pixel-apps"
                  className="no-underline c-emphasis dim"
                >
                  Store Pixel Apps
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <section
          id="store-component-apps"
          className="flex flex-column w-90 w-80-ns center pt8"
        >
          <h2 className="c-base t-heading-3 fw3 mb0 mt4">
            Store Component Apps
          </h2>
          <ul className="t-body list pl0 mt0">
            {storeComponents.map(component => (
              <li className="mv7 bb b--muted-2" key={component.name}>
                <p>
                  {component.name}{' '}
                  {component.construction && '[Under Construction] 🚧'}
                </p>
                <p>
                  <a className="link" href={component.docs}>
                    {component.docs}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section
          id="store-pixel-apps"
          className="flex flex-column w-90 w-80-ns center pt8"
        >
          <h2 className="c-base t-heading-3 fw3 mb0 mt4">Store Pixel Apps</h2>
          <ul className="t-body list pl0 mt0">
            {storePixel.map(app => (
              <li className="mv7 bb b--muted-2" key={app.name}>
                <p>{app.name}</p>
                <p>
                  <a className="link" href={app.docs}>
                    {app.docs}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </Fragment>
  )
}

export default FeaturesDisplay

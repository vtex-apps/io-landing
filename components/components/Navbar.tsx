import '../../assets/vtexColdGray.svg'

import { useIntl } from '@vtex/micro-react-intl'
import { Link } from '@vtex/micro-react-router'
import { IconBars, IconCaretDown, IconCaretUp } from '@vtex/styleguide'
import React, { useState } from 'react'

import { locales } from '../locales'

interface Props {
  enableLocaleSelector?: boolean
}

const supportedLangs = Array.from(locales)

const Navbar: React.FunctionComponent<Props> = ({ enableLocaleSelector }) => {
  const intl = useIntl()
  const [openLocaleSelector, setOpenLocaleSelector] = useState(false)
  const [openNav, setOpenNav] = useState(false)
  const [selectedLocale, setSelectedLocale] = useState(
    findLocale(intl.locale)
  )
  const logo = '/assets/vtexColdGray.svg'

  const handleLocaleClick = ({ target: { id } }: { target: any }) => {
    setOpenLocaleSelector(false)
    setSelectedLocale(findLocale(id))
  }

  return (
    <nav className="flex">
      <div
        className="fixed bg-base--inverted c-on-base--inverted w-100 flex flex-column flex-row-l justify-between z-5"
        style={{
          boxShadow: '0px 3px 20px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div className="flex">
          <button
            className="dn-l bg-base--inverted c-on-base--inverted w-33 w-50-l bn"
            onClick={() => setOpenNav(!openNav)}
          >
            <IconBars />
          </button>
          <div className="w-40 w-50-l">
            <Link to="/" className="c-on-base--inverted self-center flex items-center link">
              <img src={logo} className="h3" alt="VTEX" />
              <p className="dn-s flex-l">|</p>
              <p className="dn-s flex-l ml3">Developer</p>
            </Link>
          </div>
        </div>
        <div className="flex-l" hidden={!openNav}>
          <ul className="flex flex-column flex-row-l justify-center list mt0 items-center mb0 relative">
            <li className="mh5 mv5 mv0-l">
              <a className="link c-on-base--inverted" href="https://vtex.io/docs">
                {intl.formatMessage({ id: 'io.navbar.learn' })}
              </a>
            </li>
            <li className="mh5 mv5 mv0-l">
              <a href="https://vtex.io/docs/components/all" className="link c-on-base--inverted">
                {intl.formatMessage({ id: 'io.navbar.feature-list' })}
              </a>
            </li>
            {enableLocaleSelector && (
              <li className="flex items-center">
                <div className="h-100 relative w3">
                  <button
                    onClick={() => setOpenLocaleSelector(!openLocaleSelector)}
                    className="c-on-base--inverted bg-base--inverted bn flex items-center pointer"
                  >
                    <p className="ttu mr4">{splitLocale(selectedLocale)}</p>
                    {openLocaleSelector ? <IconCaretUp /> : <IconCaretDown />}
                  </button>
                  <div
                    hidden={!openLocaleSelector}
                    className="z-4 bg-base--inverted pa3 absolute"
                  >
                    {supportedLangs.map(lang => (
                      <button
                        className="tc ttu c-on-base--inverted pointer bn bg-base--inverted"
                        onClick={handleLocaleClick}
                        id={lang}
                        key={lang}
                      >
                        {splitLocale(lang)}
                      </button>
                    ))}
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

function splitLocale (locale: string) {
  return locale.split('-')[0]
}

function findLocale (locale: any) {
  const localeObj = supportedLangs.find(
    lang => splitLocale(lang) === splitLocale(locale)
  )
  return localeObj || supportedLangs[0]
}

export default Navbar

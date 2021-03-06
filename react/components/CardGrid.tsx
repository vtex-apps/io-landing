import React, { FunctionComponent } from 'react'

import Card from './Card'
import FlowerGround from './icons/FlowerGround'
import Video from './icons/Video'
import DesignDev from './icons/DesignDev'
import RunningShoes from './icons/RunnigShoes'

const CardGrid: FunctionComponent = () => {
  const cardsConfig = [
    {
      icon: <FlowerGround />,
      titleId: 'io.cards.first.title',
      textId: 'io.cards.first.text',
      link: '/docs/getting-started/what-is-vtex-io/1',
    },
    {
      icon: <Video />,
      titleId: 'io.cards.second.title',
      textId: 'io.cards.second.text',
      link: '#',
      soon: true,
    },
    {
      icon: <DesignDev />,
      titleId: 'io.cards.third.title',
      textId: 'io.cards.third.text',
      link: '/docs/components/all',
    },
    {
      icon: <RunningShoes />,
      titleId: 'io.cards.fourth.title',
      textId: 'io.cards.fourth.text',
      link: '/faq',
    },
  ]

  return (
    <section className="w-90 center flex justify-center flex-wrap mv7">
      {cardsConfig.map((card, index) => (
        <Card
          icon={card.icon}
          title={card.titleId}
          text={card.textId}
          index={index}
          key={card.titleId}
          link={card.link}
          soon={card.soon}
        />
      ))}
    </section>
  )
}

export default CardGrid

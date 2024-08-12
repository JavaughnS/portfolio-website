import React from 'react'
import CardDeck from "../components/CardDeck";

function Demos({content}) {
  const demoData = content.demo.toReversed();

  return (
    <div>
      <h4 className="page-title">Demos</h4>
      <CardDeck cardType="image" classes="demos-deck" cardData={demoData} />
    </div>
  )
}

export default Demos

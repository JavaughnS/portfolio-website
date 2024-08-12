import React from 'react'
import CardDeck from "../components/CardDeck";

function Demos({content}) {
  const demoData = Array.from(content.demo);

  return (
    <div>
      <h4 className="page-title">Demos</h4>
      <CardDeck cardType="image" deckClasses="demos-deck" cardData={demoData} />
    </div>
  )
}

export default Demos

import React from 'react'
import CardDeck from "../components/CardDeck";
import ImageCard from "../components/ImageCard";

function Demos() {
  const demoCards = [
    <ImageCard
      cardClasses="demo-card"
      src="images/placeholder.JPG"
      title="This Website!"
      description="Coming Soon"
    />,
    <ImageCard
      cardClasses="demo-card"
      src="images/placeholder.JPG"
      title="Project 2"
      description="Coming Soon"
    />,
    <ImageCard
      cardClasses="demo-card"
      src="images/placeholder.JPG"
      title="Project 3"
      description="Coming Soon"
    />
  ];

  return (
    <div>
      <h4 className="page-title">Demos</h4>
      <CardDeck classes="demos-deck" cards={demoCards} />
    </div>
  )
}

export default Demos

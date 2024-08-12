import React from "react";
import "./Cards.css";
import CollapsibleCard from "./CollapsibleCard";
import ImageCard from "./ImageCard";
import InfoCard from "./InfoCard";
// TODO: would {props.children} be better than {cards} here, I wonder
function CardDeck({ cardType, classes, cardData }) {
  switch (cardType) {
    case 'collapsible':
      return(
        <CollapsibleCard></CollapsibleCard>
      );
    case 'image':
      return (
        <div className={classes}>
          {cardData.map(data => (
            <ImageCard
              key={data.id}
              id={data.id}
              cardClasses="image-card-vertical"
              src={data.preview}
              cardTitle={data.name}
            >
              {data.shortDesc}
            </ImageCard>
          ))}
        </div>
      );
    case 'info':
      return (
        <div className={classes}>
          {cardData.map(data => (
            <InfoCard
              key={data.id}
              id={data.id}
              cardClasses="info-card"
              cardTitle={data.name}
            >
              {data.shortDesc}
            </InfoCard>
          ))}
        </div>
      );
    default:
      return <div>Error loading cards.</div>
  }
}

export default CardDeck;

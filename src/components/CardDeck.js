import React from "react";
import "./Cards.css";
import CollapsibleCard from "./CollapsibleCard";
import ImageCard from "./ImageCard";
import InfoCard from "./InfoCard";

function CardDeck({ cardType, deckClasses, cardClasses, cardData, titleClass }) {
  switch (cardType) {
    case 'collapsible':
      return(
        <div className={deckClasses}>
          {cardData.map((data, key) => (
            <CollapsibleCard
              key={key}
              cardClass={cardClasses}
              titleClass={titleClass}
              title={data.title}
            >
              {data.details}
            </CollapsibleCard>))
          }
        </div>
      );
    case 'image':
      return (
        <div className={deckClasses}>
          {cardData.map((data, key) => (
            <ImageCard
              key={key}
              cardClasses="image-card-vertical"
              src={data.preview}
              cardTitle={data.name}
              path={deckClasses === "project-preview-deck" ? data.cardLink : data.projDoc}
            >
              {data.shortDesc}
            </ImageCard>
          ))}
        </div>
      );
    case 'info':
      return (
        <div className={deckClasses}>
          {cardData.map((data, key) => (
            <InfoCard
              key={key}
              cardClasses="info-card"
              cardTitle={data.name}
              path={deckClasses === "project-preview-deck" ? data.cardLink : data.projDoc}
            >
              {data.shortDesc}
              {/* {data.repo && <br />}
              {data.repo && <a href={data.repo}>Checkout the GitHub repository.</a>} */}
            </InfoCard>
          ))}
        </div>
      );
    default:
      return <div>Error loading cards.</div>
  }
}

export default CardDeck;

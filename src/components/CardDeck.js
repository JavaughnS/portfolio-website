import React from "react";
import "./Cards.css";

function CardDeck({ classes, cards }) {
  return (
    <div className={classes}>
      {cards}
    </div>
  );
}

export default CardDeck;

import React from "react";
import "./Cards.css";

function CardDeck({ classes, children }) {
  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export default CardDeck;

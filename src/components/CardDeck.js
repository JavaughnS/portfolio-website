import React from "react";
import "./Cards.css";
// TODO: would {props.children} be better than {cards} here, I wonder
function CardDeck({ classes, cards }) {
  return (
    <div className={classes}>
      {cards}
    </div>
  );
}

export default CardDeck;

import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function BasicCard({ caller, card }) {
  const ElementTag = caller === "home" ? Link : 'div' ;
  const path = card.path ? card.path : undefined;
  const id = card.name.toLowerCase().replace(/[ /]/g, "-").replace(/:/g, "");
  const description = caller === "projects" || caller === "blog" ? card.longDesc : card.shortDesc;

  return (
    <ElementTag id={id} className="basic__card" to={path}>
      <div className="card__info">
        <h3>{card.name}</h3>
        <p>
          {description}
          {caller !== "home" && card.doc && (
            <>
              <br />
              View the <a href={card.doc} target="_blank" rel="noopener noreferrer">doc here</a>.
            </>
          )}
        </p>
      </div>
    </ElementTag>
  );
}

export default BasicCard;

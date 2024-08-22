import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function BasicCard({ caller, card }) {
  const ElementTag = caller === "home" ? Link : caller === "blog" ? 'a' : 'div' ;
  const path = card.path ? card.path : undefined;
  const link = card.doc ? card.doc : undefined;
  const id = card.name.toLowerCase().replace(/ /g, "-");
  const description = caller === "projects" || caller === "blog" ? card.longDesc : card.shortDesc;

  return (
    <ElementTag id={id} className="basic__card" to={path} href={link} target={link ? "_blank" : undefined} rel={link ? "noopener noreferrer" : undefined}>
      <div className="card__info">
        <h3>{card.name}</h3>
        <p>{description}</p>
      </div>
    </ElementTag>
  );
}

export default BasicCard;

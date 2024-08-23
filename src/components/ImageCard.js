import React from "react";
import { Link } from "react-router-dom";
import { PLACEHOLDER_IMAGE } from "../constants";
import "./Cards.css";

function ImageCard({
  caller,
  card,
  badgeText
}) {
  const id = card.name.toLowerCase().replace(/[ /]/g, "-").replace(/:/g, "");
  const classes = caller === "demos" ? "demo__card" : "image__card";
  const path = card.path ? card.path : undefined;

  return (
    <Link
      id={id}
      className={classes}
      to={path}
    >
      <figure className="card__pic__wrap">
        <img
          className="card__img"
          alt={card.preview ? card.prevAlt : "No available image for this item"}
          src={card.preview ? card.preview : PLACEHOLDER_IMAGE}
        />
      </figure>
      <div className="image__card__text">
        <h3>{card.name}</h3>
        <p>{card.shortDesc}</p>
      </div>
    </Link>
  );
}

export default ImageCard;

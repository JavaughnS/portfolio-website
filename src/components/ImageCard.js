import React from "react";
import { Link } from "react-router-dom";
import { PLACEHOLDER_IMAGE } from "../constants";
import "./Cards.css";

function ImageCard({ id, cardClasses, src, cardTitle, children, badgeText, path, alt }) {
  return (
    <Link id={id} className={cardClasses} to={path}>
        <figure className="card-pic-wrap">
            <img className="card-img" alt={alt} src={src ? src : PLACEHOLDER_IMAGE }/>
        </figure>
        <div className="card-info">
            {cardTitle && <h5 className="card-title">{cardTitle}</h5>}
            {children && <p className="card-text">{children}</p>}
        </div>
    </Link>
  );
}

export default ImageCard;

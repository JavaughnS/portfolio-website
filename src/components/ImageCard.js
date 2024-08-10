import React from "react";
import { Link } from "react-router-dom";
import { PLACEHOLDER_IMAGE } from "../constants";
import "./Cards.css";

function ImageCard({ cardClasses, src, title, description, badgeText, path, alt }) {
  return (
    <Link className={cardClasses} to={path}>
        <figure className="card-pic-wrap">
            <img class="card-img" alt={alt} src={src ? src : PLACEHOLDER_IMAGE }/>
        </figure>
        <div className="card-info">
            {title && <h5 className="card-title">{title}</h5>}
            {description && <p className="card-text">{description}</p>}
        </div>
    </Link>
  );
}

export default ImageCard;

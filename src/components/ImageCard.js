import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function ImageCard({ cardClasses, src, title, description, badgeText, path, alt }) {
  return (
    <Link className={cardClasses} to={path}>
        <figure className="card-pic-wrap">
            <img class="card-img" alt={alt} src={src}/>
        </figure>
        <div className="card-info">
            <h5 className="card-text">{title}</h5>
        </div>
    </Link>
  );
}

export default ImageCard;

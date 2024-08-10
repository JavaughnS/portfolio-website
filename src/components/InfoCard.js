import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function BasicCard({ cardClasses, title, description, path }) {
  return (
    <Link className={cardClasses} to={path}>
        <div className="card-info">
            {title && <h5 className="card-title">{title}</h5>}
            {description && <p className="card-text">{description}</p>}
        </div>
    </Link>
  );
}

export default BasicCard;

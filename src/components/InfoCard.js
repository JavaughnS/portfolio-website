import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function BasicCard({ cardClasses, title, description, path }) {
  return (
    <Link className={cardClasses} to={path}>
        <div className="card-info">
            <h5 className="card-text">{title}</h5>
        </div>
    </Link>
  );
}

export default BasicCard;

import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function BasicCard({ cardClasses, cardTitle, children, path }) {
  const id = cardTitle.toLowerCase().replace(/ /g, '-');

  return (
    <Link id={id} className={cardClasses} to={path}>
        <div className="card-info">
            {cardTitle && <h5 className="card-title">{cardTitle}</h5>}
            {children && <p className="card-text">{children}</p>}
        </div>
    </Link>
  );
}

export default BasicCard;

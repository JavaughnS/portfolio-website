import React from 'react';
import "./Scroller.css";

function Scroller({ direction, children }) {
  return (
    <div className="scroller" data-direction={direction ? "right" : "left"}>
        <ul className="tag__list scroller__inner">
            {children.map((item, key) => (
            <li key={key} className="tag">
                {item}
            </li>
            ))}
            {children.map((item, key) => (
            <li key={key} className="tag" aria-hidden="true">
                {item}
            </li>
            ))}
        </ul>{" "}
        {/* TODO: hover arrows */}
    </div>
  )
}

export default Scroller

import React /* , { useState, useRef } */ from "react";

function CollapsibleCard({ caller, title, nested, children }) {
  //   const [isExpanded, setIsExpanded] = useState(false);
  //   const ref = useRef();
  //   const [height, setHeight] = useState();
  //   const handleToggle = e => {
  //     e.preventDefault(); // prevents page from refreshing
  //     setIsExpanded(!isExpanded);
  //     setHeight(ref.current.clientHeight);
  //   };

  //   const classes = `list-group-item ${
  //     isExpanded ? "is-expanded" : null
  //   }`;
  //   const currentHeight = isExpanded ? height : 0;
  const id = title.toLowerCase().replace(" ", "-");

  return (
    <details id={id} className={nested ? "collapsible__sub__card" : "collapsible__card"}>
      <summary>{title}</summary>
      {children}
    </details>
  );
}

export default CollapsibleCard;

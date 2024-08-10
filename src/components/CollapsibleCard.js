import React, { useState, useRef } from 'react'

function CollapsibleCard({cardClass, titleClass, title, children}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = React.useRef();
  const [height, setHeight] = React.useState();
  const handleToggle = e => {
    e.preventDefault(); // prevents page from refreshing
    setIsExpanded(!isExpanded);
    setHeight(ref.current.clientHeight);
  };

//   const classes = `list-group-item ${
//     isExpanded ? "is-expanded" : null
//   }`;
  const currentHeight = isExpanded ? height : 0;
  
  return (
    <details className={cardClass ? cardClass : 'collapsible-card'}>
      <summary className={titleClass}>{title}</summary>
      {children}
    </details>
  )
}

export default CollapsibleCard;

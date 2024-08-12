import React/* , { useState, useRef } */ from 'react'

function CollapsibleCard({ cardClass, titleClass, title, children }) {
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
const id = title.toLowerCase().replace(' ', '-');
  
  return (
    <details id={id} className={cardClass ? cardClass : 'collapsible-card'}>
      <summary className={titleClass}>{title}</summary>
      {children}
    </details>
  )
}

export default CollapsibleCard;

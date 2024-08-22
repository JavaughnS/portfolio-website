import React from "react";
import CardDeck from "../components/CardDeck";
import ImageCard from "../components/ImageCard";
import "./Demos.css";

function Demos({ content }) {
  const CALLER = "demos";

  return (
    <div id="demos-page">
      <h1>Demos</h1>
      <CardDeck classes="demos__deck">
        {content.demo.map((data, key) => (
          <ImageCard key={key} caller={CALLER} card={data}/>
        ))}
      </CardDeck>
    </div>
  );
}

export default Demos;

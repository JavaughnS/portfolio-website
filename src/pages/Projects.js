import React from "react";
import CardDeck from "../components/CardDeck";
// TODO: add tooltips to doc links to communicate that it will be an external link to a design/reflection doc
function Projects({content}) {
  const projects = content.projects.toReversed();

  return (
    <div>
      <h4 className="page-title">Latest Project Posts</h4>
      <CardDeck cardType="info" classes="info-card-deck" cardData={projects} />
    </div>
  );
}

export default Projects;

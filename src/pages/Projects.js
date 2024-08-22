import React from "react";
import CardDeck from "../components/CardDeck";
import CollapsibleCard from "../components/CollapsibleCard";
// TODO: add tooltips to doc links to communicate that it will be an external link to a design/reflection doc
function Projects({ content }) {
  const CALLER = "projects";
  const projects = content.projects.toReversed();

  return (
    <div id="projects-page">
      <h1>Latest Project Posts</h1>
      <CardDeck classes="general__card__deck">
        {projects.map((data, key) => (
          <CollapsibleCard key={key} caller={CALLER} title={data.name}>
            {data.longDesc}
            <a href={data.repo} target="_blank" rel="noopener noreferrer">{data.name} on GitHub</a>
          </CollapsibleCard>
        ))}
      </CardDeck>
    </div>
  );
}

export default Projects;

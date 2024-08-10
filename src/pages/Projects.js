import React from "react";
import CardDeck from "../components/CardDeck";
import InfoCard from "../components/InfoCard";

function Projects() {
  const projectCards = [
    <InfoCard
      cardClasses="info-card"
      title="Project Post 1"
      description="Coming Soon"
    />,
    <InfoCard
      cardClasses="info-card"
      title="Project Post 2"
      description="Coming Soon"
    />,
    <InfoCard
      cardClasses="info-card"
      title="Project Post 3"
      description="Coming Soon"
    />,
    <InfoCard
      cardClasses="info-card"
      title="Project Post 4"
      description="Coming Soon"
    />,
    <InfoCard
      cardClasses="info-card"
      title="Project Post 5"
      description="Coming Soon"
    />
  ];
  return (
    <div>
      <h4 className="page-title">Latest Project Posts</h4>
      <CardDeck classes="info-card-deck" cards={projectCards} />
    </div>
  );
}

export default Projects;

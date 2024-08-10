import React from "react";
import CardDeck from "../components/CardDeck";
import InfoCard from "../components/InfoCard";

function Blog() {
  const blogCards = [
    <InfoCard
      cardClasses="info-card"
      title="Blog Post 1"
      description="Coming Soon"
    />,
    <InfoCard
      cardClasses="info-card"
      title="Blog Post 2"
      description="Coming Soon"
    />,
    <InfoCard
      cardClasses="info-card"
      title="Blog Post 3"
      description="Coming Soon"
    />,
    <InfoCard
      cardClasses="info-card"
      title="Blog Post 4"
      description="Coming Soon"
    />,
    <InfoCard
      cardClasses="info-card"
      title="Blog Post 5"
      description="Coming Soon"
    />
  ];

  return (
    <div>
      <h4 className="page-title">Latest Blog Posts</h4>
      <CardDeck classes="info-card-deck" cards={blogCards} />
    </div>
  );
}

export default Blog;

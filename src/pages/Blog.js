import React from "react";
import CardDeck from "../components/CardDeck";
import BasicCard from "../components/BasicCard";

function Blog({ content }) {
  const CALLER = "blog";
  const blogData = content.blog.toReversed();

  return (
    <div id="blog-page">
      <h1>Latest Blog Posts</h1>
      <CardDeck classes="general__card__deck">
        {blogData.map((data, key) => (
          <BasicCard key={key} caller={CALLER} card={data} />
        ))}
      </CardDeck>
    </div>
  );
}

export default Blog;

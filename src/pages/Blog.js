import React from "react";
import CardDeck from "../components/CardDeck";

function Blog({content}) {
  const blogData = content.blog.toReversed();

  return (
    <div>
      <h4 className="page-title">Latest Blog Posts</h4>
      <CardDeck cardType="info" classes="info-card-deck" cardData={blogData} />
    </div>
  );
}

export default Blog;

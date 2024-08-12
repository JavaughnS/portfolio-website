import React from "react";
import CardDeck from "../components/CardDeck";

function Home({content}) {
  const projects = content.projects.toReversed();
  const entries = content.blog.toReversed();

  const projPrevLen = projects.length > 5 ? 5 : projects.length;
  let projPrevCards = [];
  for (let i = 0; i < projPrevLen; i++) {
    projPrevCards.push(projects.pop());
  };

  let blogPrevCards = [];
  const blogPrevLen = entries.length > 5 ? 5 : entries.length;
  for (let i = 0; i < blogPrevLen; i++) {
    blogPrevCards.push(entries.pop());
  };

  return (
    <div id="home-page">
      <div id="home-upper-content">
        <div className="identification-section">
          <h4>Javaughn Smith</h4>
          <div className="blurb-plus">
            <figure className="pfp-container">
              <img
                src="images/temp-profile-pic.JPG"
                alt="Javaughn Smith"
                className="pfp"
              />
            </figure>
            <h5 className="intro-blurb">
              Welcome to my website! In case you've made it this
              far without spotting my name, I'm Javaughn! I'm a 
              software engineer, and I built this website to 
              tell you all about that. I invite you to have a look 
              around the site to learn more about me and my work.
            </h5>
          </div>
        </div>
        <div className="projects-preview">
          <h4>Latest Project Activity</h4>
          <CardDeck cardType="image" classes="project-preview-deck" cardData={projPrevCards} />
        </div>
      </div>
      <div id="home-lower-content">
        <h4>Latest Blog Posts</h4>
        <CardDeck cardType="info" classes="info-card-deck" cardData={blogPrevCards} />
      </div>
    </div>
  );
}

export default Home;

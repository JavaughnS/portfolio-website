import React from "react";
import CardDeck from "../components/CardDeck";
import ImageCard from "../components/ImageCard";
import InfoCard from "../components/InfoCard";
// import { FetchText } from "../helpers/JSONHelper";
import * as myConstants from "../constants";

function Home() {
  // const INTRO_BLURB = {"Welcome to my website!\nIn case you've made it this
  //                       far without spotting my name, I'm Javaughn! I'm a 
  //                       software engineer, and I built this website to 
  //                       tell you all about it. I invite you to have a look 
  //                       around the site to learn more about me and my work."
  //                   };
  const projPrevCards = [
    <ImageCard
      cardClasses="image-card-vertical"
      src="images/placeholder.JPG"
      title="This Website!"
      description="Coming Soon"
    />,
    <ImageCard
      cardClasses="image-card-vertical"
      src="images/placeholder.JPG"
      title="Project 2"
      description="Coming Soon"
    />,
    <ImageCard
      cardClasses="image-card-vertical"
      src="images/placeholder.JPG"
      title="Project 3"
      description="Coming Soon"
    />
  ];
  const blogPrevCards = [
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
    />,
    <InfoCard
      cardClasses="info-card"
      title="Blog Post 6"
      description="Coming Soon"
    />,
    <InfoCard
      cardClasses="info-card"
      title="Blog Post 7"
      description="Coming Soon"
    />,
    <InfoCard
      cardClasses="info-card"
      title="Blog Post 8"
      description="Coming Soon"
    />
  ];

  return (
    <div id="home-page">
      <div id="home-upper-content">
        <div class="identification-section">
          <h4>Javaughn Smith</h4>
          <div class="blurb-plus">
            <figure class="pfp-container">
              <img
                src="images/temp-profile-pic.JPG"
                alt="Javaughn Smith"
                className="pfp"
              />
            </figure>
            <h5 class="intro-blurb">
              Welcome to my website! In case you've made it this
              far without spotting my name, I'm Javaughn! I'm a 
              software engineer, and I built this website to 
              tell you all about that. I invite you to have a look 
              around the site to learn more about me and my work.
            </h5>
          </div>
        </div>
        <div class="projects-preview">
          <h4>Latest Project Activity</h4>
          <CardDeck classes="project-preview-deck" cards={projPrevCards} />
        </div>
      </div>
      <div id="home-lower-content">
        <h4>Latest Blog Posts</h4>
        <CardDeck classes="info-card-deck" cards={blogPrevCards} />
      </div>
    </div>
  );
}

export default Home;

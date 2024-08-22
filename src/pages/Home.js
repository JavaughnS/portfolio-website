import React from "react";
import BasicCard from "../components/BasicCard";
import CardDeck from "../components/CardDeck";
import ImageCard from "../components/ImageCard";
import "./Home.css";

function Home({ content }) {
  const CALLER = "home";
  const projects = Array.from(content.projects);
  const entries = Array.from(content.blog);
  const maxLen = projects.length > 5 && entries.length > 5 ? 5 : Math.max(projects.length, entries.length);
  
  let projPrevCardData = [];
  let blogPrevCardData = [];
  for (let i = 0; i < maxLen; i++) {
    if (projects.length !== 0) {
      projPrevCardData.push(projects.pop());
    }
    if (entries.length !== 0) {
      blogPrevCardData.push(entries.pop());
    }
  }

  return (
    <div id="home__page">
      <div id="home__upper__content">
        <div className="introduction__section">
          <h2>Javaughn Smith</h2>
          <div className="identifier">
            <figure className="pfp__container">
              <img
                src="images/temp-profile-pic.JPG"
                alt="Javaughn Smith"
                className="pfp"
              />
            </figure>
            {/* <figcaption>(I promise a better pic is coming lol)</figcaption> */}
            <p className="greeting">
              Welcome to my website! In case you've made it this far without
              spotting my name, I'm Javaughn! I'm a software engineer, and I
              built this website to tell you all about that. I invite you to
              have a look around the site to learn more about me and my work.
            </p>
          </div>
        </div>
        <div className="projects__preview">
          <h2>Latest Project Activity</h2>
          <CardDeck classes="project__preview__deck">
            {projPrevCardData.map((data, key) => (
              <ImageCard key={key} caller={CALLER} card={data}/>
            ))}
          </CardDeck>
        </div>
      </div>
      <div id="home__lower__content">
        <h2>Latest Blog Posts</h2>
        <CardDeck classes="general__card__deck">
          {blogPrevCardData.map((data, key) => (
            <BasicCard key={key} caller={CALLER} card={data}/>
          ))}
        </CardDeck>
      </div>
    </div>
  );
}

export default Home;

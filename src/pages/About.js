import React from "react";
import CollapsibleCard from "../components/CollapsibleCard";
import * as myConstants from "../constants";
import CardDeck from "../components/CardDeck";
import Scroller from "../components/Scroller";
import "./About.css";

function About({ content }) {
  const CALLER = "about";
  const month = new Map([
    ["01", "Jan"],
    ["02", "Feb"],
    ["03", "Mar"],
    ["04", "Apr"],
    ["05", "May"],
    ["06", "Jun"],
    ["07", "Jul"],
    ["08", "Aug"],
    ["09", "Sep"],
    ["10", "Oct"],
    ["11", "Nov"],
    ["12", "Dec"],
  ]);
  const convertMonth = (date) => {
    let dateArr = date.split("/");
    return month.get(dateArr[0]) + " " + dateArr[1];
  };

  return (
    <div id="about-page">
      <h1>Javaughn Smith</h1>
      <div className="space">
        <div className="centered">
          <a
            href={myConstants.RESUME}
            aria-label="Javaughn Smith's Resume"
            download
          >
            Resume PDF
          </a>{" "}
          <span>&#183;</span>{" "}
          <a
            href={myConstants.LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>{" "}
          <span>&#183;</span>{" "}
          <a
            href={myConstants.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            GitHub
          </a>
        </div>
        <p className="centered">
          Click the links above for my resume, LinkedIn profile, and GitHub,
          respectively.
        </p>
      </div>
      <CardDeck classes="general__card__deck">
        <CollapsibleCard caller={CALLER} title="Introduction">
          <p>
            Back-end developer with ~2 years of experience in analysis, design,
            development, and maintenance of distributed systems and cloud
            computing for digital enterprising. Thrive in a collaborative,
            purpose- driven, cross-functional environment with a growth mindset.
          </p>
        </CollapsibleCard>
        <CollapsibleCard caller={CALLER} title="Skills">
          <Scroller>
            {content.about.skills.concepts}
          </Scroller>
          <Scroller direction={true}>
            {content.about.skills.technologies}
          </Scroller>
        </CollapsibleCard>
        <CollapsibleCard caller={CALLER} title="Experience">
          <CardDeck classes="general__card__deck">
            {content.about.experience.map((data, cardKey) => (
              <CollapsibleCard
                key={cardKey}
                caller={CALLER}
                title={data.entity}
              >
                <h4>{data.title}</h4>
                <h5>
                  {convertMonth(data.start)} - {convertMonth(data.end)}
                </h5>
                <ul>
                  {data.details.map((listItem, listKey) => (
                    <li key={listKey}>{listItem}</li>
                  ))}
                </ul>
              </CollapsibleCard>
            ))}
          </CardDeck>
        </CollapsibleCard>
        <CollapsibleCard caller={CALLER} title="Education">
          <CardDeck classes="general__card__deck">
            {content.about.education.map((data, cardKey) => (
              <CollapsibleCard
                key={cardKey}
                caller={CALLER}
                title={data.entity}
              >
                <h4>{data.title}</h4>
                <h5>
                  {convertMonth(data.start)} - {convertMonth(data.end)}
                </h5>
                <p>{data.details}</p>
              </CollapsibleCard>
            ))}
          </CardDeck>
        </CollapsibleCard>
      </CardDeck>
    </div>
  );
}

export default About;

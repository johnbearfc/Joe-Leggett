import React from "react";
import styled from "styled-components";
import vitaleaf from "../images/vitaleaf.jpg";
import boardquest from "../images/boardquest.png";
import metmap2 from "../images/metmap2.png";
import neuronet from "../images/neuronet.jpeg";

const ProjectsSection = styled.div`
  z-index: 1;

  .dash {
    color: #ff8000;
  }

  .break {
    text-align: center;
    width: 100%;
    font-size: 1.5rem;
  }

  .section-title {
    font-style: italic;
  }
  border-top: 2px solid #0b0d0d;

  h2 {
    text-decoration: underline;
  }

  .text-box {
    max-width: 50%;
    padding: 5px 20px 0 20px;
    // color: #233d4d;
    // background-color: #8faaab;
    font-family: "Libre Baskerville", sans-serif;

    font-size: 0.9rem;
  }

  .tech-box {
    // color: #233d4d;

    font-weight: 700;
    padding: 5px 20px 0 20px;
    font-size: 0.9rem;
    text-align: center;

    font-family: "Syne", sans-serif;
  }

  h2 {
    font-family: "Syne", sans-serif;
  }

  ul {
    list-style-type: none;
    margin: 0 0 0 10px;
    padding: 0;
  }

  .skills {
    font-weight: 700;
    word-spacing: 3px;
  }

  img {
    // position: relative;
    // bottom: -3px;
    width: 100%;
  }

  .filt-img {
    filter: opacity(70%);
  }

  .nav-box {
    font-weight: 700;
    font-size: 0.9rem;

    padding: 0 0 20px 0;
    text-align: center;
  }
  a {
    color: #233d4d;

    margin-right: 10px;
    // text-decoration: none;
  }

  a:hover {
    color: #ff8000;
  }
`;

const ProjectWrapper = styled.section`
  // border: 1px solid #233d4d;

  box-shadow: -1px 2px 11px 5px rgba(0, 0, 0, 0.2);
  width: 70%;
  border-radius: 1px;
  margin: 35px 15% 35px 15%;
  background-color: #8faaab;
`;

const Projects = () => {
  return (
    <ProjectsSection>
      <h1 className="section-title">
        <span className="dash">-</span> PROJECTS :
      </h1>
      <ProjectWrapper>
        <img src={vitaleaf} />
        <div className={"text-box"}>
          <h2>Vitaleaf</h2>
          <p>
            Vitaleaf is a houseplant care and identification app. Users can add
            plants to their inventory, store images, get notified for the
            watering of their plants according to their individual requirements,
            and identify their plant using Vitaleaf's image recognition feature.
          </p>
        </div>
        <div className="tech-box">
          <p>TECH USED:</p>
          <p className="skills">
            Node.js / TypeScript / React Native / AWS API Gateway / AWS DynamoDB
            / AWS S3 / AWS Lambda / AWS Cognito /
          </p>
        </div>
        <div className="nav-box">
          <p>-</p>
          <span className="dash">/ </span>
          <a
            href="https://github.com/johnbearfc/404-Project-BE"
            target="_blank"
          >
            GitHub (be)
          </a>
          <span className="dash">/ </span>
          <a
            href="https://github.com/johnbearfc/404-Project-FE"
            target="_blank"
          >
            GitHub (fe)
          </a>
        </div>
      </ProjectWrapper>
      <div className="break">
        <span>-------</span>
      </div>
      <ProjectWrapper>
        <img src={boardquest} className="filt-img" />
        <div className={"text-box"}>
          <h2>Board Quest</h2>
          <p>
            Board Quest allows table top enthusiasts to explore the world of
            board games together and speak of their tales along the way.
            Interacting with the web app allows users to browse, post and vote
            on reviews and comments.
          </p>
        </div>
        <div className="tech-box">
          <p>TECH USED:</p>
          <p className="skills">Node.js / React / PostgreSQL / Express.js</p>
        </div>
        <div className="nav-box">
          <p>-</p>
          <span className="dash">/ </span>
          <a href="https://boardquest.netlify.app/" target="_blank">
            Netlify
          </a>
          <span className="dash">/ </span>
          <a
            href="https://github.com/johnbearfc/nc-board-quest"
            target="_blank"
          >
            GitHub (be)
          </a>
          <span className="dash">/ </span>
          <a href="https://github.com/johnbearfc/nc-games" target="_blank">
            GitHub (fe)
          </a>
        </div>
      </ProjectWrapper>
      <div className="break">
        <span>-------</span>
      </div>
      <ProjectWrapper>
        <img src={metmap2} />
        <div className={"text-box"}>
          <h2>Meteor Map</h2>
          <p>
            Geographical data visualisation of NASA's data set of all known
            meteor landings. Users can filter landings by year and size ranges.
          </p>
        </div>
        <div className="tech-box">
          <p>TECH USED:</p>
          <p className="skills">React / Leaflet</p>
        </div>
        <div className="nav-box">
          <p>-</p>
          <span className="dash">/ </span>
          <a href="https://meteormap.netlify.app/" target="_blank">
            Netlify
          </a>
          <span className="dash">/ </span>
          <a
            href="https://github.com/johnbearfc/fe-react-data-visualisation"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </ProjectWrapper>
      <div className="break">
        <span>-------</span>
      </div>
      <ProjectWrapper>
        <img src={neuronet} />
        <div className={"text-box"}>
          <h2>NeuroNet</h2>
          <p>
            Sound Design for a cyberpunk adventure game. As a new A.I, created
            to manage the city of Catena, you have the power to shape its future
            and its people. But where will your choices lead them, into
            prosperity or ruin?
          </p>
        </div>
        <div className="tech-box">
          <p>TECH USED:</p>
          <p className="skills">C# / Reaper / Unity</p>
        </div>
        <div className="nav-box">
          <p>-</p>
          <span className="dash">/ </span>
          <a
            href="https://store.steampowered.com/app/1423000/NeuroNet_Mendax_Proxy/"
            target="_blank"
          >
            Steam
          </a>
        </div>
      </ProjectWrapper>
    </ProjectsSection>
  );
};

export default Projects;

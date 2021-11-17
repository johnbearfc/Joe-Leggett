import React from "react";
import styled from "styled-components";
import vitaleaf from "../images/vitaleaf.jpg";

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
    font-weight: 700;
    padding: 5px 20px 10px 20px;
    font-size: 0.9rem;
    text-align: center;
    // color: #233d4d;

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

  .nav-box {
    padding: 10px;
    text-align: center;
  }
  a {
    color: #233d4d;

    margin-right: 10px;
    text-decoration: none;
  }

  a:hover {
    color: #ff8000;
  }
`;

const ProjectWrapper = styled.section`
  // border: 1px solid #233d4d;
  border: 2px solid #233d4d;

  box-shadow: -1px 2px 11px 5px rgba(0, 0, 0, 0.1);
  width: 70%;
  border-radius: 1px;
  margin: 35px 15% 10px 15%;
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
          <br />
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
    </ProjectsSection>
  );
};

export default Projects;

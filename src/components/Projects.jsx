import React from "react";
import styled from "styled-components";
import vitaleaf from "../images/vitaleaf.jpg";

const ProjectsSection = styled.div`
  z-index: 1;
  bottom: 150px;

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
    // color: #233d4d;
    // background-color: #8faaab;
  }

  p {
    font-family: "Libre Baskerville", sans-serif;

    font-size: 0.9rem;
  }

  img {
    width: 60%;
    border-radius: 1px;
    margin: 10px 20% 10px 20%;
    // border: 2px solid #8faaab;
    // filter: grayscale(30%);
  }
`;

const ProjectWrapper = styled.section`
  // border: 2px solid #0b0d0d;
  border-radius: 1px;
  background-color: #8faaab;
  padding: 5px 20px 10px 20px;
`;

const Projects = () => {
  return (
    <ProjectsSection>
      <h1 className="section-title">
        <span className="dash">-</span> PROJECTS :
      </h1>
      <ProjectWrapper>
        <div className={"text-box"}>
          <h2>Vitaleaf</h2>
          <p>
            Board Quest allows table top enthusiasts to explore the world of
            board games together and speak of their tales along the way.
            Interacting with the API allows users to browse, post and vote on
            reviews and comments.
          </p>
        </div>
        <img src={vitaleaf} />
      </ProjectWrapper>
      <div className="break">
        <span>-------</span>
      </div>
    </ProjectsSection>
  );
};

export default Projects;

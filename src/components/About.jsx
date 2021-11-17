import React from "react";
import styled from "styled-components";
import pic from "../images/IMG_2477.png";

const AboutSection = styled.div`
  span {
    color: #ff8000;
  }

  .section-title {
    font-style: italic;
  }
  border-top: 2px solid #0b0d0d;

  margin-top: 140px;

  .text-box {
    max-width: 50%;
    font-family: "Libre Baskerville", sans-serif;

    // border: 1px solid #edf2ef;
    padding: 0 20px 0px 20px;
    // border-radius: 2px;
    // box-shadow: 5px 5px 29px 5px rgba(237, 242, 239, 0.02);
  }
  .skills {
    width: 70%;
    color: #233d4d;
    font-weight: 700;
    text-align: center;
    border: 1px solid #233d4d;
    margin: 20px auto 30px 13%;
    word-spacing: 3px;
    background-color: #8faaab;
    padding: 20px;
    border-radius: 1px;
    // box-shadow: 5px 5px 29px 5px rgba(237, 242, 239, 0.02);
  }

  p {
    color: #0b0d0d;
    font-size: 0.9rem;
    display: inline-block;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <h1 className="section-title">
        <span>-</span> ABOUT :
      </h1>
      <div className="text-box">
        <p>
          I'm a graduate from Northcoders, where I have gained exposure to a
          variety of industry standard platforms in an immersive,
          industry-leading learning environment - learning the skills necessary
          to become a dynamic full stack developer. Prior to this training, I
          have worked as a composer and developed a passion for programming as a
          sound designer for games. I have an interest in all areas of
          development, particularly AI and machine learning. My programming
          skills include:
        </p>
      </div>
      <p className="skills">
        JavaScript / TypeScript / C# / C++ / AWS / SQL / React / HTML / CSS
      </p>
    </AboutSection>
  );
};

export default About;

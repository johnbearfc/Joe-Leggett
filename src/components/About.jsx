import React from "react";
import styled from "styled-components";
import * as Fa from "react-icons/fa";
import * as Si from "react-icons/si";

const AboutSection = styled.div`
  span {
    color: #ff8000;
  }

  .section-title {
    font-style: italic;
  }
  border-top: 2px solid #0b0d0d;

  margin-top: 140px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 140px 0 0 0;
  }

  .text-box {
    max-width: 50%;
    font-family: "Libre Baskerville", sans-serif;
    padding: 0 20px 0px 20px;
    @media only screen and (max-width: 600px) {
      max-width: 100%;
    }
  }

  section {
    display: flex;
    flex-flow: column;
    align-items: center;
    div.container {
      transition: all 0.3s ease;
      h1 {
        margin: 15px 0 0 0;
      }
      h3 {
        margin: 0 0 25px 0;
      }
    }
    @media (max-width: 992px) {
      padding: 0 20px 0 20px;
    }
  }
  section.slide-option {
    margin: 30px 0 50px 0;
    .no-marg {
      margin: 0 0 0 0;
    }
  }

  div.highway-slider {
    display: flex;
    justify-content: center;
    width: 96%;
    height: 100px;

    div.highway-barrier {
      overflow: hidden;
      position: relative;
    }
    ul.highway-lane {
      display: flex;
      height: 100%;
      li.highway-car {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #edf2ef;
        color: #343434;
      }
    }
  }

  @keyframes translatestf {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-500%);
    }
  }
  #stffull div.highway-barrier {
    ul.highway-lane {
      width: 500%;
      li.highway-car {
        animation: translatestf 30s linear infinite;
        h4 {
          font-size: 28px;
        }
      }
    }
  }

  @keyframes translateinfinite {
    100% {
      transform: translateX(calc(-180px * 10));
    }
  }
  #infinite div.highway-barrier {
    background: #edf2ef;
    width: 100%;
    &::before,
    &::after {
      content: " ";
      position: absolute;
      z-index: 9;
      width: 180px;
      height: 100%;
    }
    &::before {
      top: 0;
      left: 0;
      background: linear-gradient(
        to right,
        rgba(237, 242, 239, 1) 0%,
        rgba(237, 242, 239, 0) 100%
      );
    }
    &::after {
      top: 0;
      right: 0;
      background: linear-gradient(
        to left,
        rgba(237, 242, 239, 1) 0%,
        rgba(237, 242, 239, 0) 100%
      );
    }
    ul.highway-lane {
      margin: 0;
      width: calc(180px * 20);
      li.highway-car {
        color: #233d4d;

        font-size: 2rem;
        width: 180px;
        animation: translateinfinite 25s linear infinite;
        span.fab {
          font-size: 65px;
        }
      }
    }
  }

  p {
    color: #0b0d0d;
    font-size: 0.9rem;
    display: inline-block;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
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
          development, particularly AI and machine learning. Below are some the
          recent technologies I've used:
        </p>
      </div>
      <section className="slide-option">
        <div id="infinite" class="highway-slider">
          <div class="container highway-barrier">
            <ul class="highway-lane">
              <li class="highway-car">
                <Fa.FaAws />
              </li>
              <li class="highway-car">
                <Fa.FaJsSquare />
              </li>
              <li class="highway-car">
                <Si.SiCplusplus />
              </li>
              <li class="highway-car">
                <Si.SiCsharp />
              </li>
              <li class="highway-car">
                <Si.SiTypescript />
              </li>
              <li class="highway-car">
                <Si.SiPostgresql />
              </li>
              <li class="highway-car">
                <Si.SiReact />
              </li>
              <li class="highway-car">
                <Si.SiHtml5 />
              </li>
              <li class="highway-car">
                <Si.SiCss3 />
              </li>
              <li class="highway-car">
                <Fa.FaNode />
              </li>
              <li class="highway-car">
                <Fa.FaAws />
              </li>
              <li class="highway-car">
                <Fa.FaJsSquare />
              </li>
              <li class="highway-car">
                <Si.SiCplusplus />
              </li>
              <li class="highway-car">
                <Si.SiCsharp />
              </li>
              <li class="highway-car">
                <Si.SiTypescript />
              </li>
              <li class="highway-car">
                <Si.SiPostgresql />
              </li>
              <li class="highway-car">
                <Si.SiReact />
              </li>
              <li class="highway-car">
                <Si.SiHtml5 />
              </li>
              <li class="highway-car">
                <Si.SiCss3 />
              </li>
              <li class="highway-car">
                <Fa.FaNode />
              </li>
            </ul>
          </div>
        </div>
        {/* JavaScript / TypeScript / C# / C++ / AWS / SQL / React / HTML / CSS */}
      </section>
    </AboutSection>
  );
};

export default About;

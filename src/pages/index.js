import * as React from "react";
import Nav from "../components/Nav";
import styled from "styled-components";
import About from "../components/About";
import Projects from "../components/Projects";

// styles
const Main = styled.main`
  color: #0b0d0d;
  background-color: #edf2ef;
  border: 2px solid #0b0d0d;

  padding-left: 3%;
  padding-right: 3%;
  padding-top: 20px;
  margin: 2%;
  font-family: "Syne", sans-serif;
`;

const Heading = styled.h1`
  font-size: 70px;
  margin-top: 140px;
  margin-bottom: 26px;
  max-width: 70%;
  line-height: 0.7;
  font-weight: 700;
  // font-style: italic;
  padding-right: 96px;
`;

const SubH = styled.span`
  color: #233d4d;
  font-size: 18px;
  max-width: 400px;
  font-family: "Libre Baskerville", sans-serif;

  span {
    font-family: "Syne", sans-serif;
    font-weight: 600;

    color: #ff8000;
  }
`;

const SubHLink = styled.a`
  color: #233d4d;
  font-size: 18px;
  text-decoration: none;
  text-decoration-color: #edf2ef;

  :hover {
    color: #ff8000;
  }
`;

// markup
const IndexPage = () => {
  return (
    <Main>
      <title>Joe Leggett</title>
      <Nav />
      <Heading>
        JOE LEGGETT
        <br />
      </Heading>
      <SubH>
        <span>/ </span>
        <SubHLink href="https://northcoders.com/" target="blank">
          Northcoders
        </SubHLink>{" "}
        graduate and software developer <br />
        based in Manchester, UK
      </SubH>
      <About />
      <Projects />
    </Main>
  );
};

export default IndexPage;

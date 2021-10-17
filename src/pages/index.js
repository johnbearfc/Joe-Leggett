import * as React from "react"
import Nav from "../components/Nav"
import styled from "styled-components"

// styles
const Main = styled.main`
  color: #233d4d;
  background-color: #edf2ef;
  padding-left: 96px;
  padding-right: 96px;
  padding-bottom: 100%;
  padding-top: 20px;
  margin: 0px;
  font-family: 'Rubik', sans-serif;
`

const Heading = styled.h1`
  font-size: 70px;
  margin-top: 140px;
  margin-bottom: 26px;
  max-width: 400px;
  line-height: 0.7;
  font-weight: 1000;
`

const SubH = styled.span`
  color: #8faaab;
  font-size: 18px;
  max-width: 400px;

  span {
    color: #ff8000;
  }
`

const SubHLink = styled.a`
  color: #8faaab;
  font-size: 18px;
  text-decoration: none;

  :hover {
    color: #233d4d;
  }
`

// markup
const IndexPage = () => {
  return (
    <Main>
      <title>Joe Leggett</title>
      <Nav />
      <Heading>
        Joe Leggett
        <br />
      </Heading>
        <SubH>
          <span>/ </span>
          <SubHLink href="https://northcoders.com/" target="blank">Northcoders</SubHLink> student and software developer <br/>based in Manchester, UK
        </SubH>
    </Main>
  )
}

export default IndexPage

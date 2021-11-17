import * as React from "react";
import styled from "styled-components";
import * as Bs from "react-icons/bs";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const StyledNav = styled.nav`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  font-weight: 700;
  text-align: right;
  width: 100%;
  color: #ff8000;
  background-color: #edf2ef;

  @media only screen and (max-width: 600px) {
    // width: 100vw;
  }
  padding-bottom: 15px;
  border-bottom: 2px solid #0b0d0d;

  a {
    color: #0b0d0d;
    font-weight: 700;
    margin-right: 30px;
    text-decoration: none;
  }

  a:hover {
    color: #ff8000;
  }

  svg {
    max-width: 17px;
    position: relative;
    top: 3px;
  }

  .nav-text {
    margin-right: 2%;
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <div className="nav-text">
        <br />
        <span>/ </span>
        <AnchorLink to="/#about">About</AnchorLink>
        <span>/ </span>
        <AnchorLink to="/#projects">Projects</AnchorLink>
        <span>/ </span>
        <AnchorLink to="/#contact">Contact</AnchorLink>
        <span>/ </span>
        <a href="https://github.com/johnbearfc" target="_blank">
          <Bs.BsGithub />
        </a>
      </div>
    </StyledNav>
  );
};

export default Nav;

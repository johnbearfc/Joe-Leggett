import * as React from "react";
import styled from "styled-components";
import * as Bs from "react-icons/bs";

const StyledNav = styled.nav`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;

  text-align: right;
  width: 100%;
  color: #ff8000;
  background-color: #edf2ef;

  padding-bottom: 15px;
  border-bottom: 2px solid #0b0d0d;

  a {
    color: #0b0d0d;

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
        <a href="">About</a>
        <span>/ </span>
        <a href="./projects.html">Projects</a>
        <span>/ </span>
        <a href="mailto:jclleggett@gmail.com" target="_blank">
          Contact
        </a>
        <span>/ </span>
        <a href="https://github.com/johnbearfc" target="_blank">
          <Bs.BsGithub />
        </a>
      </div>
    </StyledNav>
  );
};

export default Nav;

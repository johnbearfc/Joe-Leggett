import React from "react";
import styled from "styled-components";
import * as Ri from "react-icons/ri";

const ContactSection = styled.div`
  span {
    color: #ff8000;
  }

  .section-title {
    font-style: italic;
  }
  border-top: 2px solid #0b0d0d;

  margin: 60px 0 60px 0;

  .text-box {
    max-width: 50%;
    font-family: "Libre Baskerville", sans-serif;

    // border: 1px solid #edf2ef;
    padding: 0 20px 0px 20px;
    // border-radius: 2px;
    // box-shadow: 5px 5px 29px 5px rgba(237, 242, 239, 0.02);
  }

  p {
    color: #0b0d0d;
    font-size: 0.9rem;
    display: inline-block;
  }

  .icon:hover {
    color: #8faaab;
    border: 2px dashed #8faaab;
  }

  .icon {
    font-size: 2.5rem;
    width: 30%;
    margin: 30px 35% 0 33.6%;
    padding: 20px;
    color: #233d4d;
    border: 2px dashed #233d4d;
    border-radius: 2px;
    box-shadow: -1px 2px 11px 5px rgba(0, 0, 0, 0.2);
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <h1 className="section-title">
        <span>-</span> Contact :
      </h1>
      <div className="text-box">
        <p>
          If you'd like anymore information about my projects, collaborate or
          say hello, get in touch:
        </p>
      </div>
      <a href="mailto:jclleggett@gmail.com">
        <Ri.RiMailSendLine className="icon" />
      </a>
    </ContactSection>
  );
};

export default Contact;

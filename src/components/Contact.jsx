import React from "react";
import styled from "styled-components";
import * as Ri from "react-icons/ri";

const ContactSection = styled.div`
  margin: 60px 0 60px 0;
  border-top: 2px solid #0b0d0d;

  span {
    color: #ff8000;
  }

  .section-title {
    font-style: italic;
  }

  .text-box {
    max-width: 50%;
    padding: 0 20px 0px 20px;

    font-family: "Libre Baskerville", sans-serif;
    @media only screen and (max-width: 600px) {
      max-width: 100%;
    }
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

  a {
    color: #233d4d;
    text-align: center;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    max-width: 250px;
    margin: 30px auto;
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
      <div className="icon">
        <a href="mailto:jclleggett@gmail.com">
          <Ri.RiMailSendLine />
        </a>
      </div>
    </ContactSection>
  );
};

export default Contact;

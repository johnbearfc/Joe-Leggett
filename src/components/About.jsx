import React from 'react'
import styled from "styled-components"
import pic from '../images/IMG_2477.png'

const AboutSection = styled.div`
  margin-top: 400px;

  span {
    color: #ff8000;
  }

  h1 {
      text-align: right;
  }

  .text-box {
      background-color: #233d4d;
      padding: 20px;
      border-radius: 5px;
  }

  p {
      max-width: 50%;
      color: #edf2ef;
      font-size: 18px;
      display: inline-block;
  }
  
  img {
      box-shadow: -10px -10px #8faaab;;
      max-width: 35%;
      border-radius: 5px;
      position: relative;
      z-index: 1;
      bottom: 230px;
      left: 450px
  }
  

`

const About = () => {
    return (
        <AboutSection>
            <h1><span>-</span> ABOUT</h1>
            <div className={'text-box'}>
                <p>Hi, I'm Joe and a current student at Northcoders, where I have been exposed to a variety of industry standard platforms in an intensive, industry-leading learning environment. Prior to this training, I have 4 years of experience as an audio professional where I developed a passion for programming as a sound designer.</p>
            </div>
                <img src={pic} alt='me'/>
        </AboutSection>
    )
}

export default About

import React from 'react'
import styled from "styled-components"

const ProjectsSection = styled.div`
  position: relative;
  z-index: 1;
  bottom: 150px;

  span {
    color: #ff8000;
  }

  h1 {
      text-align: left;
  }

  h2 {
    color: #ff8000;
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
  
`

const Projects = () => {
    return (
        <ProjectsSection>
            <h1><span>-</span> PROJECTS</h1>
            <div className={'text-box'}>
                <h2>Board Quest</h2>
                <p>Board Quest allows table top enthusiasts to explore the world of board games together and speak of their tales along the way. Interacting with the API allows users to browse, post and vote on reviews and comments. Created using Express.js and PostgreSQL.</p>
            </div>
        </ProjectsSection>
    )
}

export default Projects

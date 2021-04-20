import React from "react";
import styled from "styled-components";
import projects from "./images/projects.png";

const Projects = () => {
  return (
    <Wrapper>
      <Section1>
        <Img src={projects} alt="Profile Pic" />
      </Section1>
      <Section2></Section2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 90%;
  width: 80%;
  background-color: white;
`;

const Section1 = styled.section`
  height: 100%;
  width: 50%;
`;

const Img = styled.img`
  height: inherit;
  width: 100%;
`;

const Section2 = styled.section`
  width: 50%;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: auto;
  padding: 3em 2.5em;
  ul {
    display: flex;
    flex-direction: column;
    max-width: 150px;
    padding-left: 0;
    align-self: center;
  } */
`;

export default Projects;

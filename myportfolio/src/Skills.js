import React from "react";
import styled from "styled-components";
import work from "./images/work.png";
import {
  onPhone,
  onDesktop,
  onTablet,
  onWideDesktop,
} from "./utils/responsivecode";

const Skills = () => {
  return (
    <Wrapper>
      <Section1>
        <Img src={work} alt="Profile Pic" />
      </Section1>
      <Section2></Section2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  ${onWideDesktop()} {
    display: flex;
    flex-direction: row;
    max-width: calc(100vw - 3em);
    height: inherit;
  }
  ${onDesktop()} {
    display: flex;
    flex-direction: row;
    max-width: calc(100vw - 3em);
  }
  ${onTablet()} {
    display: flex;
    flex-direction: column;
  }
  ${onPhone()} {
    display: flex;
    flex-direction: column;
  }
`;

const Section1 = styled.section`
  width: 50%;
  ${onDesktop()} {
    height: inherit;
  }
  @media (max-width: 1230px) and (min-width: 981px) {
    height: inherit;
  }
  ${onTablet()} {
    width: 100%;
    height: 60vh;
  }
  ${onPhone()} {
    width: 100%;
    height: 30vh;
  }
`;

const Img = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const Section2 = styled.section`
  width: 50%;
  @media only screen, (max-width: 1281px) {
    padding: 3em 2.5em;
  }
  ${onDesktop()} {
    padding: 3em 2.5em;
    margin: auto;
  }
  ${onTablet()} {
    width: 90%;
    padding: 30px;
  }
  ${onPhone()} {
    width: 90%;
    padding: 30px;
  }
`;

export default Skills;

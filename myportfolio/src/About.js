import React from "react";
import styled from "styled-components";
import about from "./images/about.jpg";
import { onPhone, onDesktop, onTablet } from "./utils/responsivecode";

const About = () => {
  return (
    <Wrapper>
      <Section1>
        <Img src={about} alt="Profile Pic" />
      </Section1>
      <Section2></Section2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  ${onDesktop()} {
    display: flex;
    flex-direction: row;
    width: calc(100vw - 7em);
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
    height: 100%;
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

  ${onDesktop()} {
    padding: 3em 2.5em;
    margin: auto;
  }
  ${onTablet()} {
    width: 70%;
    padding: 30px;
  }
  ${onPhone()} {
    width: 70%;
    padding: 30px;
  }
`;

export default About;

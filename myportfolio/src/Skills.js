import React from "react";
import styled from "styled-components";
import work from "./images/work.png";
import { onPhone, onDesktop, onTablet } from "./utils/responsivecode";

const Skills = () => {
  return (
    <Wrapper>
      <Section1>
        <Img src={work} alt="Profile Pic" />
      </Section1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 90%;
  width: 80%;
  background-color: white;
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
  height: 100%;
  width: 100%;
`;

const Img = styled.img`
  height: inherit;
  object-fit: cover;
  width: inherit;
`;

// const Section2 = styled.section`
//   width: 50%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   text-align: center;
//   margin: auto;
//   padding: 3em 2.5em;
//   ul {
//     display: flex;
//     flex-direction: column;
//     max-width: 150px;
//     padding-left: 0;
//     align-self: center;
//   }
// `;

export default Skills;

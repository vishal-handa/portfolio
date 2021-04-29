import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  onPhone,
  onDesktop,
  onTablet,
  onWideDesktop,
} from "./utils/responsivecode";
import ProgressBar from "react-customizable-progressbar";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import {
  IoLogoNodejs,
  IoLogoReact,
  IoLogoJavascript,
  IoLogoFirebase,
} from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";
import work from "./images/work.png";

const Skills = () => {
  const [animation, setAnimation] = useState(true);
  useEffect(() => {
    setAnimation(false);
  }, []);
  return (
    <Wrapper>
      <Section1>
        <StyledProgressBar
          radius={50}
          progress={66}
          strokeWidth={10}
          strokeColor="#CD5C5C"
          strokeLinecap="round"
          trackStrokeWidth={10}
          trackTransition="1s ease"
          transition="0.7s ease"
          initialAnimation={animation}
        >
          <SVG>
            <AiFillHtml5 size={55} fill="#CD5C5C" />
          </SVG>
        </StyledProgressBar>
        <StyledProgressBar
          radius={50}
          progress={66}
          strokeWidth={10}
          strokeColor="#5d9cec"
          strokeLinecap="round"
          trackStrokeWidth={10}
          trackTransition="1s ease"
          transition="0.7s ease"
          initialAnimation={animation}
        >
          <SVG>
            <IoLogoCss3 size={55} fill="#5d9cec" />
          </SVG>
        </StyledProgressBar>
        <StyledProgressBar
          radius={50}
          progress={66}
          strokeWidth={10}
          strokeColor="#EFD81D"
          strokeLinecap="round"
          trackStrokeWidth={10}
          trackTransition="1s ease"
          transition="0.7s ease"
          initialAnimation={animation}
        >
          <SVG>
            <IoLogoJavascript size={55} fill="#EFD81D" />
          </SVG>
        </StyledProgressBar>
        <StyledProgressBar
          radius={50}
          progress={66}
          strokeWidth={10}
          strokeColor="#5CD3F3"
          strokeLinecap="round"
          trackStrokeWidth={10}
          trackTransition="1s ease"
          transition="0.7s ease"
          initialAnimation={animation}
        >
          <SVG>
            <IoLogoReact size={55} fill="#5CD3F3" />
          </SVG>
        </StyledProgressBar>
        <StyledProgressBar
          radius={50}
          progress={66}
          strokeWidth={10}
          strokeColor="#509941"
          strokeLinecap="round"
          trackStrokeWidth={10}
          trackTransition="1s ease"
          transition="0.7s ease"
          initialAnimation={animation}
        >
          <SVG>
            <IoLogoNodejs size={55} fill="#509941" />
          </SVG>
        </StyledProgressBar>
        <StyledProgressBar
          radius={50}
          progress={66}
          strokeWidth={10}
          strokeColor="#95D343"
          strokeLinecap="round"
          trackStrokeWidth={10}
          trackTransition="1s ease"
          transition="0.7s ease"
          initialAnimation={animation}
        >
          <SVG>
            <DiMongodb size={55} fill="#95D343" />
          </SVG>
        </StyledProgressBar>
        <StyledProgressBar
          radius={50}
          progress={66}
          strokeWidth={10}
          strokeColor="#6295CB"
          strokeLinecap="round"
          trackStrokeWidth={10}
          trackTransition="1s ease"
          transition="0.7s ease"
          initialAnimation={animation}
        >
          <SVG>
            <SiCplusplus size={55} fill="#6295CB" />
          </SVG>
        </StyledProgressBar>
        <StyledProgressBar
          radius={50}
          progress={66}
          strokeWidth={10}
          strokeColor="#000000"
          strokeLinecap="round"
          trackStrokeWidth={10}
          trackTransition="1s ease"
          transition="0.7s ease"
          initialAnimation={animation}
        >
          <SVG>
            <AiFillGithub size={55} fill="#000000" />
          </SVG>
        </StyledProgressBar>
        <StyledProgressBar
          radius={50}
          progress={66}
          strokeWidth={10}
          strokeColor="#ED7E0D"
          strokeLinecap="round"
          trackStrokeWidth={10}
          trackTransition="1s ease"
          transition="0.7s ease"
          initialAnimation={animation}
        >
          <SVG>
            <IoLogoFirebase size={55} fill="#ED7E0D" />
          </SVG>
        </StyledProgressBar>
      </Section1>
      <Section2>
        <StyledLink exact to={"/"}>
          Back
        </StyledLink>
        <Skillset>Why hire me?</Skillset>
        <Text>
          I am a responsible, goal oriented, and a meticulous person with
          multiple skill set to put my talen to practice, to learn more and grow
          as a professional individual.
        </Text>
        <Text>
          With the knowledge of MERN stack, I have developed skills to take
          initial, on-paper architechture to a full-fledged workign website
          bothe through front-end and backend web developement.
        </Text>
        <Text>
          Add to this my past experience as an administrative officer at
          Concordia University, I bring
          <ul>
            <li>professional attitude</li>
            <li>respectful attitude to time deadlines</li>
            <li>meticulousness to detailed tasks</li>
            <li>openness to constructive criticism</li>
            <li>expertise in working under high workload</li>
          </ul>
          to the table.
        </Text>

        <Text>
          I assure you that with skills mentioned above, both professional and
          personal, I can be an asset to any team or company. If you want to
          know more do not hesitate to contact me via email, and I will get
          right back to you.
        </Text>
      </Section2>
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  vertical-align: middle;
  transition: all 0.3s linear;

  @media only screen, (max-width: 1281px) {
    padding: 3em 2.5em;
  }
  ${onDesktop()} {
    height: inherit;
    padding: 3em 2.5em;
  }
  @media (max-width: 1230px) and (min-width: 981px) {
    height: inherit;
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

const StyledProgressBar = styled(ProgressBar)`
  transition: all 0.3s linear;
  @media only screen, (max-width: 1281px) {
    transform: scale(1.4);
    margin-inline-start: 10px;
  }
  ${onDesktop()} {
    transform: scale(1.2);
    height: 150px;
  }
  ${onTablet()} {
    transform: scale(1);
    margin: 10px;
    height: 150px;
  }
  ${onPhone()} {
    transform: scale(1);
    margin: 10px;
    height: 150px;
  }
`;

const SVG = styled.div`
  position: relative;
  top: -102px;
  left: 31%;
`;

const StyledLink = styled(Link)`
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  background-color: transparent;
  border-radius: 8px;
  border: 0;
  box-shadow: inset 0 0 0 1px #cccccc;
  color: gray;
  cursor: pointer;
  display: inline-block;
  font-size: 0.6em;
  font-weight: 500;
  height: 3.5em;
  letter-spacing: 0.25em;
  line-height: 3.5em;
  padding: 0 2em;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  font-family: "Montserrat", sans-serif;
  &:hover {
    outline: none;
    box-shadow: inset 0 0 0 1px #52cbee;
    color: #52cbee;
  }
`;

const Skillset = styled.h1`
  color: #555;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  line-height: 1.5;
  margin: 1em 0 1em 0;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  &::after {
    content: "";
    display: block;
    background-color: #cccccc;
    height: 1px;
    margin: 1.5rem 0 1.75rem 0;
    width: 5rem;
  }
`;

const Text = styled.p`
  font-size: 1em;
  text-transform: uppercase;
  margin: 0 0 2em 0;
  font-family: "Montserrat", sans-serif;
  color: gray;
  text-transform: none;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;

  @media only screen, (max-width: 1281px) {
    font-size: 20px;
    margin-bottom: 20px;
    line-height: 1.7;
  }
  ${onDesktop()} {
    font-size: 1em;
    line-height: 1.3;
  }
  ${onTablet()} {
    font-size: 1em;
    line-height: 1.3;
  }
  ${onPhone()} {
    font-size: 1em;
    line-height: 1.3;
  }
`;

export default Skills;

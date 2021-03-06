import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Pic from "./images/profilepic.jfif";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { onPhone, onDesktop, onTablet } from "./utils/responsivecode";

const Home = () => {
  return (
    <Wrapper>
      <Section1>
        <Img src={Pic} alt="Profile Pic" />
      </Section1>
      <Section2>
        <Name>Vishal Handa</Name>
        <Text>
          Cheers! I am Vishal, currently based in Montreal, Canada, dreaming
          about starting a new journey as a web developer, and feeling
          venturesome about my future in the industry. <br />
          <br />
          Click below to know more about me!
        </Text>
        <ul>
          <Li>
            <StyledLink to={"/about"}>About me</StyledLink>
          </Li>
          <Li>
            <StyledLink to={"/work"}>Skills</StyledLink>
          </Li>
          <Li>
            <StyledLink to={"/projects"}>Projects</StyledLink>
          </Li>
        </ul>
        <Icons>
          <Anchor
            href={"https://www.linkedin.com/in/vishal-handa/"}
            target="_blank"
          >
            <FaLinkedin size={22} />
          </Anchor>
          <Anchor href={"https://github.com/vishal-handa"} target="_blank">
            <FaGithub size={22} />
          </Anchor>
          <Anchor href="mailto:vishal.handa@outlook.com" target="_blank">
            <FaEnvelope size={22} />
          </Anchor>
        </Icons>
      </Section2>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  ul {
    display: flex;
    flex-direction: column;
    max-width: 150px;
    padding-left: 0;
    align-self: center;
  }
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

const Name = styled.h1`
  color: #555;
  font-family: "Montserrat", sans-serif;
  line-height: 1.5;
  margin: 0 0 1em 0;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-weight: 1500;
  text-align: center;
  &::after {
    content: "";
    display: block;
    background-color: #cccccc;
    height: 1px;
    margin: 1.5rem auto 0.5rem auto;
    width: 5rem;
  }
`;

const Text = styled.p`
  font-size: 1em;
  margin-bottom: 0;
  text-transform: uppercase;
  margin: 0 0 2em 0;
  color: #444444;
  font-family: "Montserrat", sans-serif;
  color: gray;
  text-transform: none;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
`;

const Li = styled.li`
  list-style: none;
  &:nth-child(1)::after {
    background-color: #cccccc;
    content: "";
    display: block;
    height: 1.5em;
    width: 1px;
    margin: auto;
  }
  &:nth-child(2)::after {
    background-color: #cccccc;
    content: "";
    display: block;
    height: 1.5em;
    left: 50%;
    width: 1px;
    margin: auto;
  }
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
  font-size: 0.8em;
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
  width: 100px;
  font-family: "Montserrat", sans-serif;
  &:hover {
    outline: none;
    box-shadow: inset 0 0 0 1px #52cbee;
    color: #52cbee;
  }
  &:active {
    background-color: rgba(73, 200, 255, 0.05);
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  svg {
    cursor: pointer;
    margin: 20px 20px 10px 20px;
    &:hover {
      fill: #52cbee;
    }
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  &:link {
    color: black;
  }

  &:visited {
    color: black;
  }

  &:active {
    color: black;
  }
`;

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Pic from "./images/profilepic.jfif";

const Home = () => {
  return (
    <Wrapper>
      <Section1>
        <Img src={Pic} alt="Profile Pic" />
      </Section1>
      <Section2>
        <Name>Vishal Handa</Name>
        <Text>
          Looking for entry-level opportunities as a full stack web developer.
          Skilled in HTML, vanilla JavaScript, ReactJS, NodeJS, CSS and MongoDB{" "}
        </Text>
        <ul>
          <Li>
            <Link>About</Link>
          </Li>

          <Li>
            <Link>Work</Link>
          </Li>
          <Li>
            <Link>Writings</Link>
          </Li>
        </ul>
      </Section2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 90%;
  width: 80%;
  background-color: white;
  display: flex;
  flex-direction: row;
`;

const Section1 = styled.section`
  height: 100%;
  width: 50%;
`;

const Img = styled.img`
  height: inherit;
  object-fit: cover;
  width: 100%;
`;

const Section2 = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: auto;
  padding: 3em 2.5em;
  ul {
    display: flex;
    flex-direction: column;
  }
`;

const Name = styled.h1`
  color: #555;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
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
  font-size: 0.9em;
  letter-spacing: 0.25em;
  margin-bottom: 0;
  text-transform: uppercase;
  margin: 0 0 2em 0;
  color: #444444;
  font-family: "Montserrat", sans-serif;
  font-size: 13.2px;
`;

const Li = styled.li`
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  background-color: transparent;
  border-radius: 8px;
  border: 0;
  box-shadow: inset 0 0 0 1px #cccccc;
  color: #555 !important;
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
  &:nth-child(1)::after {
    background-color: #cccccc;
    content: "";
    display: block;
    height: 1.5em;
    left: 50%;
    position: absolute;
    top: 100%;
    width: 1px;
  }
  &:nth-child(2)::after {
    background-color: #cccccc;
    content: "";
    display: block;
    height: 1.5em;
    left: 50%;
    position: absolute;
    top: 100%;
    width: 1px;
  }
  &:hover {
    outline: none;
    box-shadow: inset 0 0 0 1px #52cbee;
  }
`;

export default Home;

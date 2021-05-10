import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  onPhone,
  onDesktop,
  onTablet,
  onWideDesktop,
} from "./utils/responsivecode";
import LazyLoad from "react-lazyload";
import { Animated } from "react-animated-css";
import { FaGithub, FaMagic, FaYoutube } from "react-icons/fa";
import project1 from "./images/project1.jpg";
import project2 from "./images/project2.jpg";
import project3 from "./images/project3.jpg";

const Projects = () => {
  return (
    <Wrapper>
      {/* <Section1>
        <Img src={projects} alt="Profile Pic" />
      </Section1> */}
      <Section>
        <StyledLink to={"/"}>Back</StyledLink>
        <LazyLoad height={200} offset={-100}>
          <Animated animationIn="fadeIn" isVisible={true}>
            <Div>
              <Img src={project1} alt="Project 1" />
              <Explanation>
                <H1>Employee Management System</H1>
                <Text>
                  A multi-user react application that is used to manage the
                  organisational tasks of on-campus invigilators' shifts for
                  both admin and the employees. This was the final project for
                  the bootcamp course.
                </Text>
                <Text>
                  Technologies used are React, Node.JS, Express.JS, Redux and
                  MongoDB.{" "}
                </Text>
                <Text>
                  Key features include:
                  <ul>
                    <li>Ability to see shifts in a calendar format</li>
                    <li>Ability to cancel shifts and take cancelled shitfs</li>
                    <li>Add new employees, and sort them by their status</li>
                    <li>
                      Create new shifts, and send mass emails by date to users
                    </li>
                    <li>Update, cancel and delete shifts</li>
                    <li>Change status of employees</li>
                  </ul>
                </Text>
                <Icons>
                  <Anchor
                    href={
                      "https://github.com/vishal-handa/employee-management-system"
                    }
                    target="_blank"
                  >
                    <FaGithub size={25} />
                  </Anchor>
                  <Anchor
                    href={"https://www.youtube.com/watch?v=mQHOisYC7dQ"}
                    target="_blank"
                  >
                    <FaYoutube size={25} />
                  </Anchor>
                </Icons>
              </Explanation>
            </Div>
          </Animated>
        </LazyLoad>
        <LazyLoad height={200} offset={-300}>
          <Animated animationIn="fadeIn" isVisible={true}>
            <Div>
              <Img src={project2} alt="Project 2" />
              <Explanation>
                <H1>Blucast - Best Wearable Technology</H1>
                <Text>
                  An E-commerce application that was designed to sell wearable
                  technologies, This is a user-friendly application that allows
                  customers to easily navigate through the dataset of 300+
                  products, and to go through a purchase process once products
                  had been added to their cart.
                </Text>
                <Text>
                  Technologies used are React, Node.JS, Redux and Express.JS.
                </Text>
                <Text>
                  Key features include:
                  <ul>
                    <li>Animated burger menu</li>
                    <li>Sorting of products with price</li>
                    <li>Pagination</li>
                    <li>Persisted state using local storage</li>
                    <li>
                      Immediate database update and cart update on item select
                    </li>
                  </ul>
                </Text>
                <Icons>
                  <Anchor
                    href={"https://github.com/vishal-handa/group-project"}
                    target="_blank"
                  >
                    <FaGithub size={25} />
                  </Anchor>
                  <Anchor
                    href={"https://www.youtube.com/watch?v=JdcXoHi-IlI"}
                    target="_blank"
                  >
                    <FaYoutube size={25} />
                  </Anchor>
                </Icons>
              </Explanation>
            </Div>
          </Animated>
        </LazyLoad>{" "}
        <LazyLoad height={200} offset={-100}>
          <Animated animationIn="fadeIn" isVisible={true}>
            <Div>
              <Img src={project3} alt="Project 3" />
              <Explanation>
                <H1>Squeaky Centaurs Game</H1>
                <Text>
                  The purpsoe of this project was to use object-oriented
                  techniques to create a game that was loosely based on Nyan Cat
                  game. A template was given, and a new concept of game was
                  created using Javascript.
                </Text>
                <Text>
                  Key features include:
                  <ul>
                    <li>DOM rendering</li>
                    <li>Keyboard events</li>
                    <li>Score update on different types of objects</li>
                    <li>Game over criteria based on critical score</li>
                  </ul>
                </Text>
                <Icons>
                  <Anchor
                    href={"https://github.com/vishal-handa/project-m2-nyan-cat"}
                    target="_blank"
                  >
                    <FaGithub size={25} />
                  </Anchor>
                  <Anchor
                    href={"https://squeakycentaurs.netlify.app/"}
                    target="_blank"
                  >
                    <FaMagic size={25} />
                  </Anchor>
                </Icons>
              </Explanation>
            </Div>
          </Animated>
        </LazyLoad>
      </Section>
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

const Img = styled.img`
  height: 30%;
  width: 40%;
  object-fit: cover;
  margin: auto;
  border: 0.5px solid gray;
  ${onWideDesktop()} {
    height: 30%;
    width: 40%;
  }
  ${onDesktop()} {
    height: 30%;
    width: 40%;
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

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
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
  /* position: relative; */
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  font-family: "Montserrat", sans-serif;
  width: fit-content;
  margin: 20px;
  &:hover {
    outline: none;
    box-shadow: inset 0 0 0 1px #52cbee;
    color: #52cbee;
  }
  &:active {
    background-color: rgba(73, 200, 255, 0.05);
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  width: 100%;
  &:nth-of-type(2) {
    flex-direction: row-reverse;
  }
  ${onWideDesktop()} {
    display: flex;
    flex-direction: row;
    height: inherit;
  }
  ${onDesktop()} {
    display: flex;
    flex-direction: row;
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

const Explanation = styled.div`
  padding: 30px;
`;

const H1 = styled.h1`
  color: #555;
  font-family: "Montserrat", sans-serif;
  line-height: 1.5;
  margin: 0 0 1em 0;
  text-transform: uppercase;
  font-weight: 1500;
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
  }
  ${onDesktop()} {
    font-size: 1em;
  }
  ${onTablet()} {
    font-size: 1em;
  }
  ${onPhone()} {
    font-size: 1em;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: left;
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

export default Projects;

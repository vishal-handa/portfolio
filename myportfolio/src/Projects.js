import React, { useState } from "react";
import styled from "styled-components";
import {
  onPhone,
  onDesktop,
  onTablet,
  onWideDesktop,
} from "./utils/responsivecode";
import LazyLoad from "react-lazyload";
import { Animated } from "react-animated-css";
import { FaGithub, FaYoutube } from "react-icons/fa";
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
        <LazyLoad throttle={200} height={300}>
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
        <LazyLoad throttle={200} height={300}>
          <Animated animationIn="fadeIn" isVisible={true}>
            <Div>
              <Text>
                Hi! It is time for me to force some of my personal information
                on you which you never asked for, so you see me as a human and
                not just as a source of revenue (though I will be a good one, I
                can tell you that!).
              </Text>
              <Img src={project2} alt="Project 2" />
            </Div>
          </Animated>
        </LazyLoad>
        <LazyLoad throttle={200} height={300}>
          <Animated animationIn="fadeIn" isVisible={true}>
            <Div>
              <Img src={project3} alt="Project 3" />
              <Text>
                Hi! It is time for me to force some of my personal information
                on you which you never asked for, so you see me as a human and
                not just as a source of revenue (though I will be a good one, I
                can tell you that!).
              </Text>
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
  height: inherit;
  width: 30%;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 3em 2.5em;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

const Explanation = styled.div`
  padding: 20px;
`;

const H1 = styled.h1`
  color: #555;
  font-family: "Montserrat", sans-serif;
  line-height: 1.5;
  margin: 0 0 1em 0;
  text-transform: uppercase;
  font-weight: 1500;
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

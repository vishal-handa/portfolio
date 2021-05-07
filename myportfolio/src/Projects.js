import React, { useState } from "react";
import styled from "styled-components";
import {
  onPhone,
  onDesktop,
  onTablet,
  onWideDesktop,
} from "./utils/responsivecode";
import projects from "./images/projects.png";
import LazyLoad from "react-lazyload";
import { Animated } from "react-animated-css";

const Projects = () => {
  return (
    <Wrapper>
      <Section1>
        <Img src={projects} alt="Profile Pic" />
      </Section1>
      <Section2>
        <LazyLoad throttle={200} height={300}>
          <Animated animationIn="fadeIn" isVisible={true}>
            <Text>
              Hi! It is time for me to force some of my personal information on
              you which you never asked for, so you see me as a human and not
              just as a source of revenue (though I will be a good one, I can
              tell you that!).
            </Text>
          </Animated>
        </LazyLoad>
        <LazyLoad throttle={200} height={300}>
          <Animated animationIn="fadeIn" isVisible={true}>
            <Text>
              Hi! It is time for me to force some of my personal information on
              you which you never asked for, so you see me as a human and not
              just as a source of revenue (though I will be a good one, I can
              tell you that!).
            </Text>
          </Animated>
        </LazyLoad>
        <LazyLoad throttle={200} height={300}>
          <Animated animationIn="fadeIn" isVisible={true}>
            <Text>
              Hi! It is time for me to force some of my personal information on
              you which you never asked for, so you see me as a human and not
              just as a source of revenue (though I will be a good one, I can
              tell you that!).
            </Text>
          </Animated>
        </LazyLoad>
        <LazyLoad throttle={200} height={300}>
          <Animated animationIn="fadeIn" isVisible={true}>
            <Text>
              Hi! It is time for me to force some of my personal information on
              you which you never asked for, so you see me as a human and not
              just as a source of revenue (though I will be a good one, I can
              tell you that!).
            </Text>
          </Animated>
        </LazyLoad>
        <LazyLoad throttle={200} height={300}>
          <Animated animationIn="fadeIn" isVisible={true}>
            <Text>
              Hi! It is time for me to force some of my personal information on
              you which you never asked for, so you see me as a human and not
              just as a source of revenue (though I will be a good one, I can
              tell you that!).
            </Text>
          </Animated>
        </LazyLoad>
        <LazyLoad throttle={200} height={300}>
          <Animated animationIn="fadeIn" isVisible={true}>
            <Text>
              Hi! It is time for me to force some of my personal information on
              you which you never asked for, so you see me as a human and not
              just as a source of revenue (though I will be a good one, I can
              tell you that!).
            </Text>
          </Animated>
        </LazyLoad>
        <LazyLoad throttle={200} height={300}>
          <Animated animationIn="fadeIn" isVisible={true}>
            <Text>
              Hi! It is time for me to force some of my personal information on
              you which you never asked for, so you see me as a human and not
              just as a source of revenue (though I will be a good one, I can
              tell you that!).
            </Text>
          </Animated>
        </LazyLoad>
        <LazyLoad throttle={200} height={300}>
          <Animated animationIn="fadeIn" isVisible={true}>
            <Text>
              Hi! It is time for me to force some of my personal information on
              you which you never asked for, so you see me as a human and not
              just as a source of revenue (though I will be a good one, I can
              tell you that!).
            </Text>
          </Animated>
        </LazyLoad>
        <LazyLoad throttle={200} height={300}>
          <Animated animationIn="fadeIn" isVisible={true}>
            <Text>
              Hi! It is time for me to force some of my personal information on
              you which you never asked for, so you see me as a human and not
              just as a source of revenue (though I will be a good one, I can
              tell you that!).
            </Text>
          </Animated>
        </LazyLoad>
        <LazyLoad throttle={200} height={300}>
          <Animated animationIn="fadeIn" isVisible={true}>
            <Text>
              Hi! It is time for me to force some of my personal information on
              you which you never asked for, so you see me as a human and not
              just as a source of revenue (though I will be a good one, I can
              tell you that!).
            </Text>
          </Animated>
        </LazyLoad>
        <LazyLoad throttle={200} height={300}>
          <Animated animationIn="fadeIn" isVisible={true}>
            <Text>
              Hi! It is time for me to force some of my personal information on
              you which you never asked for, so you see me as a human and not
              just as a source of revenue (though I will be a good one, I can
              tell you that!).
            </Text>
          </Animated>
        </LazyLoad>
        <LazyLoad throttle={200} height={300}>
          <Animated animationIn="fadeIn" isVisible={true}>
            <Text>
              Hi! It is time for me to force some of my personal information on
              you which you never asked for, so you see me as a human and not
              just as a source of revenue (though I will be a good one, I can
              tell you that!).
            </Text>
          </Animated>
        </LazyLoad>
        <LazyLoad throttle={200} height={300}>
          <Animated animationIn="fadeIn" isVisible={true}>
            <Text>
              Hi! It is time for me to force some of my personal information on
              you which you never asked for, so you see me as a human and not
              just as a source of revenue (though I will be a good one, I can
              tell you that!).
            </Text>
          </Animated>
        </LazyLoad>
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
  height: 100%;
  width: 50%;
`;

const Img = styled.img`
  height: inherit;
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

export default Projects;

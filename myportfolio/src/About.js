import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  onPhone,
  onDesktop,
  onTablet,
  onWideDesktop,
} from "./utils/responsivecode";
import babypic from "./images/mypic1.jpg";
import Gallery from "react-photo-gallery";
import { photos } from "./images/photos";

const About = () => {
  return (
    <Wrapper>
      <Section1>
        <Gallery photos={photos} />
      </Section1>
      <Section2>
        <StyledLink to={"/"}>Back</StyledLink>
        <AboutMe>About Me</AboutMe>
        <Text>
          Hi! It is time for me to force some of my personal information on you
          which you never asked for, so you see me as a human and not just as a
          source of revenue (though I will be a good one, I can tell you that!).
        </Text>

        <Text>But first, here is me when I was 8 years old.</Text>
        <img src={babypic} alt="Younger pic" />

        <Text>
          Yes, I once was of that age, and you saw me at the homepage.
        </Text>
        <Text>
          I grew up in Amritsar, India, a bustling city that was full of the old
          world charm, spirituality, and whole lot of tasty and spicy food.
        </Text>
        <Text>
          The very first programming language I learned was BASIC, but I quickly
          transitioned to Java when it was still under Sun Microsystems. Yes, it
          was that long ago. Over the years I developed skills as a programmer
          in electronics industry (owing to my bachelors major) by learning C++,
          C, Embedded C, VHDL and Verilog HDL. None of that was staisfying
          enough for my soul.
        </Text>
        <Text>
          {"<violins>"}Then I came to Canada, where I got to explore myself at
          the professional level, and even though it it took me some time, but I
          finally decided to follow what I wanted.{"</violins>"}
        </Text>
        <Text>
          I am now a diploma holder of a Full Stack Web Development course
          offered by Concordia University. I am hoping to land my first job as a
          web developer with the skills that I have learned.
        </Text>
        <Text>
          Apart from my learnings, I wouldn't be a human being if I devote all
          of my time to learning and developing new skills. In my spare time I
          like to watch fantasy shows and films, test my couch for softness
          gradient in various positions, mixing and having cups of different
          types tea (outrageous, I know), and taking pictures of my darling cat,
          Bella.
        </Text>
        <Text>
          If you'd like to know more, or just want to say "Hi", shoot me an{" "}
          <a href="mailto:vishal.handa@outlook.com">email</a>. Merci!
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
  &:active {
    background-color: rgba(73, 200, 255, 0.05);
  }
`;

const AboutMe = styled.h1`
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

export default About;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { onPhone, onDesktop, onTablet } from "./utils/responsivecode";
import babypic from "./images/mypic1.jpg";

const About = () => {
  return (
    <Wrapper>
      <Section2>
        <StyledLink exact to={"/"}>
          Back
        </StyledLink>
        <p>
          Hi! It is time for me to force some of my personal information on you
          which you never asked for, so you see me as a human and not just as a
          source of revenue (though I will be a good one, I can tell you that!).
        </p>
        <br />
        <p>But first, here is me when I was 8 years old.</p>
        <img src={babypic} />

        <p>
          Yes, I once was of that age, but this is me now.
          <img />
        </p>
        <p>
          I grew up in Amritsar, India, a bustling city that was full of the old
          world charm, spirituality, and whole lot of tasty and spicy food.
        </p>
        <p>
          The very first programming language I learned was BASIC, but I quickly
          transitioned to Java when it was still under Sun Microsystems. Yes, it
          was that long ago. Over the years I developed skills as a programmer
          in electronics industry (owing to my bachelors major) by learning C++,
          C, Embedded C, VHDL and Verilog HDL. None of that was staisfying
          enough for my soul.
        </p>
        <p>
          {"<violins>"}Then I came to Canada, where I got to explore myself at
          the professional level, and even though it it took me some time, but I
          finally decided to follow what I wanted.{"</violins>"}
        </p>
        <p>
          I am now a diploma holder of a Full Stack Web Development course
          offered by Concordia University. I am hoping to land my first job as a
          web developer with the skills that I have learned.
        </p>
        <p>
          Apart from my learnings, I wouldn't be a human being if I devote all
          of my time to learning and developing new skills. In my spare time I
          like to watch fantasy shows and films, test my couch for softness
          gradient in various positions, mixing and having cups of different
          types tea (outrageous, I know), and taking pictures of my darling cat,
          Bella, bringing justice to the following meme.
        </p>
        <p>
          If you'd like to know more, or just want to say "Hi", shoot me an{" "}
          <a href="mailto:vishal.handa@outlook.com">email</a>. Merci!
        </p>
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

// const Section1 = styled.section`
//   width: 50%;
//   ${onDesktop()} {
//     height: inherit;
//   }
//   @media (max-width: 1230px) and (min-width: 981px) {
//     height: inherit;
//   }
//   ${onTablet()} {
//     width: 100%;
//     height: 60vh;
//   }
//   ${onPhone()} {
//     width: 100%;
//     height: 30vh;
//   }
// `;

// const Img = styled.img`
//   height: 100%;
//   object-fit: cover;
//   width: 100%;
// `;

const Section2 = styled.section`
  width: 100%;
  ${onDesktop()} {
    padding: 3em 2.5em;
  }
  ${onTablet()} {
    width: 70%;
    padding: 30px;
  }
  ${onPhone()} {
    width: 70%;
    padding: 30px;
  }
  p {
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
`;

export default About;

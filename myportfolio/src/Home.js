import React from "react";
import styled from "styled-components";
import Pic from "./images/profilepic.jfif";

const Home = () => {
  return (
    <Wrapper>
      <Section>
        <Img src={Pic} alt="Profile Pic" />
      </Section>
      <Section>hola</Section>
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

const Section = styled.section`
  height: 100%;
  width: 50%;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export default Home;

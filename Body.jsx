import React from "react";
import styled from "styled-components";
import profile from "./assests/graphocs designer.png";

const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
  padding: 40px;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Change to a single column on smaller screens */
  }
`;

const Left = styled.div`
  h1,
  h3,
  p {
    font-family: 'Poppins', sans-serif;
    margin: 5px;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const Body = () => {
  return (
    <BodyContainer  id="about" >
      <Left>
        <h1>About Me</h1>
        <h3>Hello! I am Praveen Kumar</h3>
        <p>
          I'm a web developer and a ChatGPT Prompt Engineer. I'm passionate
          about creating interactive and innovative web experiences. In addition
          to my development skills, I have a creative side—I design AI-generated
          art using Midjourney and DALL-E. I'm also skilled in graphic design
          using Canva.
        </p>
      </Left>
      <Right>
        <img src={profile} alt="Profile" />
      </Right>
    </BodyContainer>
  );
};

export default Body;

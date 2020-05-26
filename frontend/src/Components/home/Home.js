import React from "react";
import styled from "styled-components";
import HomeContent from "./HomeContent";

const Background = styled.div`
  background: white;
  width: 100%;
  padding-bottom: 20px;
  padding-top: 5px;
`;

function Home() {
  return (
    <Background>
      <h1>Thank You For Stoping By My Coding Playground.</h1>
      <h4>
        As my journy through the coding world continues, this site will
        constantly evolve to reflect my progress as a developer.
      </h4>
      <HomeContent />
    </Background>
  );
}

export default Home;

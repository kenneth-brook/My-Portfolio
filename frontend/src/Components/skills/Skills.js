import React from "react";
import styled from "styled-components";

import SkillsContent from "./SkillsContent";

const Background = styled.div`
  background: white;
  width: 100%;
  padding-bottom: 20px;
  padding-top: 5px;
`;

function Skills() {
  return (
    <Background>
      <h1>Here is a list of my curent skills</h1>
      <h2>
        I am a fast learner, and a constant knowledge seeker. New items are
        constantly being added.
      </h2>
      <SkillsContent />
    </Background>
  );
}

export default Skills;

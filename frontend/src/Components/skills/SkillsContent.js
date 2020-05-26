import React from "react";
import styled from "styled-components";

import html5 from "../images/html5.png";
import css from "../images/css.png";
import js from "../images/js.png";
import less from "../images/less.png";
import react from "../images/react.png";
import gatsby from "../images/gatsby.png";
import spring from "../images/spring.png";
import github from "../images/github.png";
import git from "../images/git.png";

const SkillBlockWrap = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const SkillBlock = styled.img`
  width: 12%;
  margin-left: 25px;
`;

function SkillsContent() {
  return (
    <SkillBlockWrap>
      <SkillBlock src={html5} alt="html" />
      <SkillBlock src={css} alt="css" />
      <SkillBlock src={js} alt="javascript" />
      <SkillBlock src={less} alt="less" />
      <SkillBlock src={react} alt="react" />
      <SkillBlock src={gatsby} alt="gatsby" />
      <SkillBlock src={spring} alt="react spring" />
      <SkillBlock src={github} alt="github" />
      <SkillBlock src={git} alt="git" />
    </SkillBlockWrap>
  );
}

export default SkillsContent;

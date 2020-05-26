import React from "react";
import styled from "styled-components";

const FootBackground = styled.div`
    background: black;
    color: white:
    width: 100%;
    padding-bottom: 20px;
    padding-top: 15px;
    border-bottom-left-radius: 13px;
    border-bottom-right-radius: 13px;
    border-top: 3px solid #9a9c9e;
`;

const FootTextH1 = styled.h1`
  color: white;
`;

function Footer() {
  return (
    <FootBackground>
      <FootTextH1> Footer </FootTextH1>
    </FootBackground>
  );
}

export default Footer;

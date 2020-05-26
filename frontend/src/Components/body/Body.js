import React from "react";
import styled from "styled-components";

import Nav from "../nav/Nav";
import Head from "../head/Head";
import Footer from "../footer/Footer";

const Background = styled.div`
  margin: 10px auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  background: white;
  border: 2px solid #1264a3;
  border-radius: 15px;
`;

function Body() {
  return (
    <Background>
      <Head />
      <Nav />
      <Footer />
    </Background>
  );
}

export default Body;

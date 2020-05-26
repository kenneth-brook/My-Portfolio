import React from 'react';
import styled from "styled-components";

const Background = styled.div`
    background: white;
    width: 100%;
    padding-bottom: 20px;
    padding-top: 5px;
`;


function Blog() {
    return (
      <Background>  
        <h1>Blog</h1>
      </Background>
      
    );
  }
  
  export default Blog;
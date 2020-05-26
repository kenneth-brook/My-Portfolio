import React from "react";
import styled from "styled-components";
import me from "../me.jpg";

const Background = styled.div`
  background: white;
  width: 100%;
  padding-bottom: 20px;
  padding-top: 5px;
`;

const ContentWrap = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;

const Img = styled.img`
  float: left;
  border-radius: 50%;
  width: 120px;
  margin: 15px;
`;

function HomeContent() {
  return (
    <Background>
      <ContentWrap>
        <p>
          <Img src={me} alt="me" />
          Lorizzle ipsum dolor crazy amizzle, consectetuer adipiscing fizzle.
          Nullizzle sapien velizzle, gizzle volutpizzle, boom shackalack
          quizzle, gravida vizzle, arcu. Pellentesque mofo phat. Sizzle erizzle.
          Sheezy sizzle dolizzle dapibus turpis tempizzle tempor. Maurizzle
          pellentesque nibh izzle doggy. We gonna chung izzle shizzlin dizzle.
          Pellentesque eleifend rhoncizzle nisi. In hizzle habitasse you son of
          a bizzle dictumst. Boom shackalack dapibus. Curabitizzle tellus urna,
          bizzle cool, dawg ac, eleifend vitae, nunc. Bizzle suscipizzle.
          Integer semper velit sed purizzle.
        </p>

        <p>
          Praesent non its fo rizzle boom shackalack maurizzle posuere
          bibendizzle.Aliquizzle pizzle yo lectizzle.Fizzle break it down mofo
          et sure sodalizzle bow wow wow.Aliquizzle lobortizzle, maurizzle vitae
          dapibizzle my
        </p>

        <p>
          Duis izzle bling bling.Fusce crackalackin ligula, dignissim sizzle fo
          shizzle, fringilla eget, sollicitudizzle nec, tortizzle.Dope a
          nisi.Bow wow wow break yo neck, yall bizzle risus.The bizzle
          erat.Mammasay mammasa mamma oo sa aliquet pizzle turpis.break yo neck,
          yall.
        </p>
      </ContentWrap>
    </Background>
  );
}

export default HomeContent;

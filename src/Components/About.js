import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
function About(props) {
  const [playState, setPlayState] = useState("running");
  const [visible, setVisible] = useState("visible");
  const FadeIn = keyframes`
      from { opacity: 0; }
      to   { opacity: 1; }`;

  const AboutDiv = styled.div`
    width: 60%;
    height: 500px;
    background-color: white;
    display: flex;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    visibility: ${visible};
    animation-play-state: ${playState};
  `;

  const AboutImage = styled.div`
    background-image: url(/assets/img/dragon.jpg);
    background-size: cover;
    display: flex;
    width: 300px;
    height: 400px;
    visibility: ${visible};
    animation-play-state: ${playState};
  `;

  const AboutContent = styled.div`
    width: 600px;
    height: 400px;
    visibility: ${visible};
    animation-play-state: ${playState};
  `;

  const AboutTitle = styled.p`
    font-size: 30px;
    font-weight: 600;
    display: flex;
    margin-left: 100px;
    animation-name: ${FadeIn};
    animation-duration: ${(props) => props.duration};
    animation-delay: ${(props) => props.delay};
    animation-play-state: ${playState};
    visibility: ${visible};
    animation-play-state: ${playState};
  `;

  return (
    <AboutDiv>
      <AboutImage></AboutImage>
      <AboutContent>
        <AboutTitle duration="4s" delay="1s">
          NAME - 길 용 성
        </AboutTitle>
        <AboutTitle duration="4s" delay="2s">
          AGE - 29
        </AboutTitle>
        <AboutTitle duration="4s" delay="3s">
          ADDRESS - 경기도 남양주
        </AboutTitle>
        <AboutTitle duration="4s" delay="4s">
          HOBBY - 영화시청, 게임
        </AboutTitle>
      </AboutContent>
    </AboutDiv>
  );
}

export default About;

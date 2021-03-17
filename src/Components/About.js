import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

function About(props) {
  const [playState, setPlayState] = useState("running");
  const [visible, setVisible] = useState("visible");
  const FadeIn = keyframes`
      from { opacity: 0; }
      to   { opacity: 1; }`;

  const AboutDiv = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: left;
    align-items: center;
    visibility: ${visible};
    animation-play-state: ${playState};
    background-color: white;
  `;

  const AboutLeft = styled.div`
    width: 50%;
    height: 100%;
    background-color: #f5cfb7;
    display: flex;
    justify-content: right;
    align-items: center;
    position: relative;
  `;
  const AboutBox = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 450px;
    height: 600px;
    background-color: #fee6d8;
    box-shadow: 3px 3px 3px 3px grey;
    margin-left: 60%;
    flex-direction: column;
  `;

  const AboutImage = styled.div`
    background-image: url("/assets/img/dragon.jpg");
    background-size: cover;
    background-position: center;
    width: 300px;
    height: 300px;
    visibility: ${visible};
    animation-play-state: ${playState};
    border-radius: 70%;
  `;

  const AboutInfo = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  const AboutInfoText = styled.p`
    font-size: ${(props) => props.size};
    font-weight: ${(props) => props.weight};
    color: ${(props) => props.color};
  `;

  const AboutInfoTextBottom = styled.div`
    background-color: blue;
    width: 60px;
    height: 2px;
  `;

  const AboutSNSBox = styled.div`
    width: 100%;
    height: 50px;
    background-color: #fee6d8;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const SNS = styled.div`
    background-image: url(${(props) => props.ur});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 30px;
    height: 30px;
    margin: 20px;
  `;

  const AboutContent = styled.div`
    width: 600px;
    height: 400px;
    visibility: ${visible};
    animation-play-state: ${playState};
  `;

  const AboutTitle = styled.p`
    font-family: Georgia, "Malgun Gothic", serif;
    display: flex;
    margin-left: 100px;
    animation-name: ${FadeIn};
    animation-duration: ${(props) => props.duration};
    animation-delay: ${(props) => props.delay};
    animation-play-state: ${playState};
    visibility: ${visible};
    animation-play-state: ${playState};
    font-size: 15px;
    padding: 15px 20px;
    :hover {
      font-weight: 700;
    }
  `;

  const AboutA = styled.a`
    margin-left: 10px;
    text-decoration: none;
    color: black;
  `;

  return (
    <AboutDiv>
      <AboutLeft>
        <AboutBox>
          <AboutImage />
          <AboutInfo>
            <AboutInfoText size="20px" weight="600">
              길용성
            </AboutInfoText>
            <AboutInfoTextBottom></AboutInfoTextBottom>
            <AboutInfoText size="20px" weight="600">
              Front-end Developer
            </AboutInfoText>
          </AboutInfo>
          <AboutSNSBox>
            <a href="./">
              <SNS ur="/assets/img/facebook.svg" />
            </a>
            <a href="./">
              <SNS ur="/assets/img/instagram.svg" />
            </a>
            <a href="./">
              <SNS ur="/assets/img/twitter.svg" />
            </a>
            <a href="./">
              <SNS ur="/assets/img/git.svg" />
            </a>
          </AboutSNSBox>
        </AboutBox>
      </AboutLeft>
      <AboutContent>
        <AboutTitle duration="4s" delay="1s">
          이 름 : 길 용 성
        </AboutTitle>
        <AboutTitle duration="4s" delay="2s">
          나 이 : 29
        </AboutTitle>
        <AboutTitle duration="4s" delay="3s">
          주 소 : 경기도 남양주
        </AboutTitle>
        <AboutTitle duration="4s" delay="4s">
          취 미 : 영화시청, 게임
        </AboutTitle>
        <AboutTitle duration="4s" delay="5s">
          깃 : {""}
          <AboutA
            href="https://github.com/gildydtjd"
            target="_blank"
            rel="noreferrer"
          >
            github.com/gildydtjd
          </AboutA>
        </AboutTitle>
        <AboutTitle duration="4s" delay="6s">
          티스토리 : {""}
          <AboutA
            href="https:dragon-world.tistory.com"
            target="_blank"
            rel="noreferrer"
          >
            dragon-world.tistory.com
          </AboutA>
        </AboutTitle>
      </AboutContent>
    </AboutDiv>
  );
}

export default About;

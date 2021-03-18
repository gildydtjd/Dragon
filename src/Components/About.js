import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

function About(props) {
  const [playState, setPlayState] = useState("running");
  const [visible, setVisible] = useState("visible");
  const FadeIn = keyframes`
      from { opacity: 0; }
      to   { opacity: 1; }`;
  console.log(setPlayState);
  console.log(setVisible);
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
    @media screen and (max-width: 768px) {
      display: block;
    }
  `;

  const AboutLeft = styled.div`
    width: 50%;
    height: 100%;
    background-color: #f5cfb7;
    display: flex;
    justify-content: right;
    align-items: center;
    position: relative;
    background-image: url("/assets/img/back3.jpg");
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  `;
  const AboutBox = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 450px;
    height: 600px;
    background-color: #fff;
    box-shadow: 3px 3px 3px 3px grey;
    margin-left: 60%;
    flex-direction: column;
    @media screen and (max-width: 768px) {
      position: relative;
      margin-left: unset;
      box-shadow: none;
    }
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
    background-color: #fff;
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
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100vh;
      background-image: url("/assets/img/back3.jpg");
    }
  `;

  const AboutTitle1 = styled.p`
    display: flex;
    margin-left: 100px;
    animation-name: ${FadeIn};
    animation-duration: ${(props) => props.duration};
    animation-delay: ${(props) => props.delay};
    animation-play-state: ${playState};
    visibility: ${visible};
    animation-play-state: ${playState};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => props.weight};
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    margin: 20px 100px;
    padding: 0;
    @media screen and (max-width: 768px) {
      font-size: 30px;
      margin: 20px 30px;
      padding-top: 50px;
      color: white;
    }
  `;

  const AboutTitle2 = styled.p`
    display: flex;
    margin-left: 100px;
    animation-name: ${FadeIn};
    animation-duration: ${(props) => props.duration};
    animation-delay: ${(props) => props.delay};
    animation-play-state: ${playState};
    visibility: ${visible};
    animation-play-state: ${playState};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => props.weight};
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    margin: 20px 100px;
    padding: 0;
    @media screen and (max-width: 768px) {
      font-size: 20px;
      margin: 40px 40px;
      color: white;
    }
  `;

  const AboutA = styled.a`
    margin-left: 10px;
    text-decoration: none;
    color: black;
    @media screen and (max-width: 768px) {
      color: white;
    }
  `;

  const AboutButtonBox = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 15%;
    @media screen and (max-width: 768px) {
      margin-left: 8%;
    }
  `;
  const AboutButton = styled.button`
    border-radius: 10%;
    width: 150px;
    height: 30px;
    margin: 10px;
    background-color: ${(props) => props.color};
    color: ${(props) => props.fcolor};
    border: #fff;
    @media screen and (max-width: 768px) {
    }
  `;

  const Arrow = styled.div`
    background-image: url("/assets/img/arrow.svg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 50px;
    height: 50px;
    margin-top: 22%;
    display: unset;
    @media screen and (max-width: 768px) {
      display: inline-block;
    }
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
            <a
              href="https://github.com/gildydtjd"
              target="_blank"
              rel="noreferrer"
            >
              <SNS ur="/assets/img/git.svg" />
            </a>
          </AboutSNSBox>
        </AboutBox>
      </AboutLeft>
      <AboutContent>
        <AboutTitle1 size="70px" weight="550">
          Hello
        </AboutTitle1>
        <AboutTitle1 size="30px" weight="600">
          Here's who I am & what I do
        </AboutTitle1>
        <AboutButtonBox>
          <AboutButton color="dodgerblue" fcolor="#fff">
            RESUME
          </AboutButton>
          <AboutButton>PROJECT</AboutButton>
        </AboutButtonBox>
        <AboutTitle2 size="20px" weight="600">
          Technology : React, JavaScript, Css, Html
        </AboutTitle2>
        <AboutTitle2 size="20px" weight="600">
          Git : {""}
          <AboutA
            href="https://github.com/gildydtjd"
            target="_blank"
            rel="noreferrer"
          >
            github.com/gildydtjd
          </AboutA>
        </AboutTitle2>
        <AboutTitle2 size="20px" weight="600">
          Tistory : {""}
          <AboutA
            href="https://dragon-world.tistory.com"
            target="_blank"
            rel="noreferrer"
          >
            dragon-world.tistory.com
          </AboutA>
        </AboutTitle2>
        <Arrow></Arrow>
      </AboutContent>
    </AboutDiv>
  );
}

export default About;

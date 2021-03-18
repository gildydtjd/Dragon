import React from "react";
import "../main.css";
import styled, { keyframes } from "styled-components";
import About from "./About";

function Main(props) {
  const FadeIn = keyframes`
      from { opacity: 0; }
      to   { opacity: 1; }`;

  const Scroll = styled.div`
    scroll-snap-align: start;
    height: 100vh;
    background-color: ${(props) => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${(props) => props.ur});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    -ms-overflow-style: none;
  `;

  const IntroBox = styled.div`
    width: 40%;
    display: flex;
    color: white;
    font-size: 50px;
    text-align: center;
    justify-content: center;
    animation-name: ${FadeIn};
    animation-duration: ${(props) => props.duration};
    cursor: pointer;
  `;

  const MainH2 = styled.h2`
    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
  `;

  return (
    <div className="scroll-container">
      <Scroll ur="/assets/img/back4.jpg">
        <IntroBox duration="3s">
          <MainH2>Hello DragonWorld</MainH2>
        </IntroBox>
      </Scroll>

      <Scroll>
        <About />
      </Scroll>
      <Scroll></Scroll>
      <Scroll></Scroll>
      <Scroll></Scroll>
    </div>
  );
}

export default Main;

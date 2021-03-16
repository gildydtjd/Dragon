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
    animation-name: ${FadeIn};
    animation-duration: ${(props) => props.duration};
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <div className="scroll-container">
      <Scroll duration="3s">
        <div
          style={{
            width: "100%",
            display: "flex",
            color: "white",
            fontSize: "50px",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <h2>Hello DragonWorld</h2>
        </div>
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

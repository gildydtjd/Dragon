import React from "react";
import styled, { keyframes } from "styled-components";
import "../main.css";
import About from "./About";
import Art from "./project/Art";
import Port from "./project/Port";
import ProjectPage from "./project/ProjectPage";

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

    .intro-box {
      width: 40%;
      display: flex;
      color: white;
      font-size: 50px;
      text-align: center;
      justify-content: center;
      animation-name: ${FadeIn};
      animation-duration: 3s;
      cursor: pointer;
    }

    h2 {
      @media screen and (max-width: 768px) {
        font-size: 50px;
      }
    }
  `;

  return (
    <div className="scroll-container">
      <Scroll ur="/assets/img/back4.jpg">
        <div className="intro-box">
          <h2>Hello DragonWorld</h2>
        </div>
      </Scroll>

      <Scroll>
        <About />
      </Scroll>

      <Scroll>
        <ProjectPage
          projectName="Portfolio"
          back="/assets/img/back10.jpg"
          projectImages={[
            "/assets/img/project-portfolio/port__1.png",
            "/assets/img/project-portfolio/port__2.png",
            "/assets/img/project-portfolio/port__3.png",
          ]}
        >
          <Port />
        </ProjectPage>
      </Scroll>

      <Scroll>
        <ProjectPage
          projectName="Tired Art"
          back="/assets/img/back6.jpg"
          projectImages={[
            "/assets/img/project-portfolio/art__1.png",
            "/assets/img/project-portfolio/art__2.png",
            "/assets/img/project-portfolio/art__3.png",
          ]}
        >
          <Art />
        </ProjectPage>
      </Scroll>
    </div>
  );
}

export default Main;

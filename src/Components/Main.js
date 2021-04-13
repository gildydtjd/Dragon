/* eslint-disable array-callback-return */
import React from "react";
import styled, { keyframes } from "styled-components";
import "../main.css";
import About from "./About";
import Art from "./project/Art";
import Dayoff from "./project/Dayoff";
import Port from "./project/Port";
import ProjectPage from "./project/ProjectPage";

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

function Main(props) {
  function RenderProjectItem({ item, children }) {
    return (
      <Scroll>
        <ProjectPage
          projectName={item.pN}
          back={item.bk}
          projectImages={item.projectImages}
        >
          {children}
        </ProjectPage>
      </Scroll>
    );
  }

  const projectList = [
    {
      cN: "scroll_1",
      pN: "Portfolio",
      bk: "/assets/img/back11.jpg",
      projectImages: [
        "/assets/img/project-portfolio/port__1.png",
        "/assets/img/project-portfolio/port__2.png",
        "/assets/img/project-portfolio/port__3.png",
      ],
    },
    {
      cN: "scroll_2",
      pN: "Tired Art",
      bk: "/assets/img/back6.jpg",
      projectImages: [
        "/assets/img/project-portfolio/art__1.png",
        "/assets/img/project-portfolio/art__2.png",
        "/assets/img/project-portfolio/art__3.png",
      ],
    },
    {
      cN: "scroll_3",
      pN: "DayOff",
      bk: "/assets/img/back12.jpg",
      projectImages: [
        "/assets/img/project-portfolio/dayoff__1.jpg",
        "/assets/img/project-portfolio/dayoff__2.jpg",
      ],
    },
  ];

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

      {projectList.map((item, i) => (
        <RenderProjectItem key={`item-${item.projectName}`} item={item}>
          {i === 0 ? <Port /> : i === 1 ? <Art /> : i === 2 ? <Dayoff /> : null}
        </RenderProjectItem>
      ))}
    </div>
  );
}

export default Main;

import React from "react";
import styled, { keyframes } from "styled-components";

import "../main.css";

import About from "./About";
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

  const ProjectInfoDiv = styled.div`
    .project__title {
    }

    .project_content {
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

      <Scroll>
        <ProjectPage
          projectName="포트폴리오"
          projectImages={[
            "/assets/img/back4.jpg",
            "/assets/img/dragon.jpg",
            "/assets/img/back3.jpg",
          ]}
        >
          <ProjectInfoDiv>
            <p className="project__title">포트폴리오 프로젝트</p>
            <p className="project__contents">
              안녕하세요. 이 프로젝트는 포트폴리오 포트폴리오입니다.
            </p>
            <p className="project__contents">
              media-query를 이용한 반응형 페이지의 적용과 styled-component,
              react Hooks를 사용해보기 위해 만든 프로젝트입니다.
            </p>
            <p className="project__contents">
              이 프로젝트를 진행하면서 느낀점은 styled-component를 사용함으로써
              ~~ 어쩌구어쩌구 장점을 느꼈다
            </p>
          </ProjectInfoDiv>
        </ProjectPage>
      </Scroll>
    </div>
  );
}

export default Main;

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
        font-size: 30px;
      }
    }
  `;

  const ProjectInfoDiv = styled.div`
    .project__title {
      font-size: 18px;
      font-weight: 700;
    }

    .project__contents {
      line-height: 30px;
      font-weight: 600;
      @media screen and (max-width: 768px) {
        font-size: 15px;
      }
    }

    .project__contents__sub {
      line-height: 30px;
      font-weight: 600;

      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    a {
      color: #fff;
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
        {
          // 여기보이냐
        }
      </Scroll>

      <Scroll>
        <ProjectPage
          projectName="Tired Art"
          projectImages={[
            "/assets/img/project-portfolio/art__1.png",
            "/assets/img/project-portfolio/art__2.png",
            "/assets/img/project-portfolio/art__3.png",
          ]}
        >
          <ProjectInfoDiv>
            <p className="project__title">Art gallery Project</p>
            <a href="https://tiredart.netlify.app/">
              https://tiredart.netlify.app/
            </a>
            <a href="https://github.com/gildydtjd/art">
              https://github.com/gildydtjd/art
            </a>
            <p className="project__contents">
              이 프로젝트는 미술작품 관람, 판매 관련 프로젝트입니다.
            </p>
            <p className="project__contents">
              media-query를 이용한 반응형 페이지의 적용과 styled-component,
              react Hooks를 사용해보기 위해 만든 프로젝트입니다.
            </p>
            <p className="project__contents__sub">
              이 프로젝트를 진행하면서 느낀점은 styled-component를 사용함으로써,
              상태에 따라 다른 스타일을 보여주기 편한 방식인 것 같습니다.
            </p>
            <p className="project__contents__sub">
              하지만 styled-component만으로 스타일링을 하려하면 파일이 매우
              길어지는 것 같아 적절한 상황에서 구역을 나누고 사용하면 참 편리할
              것 같다 생각됩니다.
            </p>
          </ProjectInfoDiv>
        </ProjectPage>
      </Scroll>
    </div>
  );
}

export default Main;

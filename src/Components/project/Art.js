import React from "react";
import styled from "styled-components";

function Art(props) {
  const ProjectInfoDiv = styled.div`
    .project__title {
      font-size: 18px;
      font-weight: 700;
    }

    .project__contents {
      line-height: 20px;
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
    <ProjectInfoDiv>
      <p className="project__title">Art gallery Project</p>
      <a href="https://tiredart.netlify.app/">https://tiredart.netlify.app/</a>
      <a href="https://github.com/gildydtjd/art">
        https://github.com/gildydtjd/art
      </a>
      <p className="project__contents">
        이 프로젝트는 미술작품 관람, 판매 관련 프로젝트입니다.
      </p>
      <p className="project__contents">
        media-query를 이용한 반응형 페이지의 적용과 styled-component, react
        Hooks를 사용해보기 위해 만든 프로젝트입니다.
      </p>
      <p className="project__contents__sub">
        이 프로젝트를 진행하면서 느낀점은 styled-component를 사용함으로써,
        상태에 따라 다른 스타일을 보여주기 편한 방식인 것 같습니다.
      </p>
      <p className="project__contents__sub">
        하지만 styled-component만으로 스타일링을 하려하면 파일이 매우 길어지는
        것 같아 적절한 상황에서 구역을 나누고 사용하면 참 편리할 것 같다
        생각됩니다.
      </p>
    </ProjectInfoDiv>
  );
}

export default Art;

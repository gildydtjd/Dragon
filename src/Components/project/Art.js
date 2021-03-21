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
      display: block;
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
        간단하게 component props 로 데이터를 전달 받고, 그 전달 받은 props를
        통해 여러가지 화면으로 보여지게 되고,
      </p>
      <p className="project__contents__sub">
        react hook으로 상태를 관리하며, router를 통해 url에 맞는 페이지로
        이동하는 프로젝트 입니다.
      </p>
      <p className="project__contents__sub">
        이 프로젝트를 만들며 느낀점은 useState를 통해 상태를 저장하고,
        useEffect를 통해 저장된 상태가 바뀔때마다 실행할 함수를 지정하여,
        classComponent의 lifeCycle 보다 데이터 상태관리에 대해 편리함을
        느꼈습니다.
      </p>
    </ProjectInfoDiv>
  );
}

export default Art;

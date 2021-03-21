import React from "react";
import styled from "styled-components";

function Dayoff(props) {
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
      <p className="project__title">Shopping Mall Project</p>
      <a href="https://github.com/gildydtjd/DayOff">
        https://github.com/gildydtjd/art
      </a>
      <p className="project__contents">이 프로젝트는 쇼핑몰 프로젝트입니다.</p>
      <p className="project__contents">
        이 프로젝트는 비트캠프 최종 4인 프로젝트이며, 여기서 제가 맡은 부분은
        전체 UI 와 관리자페이지를 맡았습니다.
      </p>

      <p className="project__contents__sub">
        처음 페이지에 들어올때 권한에 따라 뿌려지는 컨텐츠를 유저, 관리자로
        나누었으며, 그에 따른 기능 또한 부여하였습니다. 이 프로젝트로 인해
        느낀점은 첫 프로젝트여서 정말 보람찼고, 전체적인 구성을 알게되어 보다
        프로그래밍에 재미를 붙이고, 빠져드는 계기가 되었습니다.
      </p>
    </ProjectInfoDiv>
  );
}

export default Dayoff;

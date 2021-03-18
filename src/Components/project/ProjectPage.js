import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  text-align: left;

  .project__img {
    width: 50%;
    padding: 16px;
    background-color: #00000090;
  }

  .project__info {
    width: 50%;
    padding: 16px;
  }

  @media screen and (max-width: 768px) {
  }
`;

function ProjectPage({ projectName, projectImages, children }) {
  return (
    <StyledDiv>
      <div className="project__img">
        {
          // 이미지
          <h2>{projectImages[0]}</h2>
        }
      </div>
      <div className="project__info">
        <h1>{projectName}</h1>
        {
          // child
          children
        }
      </div>
    </StyledDiv>
  );
}

export default ProjectPage;

import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  text-align: left;
  align-items: center;
  background-image: url(/assets/img/back5.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .project__img {
    width: 50%;
    padding: 16px;
    text-align: center;
    height: 500px;
    margin-left: 10%;

    @media screen and (max-width: 768px) {
      height: 450px;
      margin-left: unset;
    }
    img {
      box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
    }

    img:nth-child(1) {
      width: 80%;
      height: 85%;
      margin-top: 20px;
      @media screen and (max-width: 768px) {
        width: 100%;
        height: 140px;
      }
    }

    img:nth-child(2) {
      width: 40%;
      height: 40%;
      display: none;
      @media screen and (max-width: 768px) {
        width: 100%;
        height: 140px;
        display: unset;
      }
    }

    img:nth-child(3) {
      width: 40%;
      height: 40%;
      display: none;

      @media screen and (max-width: 768px) {
        width: 100%;
        height: 140px;
        display: unset;
      }
    }
  }

  .project__info {
    height: 500px;
    width: 50%;
    padding: 16px;
    margin-right: 10%;
    color: #fff;
    @media screen and (max-width: 768px) {
      margin-right: unset;
      height: 450px;
      padding: 16px 0px;
    }
  }
`;

function ProjectPage({ projectName, projectImages, children }) {
  return (
    <StyledDiv>
      <div className="project__img">
        <img alt="" src={projectImages[0]}></img>
        <img alt="" src={projectImages[1]}></img>
        <img alt="" src={projectImages[2]}></img>
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

import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  text-align: left;
  align-items: center;
  background-image: url(/assets/img/back6.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .project__img {
    width: 50%;
    padding: 16px;
    text-align: center;
    height: 500px;
    margin-left: 10%;

    .carousel .slide img {
      height: 350px;
    }
  }

  .project__info {
    height: 500px;
    width: 50%;
    padding: 16px;
    margin-right: 15%;
    color: #fff;
    background-color: #00000090;
  }

  @media screen and (max-width: 768px) {
    display: block;

    .project__img {
      height: 450px;
      margin-left: unset;
      width: 100%;
      padding: 0;
    }

    .project__info {
      margin-right: unset;
      height: 450px;
      padding: 16px;
      width: calc(100% - 32px);
    }
  }
`;

const renderImageItem = (item) => {
  return (
    <div key={`item-${item}`}>
      <img src={item} alt="" />
    </div>
  );
};

function ProjectPage({ projectName, projectImages, children }) {
  return (
    <StyledDiv>
      <div className="project__img">
        <Carousel>
          {projectImages.map((item) => renderImageItem(item))}
        </Carousel>
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

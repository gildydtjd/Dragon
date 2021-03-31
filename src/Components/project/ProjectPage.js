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
  background-image: url(${(back) => back.ur});
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
    height: 470px;
    width: 50%;
    padding: 16px;
    margin-right: 15%;
    color: #fff;
    background-color: #00000090;
  }

  @media screen and (max-width: 768px) {
    display: block;
    .ibHDuN .project__img .carousel .slide img {
      height: 42vh;
    }
    .project__img {
      height: 40vh;
      margin-left: unset;
      width: 100%;
      padding: 0;
    }
    .carousel {
      height: 42vh;
    }

    .project__info {
      margin-right: unset;
      height: 40vh;
      margin-top: 15vh;
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

function ProjectPage({ projectName, projectImages, back, children }) {
  return (
    <StyledDiv ur={back}>
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

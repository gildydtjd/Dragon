import React from "react";
import styled from "styled-components";

function About(props) {
  // const [playState, setPlayState] = useState("running");
  // const [visible, setVisible] = useState("visible");
  // const FadeIn = keyframes`
  // from { opacity: 0; }
  // to   { opacity: 1; }`;

  const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 100vh;

    .contents__left {
      position: relative;
      width: 50%;
      height: calc(100vh - 32px);
      padding: 16px;
      background-image: url(/assets/img/back3.jpg);
    }

    .contents__right {
      width: 50%;
      height: calc(100vh - 32px);
      padding: 16px;
    }

    .contents__img-wrap {
      position: relative;
      width: 320px;
      height: 420px;
      background-color: #fff;
      border: 1px solid #c9c9c9;
      border-radius: 16px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -160px;
      margin-top: -200px;
      box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
      text-align: center;
      .contents__img {
        width: 50%;
        height: 50%;
        border-radius: 36px;
        margin: 16px;
      }

      .contents__name {
        p {
          font-weight: 700;
          margin: 0;
          margin-bottom: 8px;
        }
      }

      .contents__tech {
        span {
          padding: 2px 4px;
          border: 1px solid #eee;
          border-radius: 2px;
          margin-right: 4px;
          display: inline-block;
          margin-bottom: 2px;
        }
      }

      .contents__social {
        position: absolute;
        width: 100%;
        margin-bottom: 8px;
        bottom: 0;

        img {
          width: 32px;
          height: 32px;
          margin: 8px;
          cursor: pointer;
        }
      }
    }

    @media (max-width: 1023px) {
      .contents__left {
        width: 100%;
      }

      .contents__right {
        display: none;
      }
    }
  `;

  const tech = ["React", "JavaScript", "Css", "Html", "styled-component"];
  const social = [
    "/assets/img/github.svg",
    "/assets/img/tistory.svg",
    "/assets/img/instagram.svg",
    "/assets/img/twitter.svg",
  ];

  const renderTechItem = (item) => {
    return (
      <span className="tech__item" key={`tect-${item}`}>
        {item}
      </span>
    );
  };

  return (
    <StyledDiv>
      <div className="contents__left"></div>
      <div className="contents__right"></div>
      <div className="contents__img-wrap">
        <img className="contents__img" src="/assets/img/dragon.jpg" alt="" />
        <div className="contents__name">
          <p>길 용성</p>
          <p>Front-end Developer</p>
        </div>
        <div className="contents__tech">
          {tech.map((item) => renderTechItem(item))}
        </div>
        <div className="contents__social">
          {social.map((item) => (
            <img key={`social-${item}`} src={item} alt="" />
          ))}
        </div>
      </div>
    </StyledDiv>
  );
}

export default About;

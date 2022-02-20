import React from "react";
import "./Style/startPage.css";
// import bg1 from "../assets/images/bg-image.png";
import InfoBlock from "./infoBlock";

type StartPagePropsType = {
  bgImg: string;
  location?: string;
  logoColor: string;
  blockColor: string;
  title: string;
  message: object | string;
};

const StartPage: React.FC<StartPagePropsType> = (props) => {
  const { bgImg, location, logoColor, blockColor, title, message } = props;

  let obj;
  let blockLocation;
  if (location === "right") {
    obj = (
      <div className="header">
        <div className="logo" style={{ color: logoColor, textAlign: "end" }}>
          <h1>SUDAK24</h1>
        </div>
      </div>
    );
    blockLocation = "right";
  } else {
    obj = (
      <div className="header">
        <div className="logo" style={{ color: logoColor, textAlign: "start" }}>
          <h1>SUDAK24</h1>
        </div>
      </div>
    );
    blockLocation = "left";
  }

  return (
    <div className="wrapper">
      <img src={bgImg} alt="" />
      <div className="wrapper-content">
        {obj}
        <InfoBlock
          location={blockLocation}
          blockColor={blockColor}
          title={title}
          message={message}
        />
      </div>
    </div>
  );
};

export default StartPage;

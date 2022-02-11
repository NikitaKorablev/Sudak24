import React from "react";
import "./Style/startPage.css";
import bg1 from "../assets/images/bg-image.png";

type StartPagePropsType = {
  logoLocation?: string;
  logoColor: string;
  block: string;
};

const StartPage: React.FC<StartPagePropsType> = (props) => {
  const { logoLocation, logoColor, block } = props;

  let obj;
  if (logoLocation === "right") {
    obj = (
      <div className="header">
        <div className="logo" style={{ color: logoColor, textAlign: "end" }}>
          <h1>SUDAK24</h1>
        </div>
      </div>
    );
  } else {
    obj = (
      <div className="header">
        <div className="logo" style={{ color: logoColor, textAlign: "start" }}>
          <h1>SUDAK24</h1>
        </div>
      </div>
    );
  }
  // console.log(obj);

  return (
    <div className="wrapper">
      <img src={bg1} alt="" />
      {obj}
    </div>
  );
};

export default StartPage;

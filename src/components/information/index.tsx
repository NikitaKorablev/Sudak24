import React from "react";
import "./Styles/information.css";
import ImgSection from "./imgSection";
import InfoSection from "./infoSection";

type AboutPropsType = {
  infoHeader: string;
  info: string;
  imgSrc: string;
  reverse?: boolean;
};

const About: React.FC<AboutPropsType> = (props) => {
  const { infoHeader, info, imgSrc, reverse } = props;

  if (reverse === false || reverse === undefined) {
    return (
      <div className="info_block">
        <InfoSection headerInfo={infoHeader} info={info} />
        <ImgSection src={imgSrc} />
      </div>
    );
  } else {
    return (
      <div className="info_block">
        <ImgSection src={imgSrc} />
        <InfoSection headerInfo={infoHeader} info={info} />
      </div>
    );
  }
};

export default About;

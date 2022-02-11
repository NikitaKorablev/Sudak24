import React from "react";

type ImgSectionPropsType = {
  src: string;
};

const ImgSection: React.FC<ImgSectionPropsType> = (props) => {
  const { src } = props;

  return (
    <div className="img_section">
      <div className="image">
        <img src={src} alt="" />
      </div>
    </div>
  );
};

export default ImgSection;

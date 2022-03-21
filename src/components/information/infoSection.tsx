import React from "react";

type InfoSectionPropsType = {
  headerInfo: string;
  info: string;
};

const InfoSection: React.FC<InfoSectionPropsType> = (props) => {
  const { headerInfo, info } = props;

  return (
    <div className="info_section">
      <div className="info">
        <span>{headerInfo}</span>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default InfoSection;

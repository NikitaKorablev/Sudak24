import React from "react";
import lines from "../assets/images/lines.svg";
import clickMe from "./download";
import "./Style/btn_section.css";

type DownloadBtnPropsType = {
  name: string;
};

const DownloadBtn: React.FC<DownloadBtnPropsType> = (props) => {
  const { name } = props;

  return (
    <div className="wrapper-button">
      <div className="button">
        <button type="button" onClick={() => clickMe(name)}>
          <h3>ПРАЙС-ЛИСТ</h3>
          <p>Экскурсии по Крыму</p>
          <p>Загрузить</p>
        </button>
      </div>
      <div className="lines">
        <img src={lines} alt="" className="svg-lines" id="svg-lines" />
      </div>
    </div>
  );
};

export default DownloadBtn;

import React from "react";
import lines from "../assets/images/lines.svg";
import clickMe from "./download";
import "./Style/btn_section.css";

type DownloadBtnPropsType = {
  title: string;
  name: string;
};

const DownloadBtn: React.FC<DownloadBtnPropsType> = (props) => {
  const { title, name } = props; // name - имя файла для скачивания

  return (
    <div className="wrapper-button">
      <div className="button-whall">
        <div className="button">
          <button type="button" onClick={() => clickMe(name)}>
            <h3>ПРАЙС-ЛИСТ</h3>
            <p>{title}</p>
            <p>Загрузить</p>
          </button>
        </div>
        <div className="lines">
          <img src={lines} alt="" className="svg-lines" id="svg-lines" />
        </div>
      </div>
    </div>
  );
};

export default DownloadBtn;

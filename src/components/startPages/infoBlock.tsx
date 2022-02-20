import React from "react";
import parse from "html-react-parser";

const blue = {
  color1: "rgb(7, 5, 35)",
  color2: "rgb(16, 21, 67)",
  color3: "rgb(50, 61, 118)",
};
const green = {
  color1: "rgb(24, 36, 33)",
  color2: "rgb(40, 66, 57)",
  color3: "rgb(55, 84, 70)",
};

const list = (message: any) => {
  const ul = document.createElement("ul");

  message.forEach((m: string | null) => {
    const li = document.createElement("li");
    li.textContent = m;
    ul.appendChild(li);
  });

  const d = document.createElement("div");
  d.appendChild(ul);

  return parse(d.innerHTML);
};

const letter = (message: string) => {
  const pBlock = document.createElement("div");
  const p = document.createElement("p");

  pBlock.className = "p_block";
  p.textContent = message;
  pBlock.appendChild(p);

  const div = document.createElement("div");
  div.appendChild(pBlock);
  return parse(div.innerHTML);
};

type InfoBlockPropsType = {
  location: string;
  blockColor: string;
  title: string;
  message: object | string;
};

const InfoBlock: React.FC<InfoBlockPropsType> = (props) => {
  const { location, blockColor, title, message } = props;

  let color1: string;
  let color2: string;
  let color3: string;
  if (blockColor === "blue") {
    color1 = blue.color1;
    color2 = blue.color2;
    color3 = blue.color3;
  } else {
    color1 = green.color1;
    color2 = green.color2;
    color3 = green.color3;
  }

  let mess;
  if (typeof message === "object") {
    mess = list(message);
  } else {
    mess = letter(message);
  }

  let styleWidth;
  if (location === "left") {
    styleWidth = {
      marginTop: "50px",
      marginLeft: "170px",
      marginRight: "auto",
      backgroundColor: color1,
      boxShadow: `-4px -5px ${color2}, -8px -10px ${color3}`,
    };
  } else if (location === "right") {
    styleWidth = {
      marginTop: "50px",
      marginLeft: "auto",
      marginRight: "170px",
      backgroundColor: color1,
      boxShadow: `4px 5px ${color2}, 8px 10px ${color3}`,
    };
  }

  return (
    <div className="sidebar" style={styleWidth}>
      <div className="sidebar-insides">
        <h3>{title}</h3>
        <div className="sidebar-line" style={{ backgroundColor: "white" }} />
        <div className="info">{mess}</div>
      </div>
    </div>
  );
};

export default InfoBlock;

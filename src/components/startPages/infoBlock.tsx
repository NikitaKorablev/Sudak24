import React from "react";
import parse from "html-react-parser";
// import Margin from "./index.js";

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
  const div = document.createElement("div");
  const p = document.createElement("p");

  div.className = "p_block";
  p.textContent = message;
  div.appendChild(p);

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

  // type CSSProps = {
  //   marginTop: "calc(5px + 45 * (100vw / 1920))";
  //   marginLeft: "calc(2px + 168 * (100vw / 1920))" | "auto";
  //   marginRight: "calc(5px + 165 * (100vw / 1920))" | "auto";
  //   backgroundColor: any;
  //   boxShadow: any;
  // };

  // const test: CSSProps = {
  //   marginTop: "calc(5px + 45 * (100vw / 1920))",
  //   marginLeft: "calc(2px + 168 * (100vw / 1920))",
  //   marginRight: "auto !important" as any,
  //   backgroundColor: color1,
  //   boxShadow: `-4px -5px ${color2}, -8px -10px ${color3}`,
  // };

  // const ref = useRef(null);

  // useLayoutEffect(() => {
  //   ref.style.setProperty("margin-right", "auto", "important");
  // }, []);

  let styleWidth;
  let ref;
  let h3;
  let h3Imp;
  let p;
  if (location === "left") {
    styleWidth = {
      marginTop: "calc(5px + 45 * (100vw / 1920))",
      marginLeft: "calc(2px + 168 * (100vw / 1920))",
      // marginRight: "auto",
      backgroundColor: color1,
      boxShadow: `-4px -5px ${color2}, -8px -10px ${color3}`,
    };
    h3 = {
      textAlign: "center" as const,
    };
    // h3Imp = {};
    ref = (el: any) => {
      el.style.setProperty("margin-right", "auto", "important");
    };
  } else if (location === "right") {
    styleWidth = {
      width: "30%",
      marginTop: "calc(5px + 135 * (100vw / 1920))",
      // marginLeft: "auto",
      marginRight: "calc(5px + 165 * (100vw / 1920))",
      backgroundColor: color1,
      boxShadow: `4px 5px ${color2}, 8px 10px ${color3}`,
    };
    h3 = {
      textAlign: "center" as const,
    };
    h3Imp = (el: any) => {
      el.style.setProperty(
        "font-size",
        "calc(-8px + 43 * (100vw / 1920))",
        "important"
      );
      el.style.setProperty("padding-bottom", "0", "important");
    };
    ref = (el: any) => {
      el && el.style.setProperty("margin-left", "auto", "important");
    };
  }

  return (
    <div id="block" className="sidebar" ref={ref} style={styleWidth}>
      <div className="sidebar-insides">
        <h3 ref={h3Imp} style={h3}>
          {title}
        </h3>
        <div className="sidebar-line" style={{ backgroundColor: "white" }} />
        <div className="info">{mess}</div>
      </div>
    </div>
  );
};

export default InfoBlock;

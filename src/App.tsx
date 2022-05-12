// import Gallery from "./components/gallery/gallery";
import fs from "fs";
// import fs-react from "fs-react";
import About from "./components/information/index";
import miniHouse from "./components/assets/images/house.webp";
import StartPage from "./components/startPages/startPage";
import DownloadBtn from "./components/downloadBtn/downloadBtn";
import Gallery from "./components/gallery/gallery";
import bg1 from "./components/assets/images/bg-image1.webp";
import bg3 from "./components/assets/images/bg-image3.webp";
import bg4 from "./components/assets/images/bg-image4.webp";

const arr: any[] = []; // Экскурсии || Продажа недвижимости || Сдача жилья || Строитеьство
//-----------------------------------------------------
const names = ["Экскурсии", "Продажа недвижимости", "Жильё", "Строительство"];
const len = [7, 0, 7, 4];
//-----------------------------------------------------

const adress = (adr: string) => {
  for (let i = 0; i < 4; i++) {
    arr[i] = [];
    if (len[i] !== 0) {
      for (let j = 0; j < len[i]; j++) {
        arr[i][j] = require(`${adr + names[i]}/${j}.webp`);
      }
    } else {
      arr[i] = undefined;
    }
  }
  return arr;
};

const App = () => {
  const adr = adress("./components/assets/images/");

  const aboutText: string =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
  Nisi illum ex ad nemo rerum at, inventore numquam pariatur optio odit quidem labore aspernatur.\
  Dolorum veritatis quas odio, recusandae vero explicabo. \
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
  Nisi illum ex ad nemo rerum at, inventore numquam pariatur optio odit quidem labore aspernatur.\
  Dolorum veritatis quas odio, recusandae vero explicabo.";

  const mess1 = [
    "Морские прогулки",
    "Автобусные туры",
    "Экстрим",
    "Дегустации",
  ];
  const mess2 =
    "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum \
      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum \
      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";

  return (
    <div className="content">
      <StartPage
        bgImg={bg1}
        location="left"
        logoColor="white"
        blockColor="blue"
        title="Экскурсии по крыму"
        message={mess1}
      />
      <Gallery images={adr[0]} />
      <DownloadBtn title="Экскурсии по Крыму" name="Прайс_экскурсии" />
      <StartPage
        bgImg={bg1}
        location="right"
        logoColor="white"
        blockColor="blue"
        title="Аренда недвижимости"
        message={mess2}
      />
      <Gallery images={adr[1]} />
      <DownloadBtn title="Аренда недвижимости" name="Прайс_продажа_покупка" />
      <StartPage
        bgImg={bg3}
        location="right"
        logoColor="white"
        blockColor="green"
        title="Сдача жилья"
        message={mess2}
      />
      <Gallery images={adr[2]} />
      <DownloadBtn title="Сдача жилья" name="Прайс_сдача" />
      <StartPage
        bgImg={bg4}
        location="right"
        logoColor="white"
        blockColor="blue"
        title="Строительство домов"
        message={mess2}
      />
      <Gallery images={adr[3]} />
      <DownloadBtn title="Строительство домов" name="Прайс_строительство" />
      <About infoHeader="Кто мы?" info={aboutText} imgSrc={miniHouse} />
    </div>
  );
};

export default App;

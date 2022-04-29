// import Gallery from "./components/gallery/gallery";
import fs from "fs";
// import fs-react from "fs-react";
import About from "./components/information/index";
import miniHouse from "./components/assets/images/house.png";
import StartPage from "./components/startPages/startPage";
import DownloadBtn from "./components/downloadBtn/downloadBtn";
import Gallery from "./components/gallery/gallery";
import bg1 from "./components/assets/images/bg-image1.png";
import bg2 from "./components/assets/images/bg-image2.png";

const arr: any[] = []; // Экскурсии || Аренда || Сдача жилья || Строитеьство
const names = ["Жильё", "Строительство", "", ""];
const len = [3, 5, 0, 0];

const adress = (adr: string) => {
  for (let i = 0; i < 4; i++) {
    arr[i] = [];
    for (let j = 0; j < len[i]; j++) {
      arr[i][j] = require(`${adr + names[i]}/${j}.jpg`);
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
      <Gallery />
      <DownloadBtn title="Экскурсии по Крыму" name="Прайс_экскурсии" />
      <StartPage
        bgImg={bg2}
        location="right"
        logoColor="white"
        blockColor="green"
        title="Аренда недвижимости"
        message={mess2}
      />
      <Gallery />
      <DownloadBtn title="Аренда недвижимости" name="Прайс_продажа_покупка" />
      <StartPage
        bgImg={bg1}
        location="left"
        logoColor="white"
        blockColor="blue"
        title="Сдача жилья"
        message={mess1}
      />
      <Gallery images={adr[0]} />
      <DownloadBtn title="Сдача жилья" name="Прайс_сдача" />
      <StartPage
        bgImg={bg1}
        location="left"
        logoColor="white"
        blockColor="blue"
        title="Строительство домов"
        message={mess1}
      />
      <Gallery images={adr[1]} />
      <DownloadBtn title="Строительство домов" name="Прайс_строительство" />
      <About infoHeader="Кто мы?" info={aboutText} imgSrc={miniHouse} />
    </div>
  );
};

export default App;

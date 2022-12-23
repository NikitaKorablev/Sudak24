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
const names = [
  "Экскурсии по Крыму",
  "Продажа недвижимости",
  "Сдача жилья",
  "Строительство домов",
];
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

  const aboutText =
    "Мы ваш личный помощник в таких направлениях как экскурсии в любом направлении и на самом различном транспорте 😉. \
    \n Поможем вам выбрать и снять подходящее для вас жильё, с лучшими видами. \
    Если вы ищите квартиру своей мечты, мы поможем вам и с этим! \
    Так же построим Каркасно-Щитовой дом по вашему проекту.";

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
        title={names[0]}
        message={mess1}
      />
      <Gallery images={adr[0]} />
      <DownloadBtn title={names[0]} name="Прайс_экскурсии" />
      <StartPage
        bgImg={bg1}
        location="right"
        logoColor="white"
        blockColor="blue"
        title={names[1]}
        message={mess2}
      />
      <Gallery images={adr[1]} />
      <DownloadBtn title={names[1]} name="Прайс_продажа_покупка" />
      <StartPage
        bgImg={bg3}
        location="right"
        logoColor="white"
        blockColor="green"
        title={names[2]}
        message={mess2}
      />
      <Gallery images={adr[2]} />
      <DownloadBtn title={names[2]} name="Прайс_сдача" />
      <StartPage
        bgImg={bg4}
        location="right"
        logoColor="white"
        blockColor="blue"
        title={names[3]}
        message={mess2}
      />
      <Gallery images={adr[3]} />
      <DownloadBtn title={names[3]} name="Прайс_строительство" />
      <About infoHeader="Кто мы?" info={aboutText} imgSrc={miniHouse} />
    </div>
  );
};

export default App;

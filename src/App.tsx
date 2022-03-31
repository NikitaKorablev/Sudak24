// import Gallery from "./components/gallery/gallery";
import About from "./components/information/index";
import miniHouse from "./components/assets/images/house.png";
import StartPage from "./components/startPages/startPage";
import DownloadBtn from "./components/downloadBtn/downloadBtn";
import Gallery from "./components/gallery/gallery";
import bg1 from "./components/assets/images/bg-image1.png";
import bg2 from "./components/assets/images/bg-image2.png";

const aboutText: string =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
Nisi illum ex ad nemo rerum at, inventore numquam pariatur optio odit quidem labore aspernatur.\
Dolorum veritatis quas odio, recusandae vero explicabo. \
Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
Nisi illum ex ad nemo rerum at, inventore numquam pariatur optio odit quidem labore aspernatur.\
Dolorum veritatis quas odio, recusandae vero explicabo.";

const mess1 = ["Морские прогулки", "Автобусные туры", "Экстрим", "Дегустации"];
const mess2 = "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";

const App = () => {
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
      <DownloadBtn title="Экскурсии по Крыму" name="1" />
      {/* <StartPage
        bgImg={bg2}
        location="right"
        logoColor="white"
        blockColor="green"
        title="Аренда недвижимости"
        message={mess2}
      /> */}
      {/* <Gallery /> */}
      {/* <DownloadBtn title="Аренда недвижимости" name="2" /> */}
      <About infoHeader="Кто мы?" info={aboutText} imgSrc={miniHouse} />
    </div>
  );
};

export default App;

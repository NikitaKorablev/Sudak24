// import Gallery from "./components/gallery/gallery";
import About from "./components/information/index";
import miniHouse from "./components/assets/images/house.png";
import StartPage from "./components/startPages/startPage";
import DownloadBtn from "./components/downloadBtn/downloadBtn";

const aboutText =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
Nisi illum ex ad nemo rerum at, inventore numquam pariatur optio odit quidem labore aspernatur.\
Dolorum veritatis quas odio, recusandae vero explicabo. \
Lorem ipsum, dolor sit amet consectetur adipisicing elit. \
Nisi illum ex ad nemo rerum at, inventore numquam pariatur optio odit quidem labore aspernatur.\
Dolorum veritatis quas odio, recusandae vero explicabo.";

const App = () => {
  return (
    <div>
      <StartPage logoLocation="left" logoColor="white" block="" />
      <About infoHeader="Кто мы?" info={aboutText} imgSrc={miniHouse} />
      {/* <Gallery /> */}
      <DownloadBtn name="1" />
    </div>
  );
};

export default App;

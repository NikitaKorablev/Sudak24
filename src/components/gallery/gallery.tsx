import React from "react";
import { Carousel } from "react-bootstrap";
import parse from "html-react-parser";
import image1 from "../assets/images/test.jpg";
import image2 from "../assets/images/test2.jpg";
import "./Styles/gallery.css";
// import Img from "./g_img";

// const srcImages = (images: any) => {
//   const div = React.createElement("div");

//   images.forEach((val: string) => {
//     const img = React.createElement("img", {
//       className: "d-block w-100",
//       src: val,
//     });
//     const image = <Img image={img} />;
//     // image.append();
//     console.log(image);
//     // div.appendChild(image);
//   });
// };

// type GalleryPropsType = {
//   images?: object;
// };

const Gallery = () => {
  // const { images } = props;

  // console.log(images);

  // const test = srcImages(images);
  // console.log(test);

  return (
    <div className="gallery_wrap">
      <div className="gallery">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={image1} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;

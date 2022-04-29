import React from "react";
import { Carousel } from "react-bootstrap";
import "./Styles/gallery.css";

type GalleryPropsType = {
  images?: Array<string>;
};

const Gallery: React.FC<GalleryPropsType> = (props) => {
  const { images } = props;

  console.log(images);

  let img;
  if (images === undefined) {
    img = [require("../assets/images/nonImage.jpg")];
  } else {
    img = images;
  }

  return (
    <div className="gallery_wrap">
      <div className="whall">
        <div className="gallery">
          <Carousel>
            {img.map((image: any) => (
              <Carousel.Item key={image}>
                <img src={`${image}`} className="d-block w-100" alt="" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

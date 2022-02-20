import React from "react";
import { Carousel } from "react-bootstrap";

type ImgPropsType = {
  image: object;
};

const Img: React.FC<ImgPropsType> = (props) => {
  const { image } = props;

  return (
    <Carousel.Item interval={5000}>
      {image}
      {/* <img className="d-block w-100" src={ref} alt="First slide" /> */}
    </Carousel.Item>
  );
};

export default Img;

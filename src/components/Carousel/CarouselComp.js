import React from "react";

import carousel1 from "../../assets/img/carousel-1.jpg";
import carousel2 from "../../assets/img/carousel-2.jpg";

import { Carousel } from "react-bootstrap";

function CarouselComp() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 " src={carousel2} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;

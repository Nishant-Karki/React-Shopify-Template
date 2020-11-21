import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FcPrevious, FcNext } from "react-icons/fc";

import first from "../../assets/img/orange-jacket.jpg";

import "./sliderComp.scss";

function PrevArrow(props) {
  return (
    <FcPrevious
      {...props}
      style={{
        ...props.style,
        position: "absolute",
        margin: "-3rem 0rem 1rem 0",
      }}
    />
  );
}

function NextArrow(props) {
  return (
    <FcNext
      {...props}
      style={{
        ...props.style,
        position: "absolute",
        margin: "-3rem 0rem 1rem 0",
      }}
    />
  );
}

const Images = (props) => {
  return (
    <div style={{ height: 280, backgroundColor: "black" }}>
      <img src={first} alt="product-carousel" width="100%" />
    </div>
  );
};

// const ProductContent = () => {
//   return (

//   );
// };

function SliderComp() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div style={{ padding: 28 }}>
      <Slider {...settings}>
        <Images></Images>
        <Images></Images>
        <Images></Images>
        <Images></Images>
        <Images></Images>
        <Images></Images>
        <Images></Images>
        <Images></Images>
      </Slider>
    </div>
  );
}

export default SliderComp;

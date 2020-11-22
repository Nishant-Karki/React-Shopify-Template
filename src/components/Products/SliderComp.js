import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FcPrevious, FcNext } from "react-icons/fc";
import { BsStar } from "react-icons/bs";

import first from "../../assets/img/orange-jacket.jpg";
import second from "../../assets/img/purple-helmet.jpg";
import third from "../../assets/img/light-green-helmet.jpg";
import fourth from "../../assets/img/burton boa.jpg";
import fifth from "../../assets/img/selrus binding.jpg";
import sixth from "../../assets/img/asylum pant.jpg";

import "./sliderComp.scss";
import { Typography } from "@material-ui/core";

function PrevArrow({ currentSlide, slideCount, ...props }) {
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

function NextArrow({ currentSlide, slideCount, ...props }) {
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

const Images = ({ src, children }) => {
  return (
    <div className="product-image" style={{ minHeight: 255 }}>
      <img src={src} alt="product-carousel" width="100%" />
      <div className="product-hover">
        <div>
          <div>
            <Typography variant="overline">ANALOG</Typography>
            <Typography variant="subtitle2">
              <BsStar />
              <BsStar />
              <BsStar />
              <BsStar />
              <BsStar />
            </Typography>
            <Typography variant="subtitle1">AK 2L GORE</Typography>
            <Typography>$190.00</Typography>
          </div>
          <div className="mini-image-outer-container">{children}</div>
          <div className="button-container">
            <div className="add-btn">ADD TO CART</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MiniImages = ({ src }) => {
  return (
    <div className="mini-image-inner-container">
      <img src={src} alt="product" width="100%" style={{ margin: "0px" }} />
    </div>
  );
};

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
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div style={{ paddingLeft: 28, paddingRight: 28 }}>
      <Slider {...settings}>
        <Images src={first}>
          <MiniImages src={first} />
          <MiniImages src={first} />
        </Images>
        <Images src={second}>
          <MiniImages src={second} />
          <MiniImages src={second} />
        </Images>
        <Images src={third}>
          <MiniImages src={third} />
          <MiniImages src={third} />
        </Images>
        <Images src={fourth}>
          <MiniImages src={fourth} />
          <MiniImages src={fourth} />
        </Images>
        <Images src={fifth}>
          <MiniImages src={fifth} />
          <MiniImages src={fifth} />
        </Images>
        <Images src={sixth}>
          <MiniImages src={sixth} />
          <MiniImages src={sixth} />
        </Images>
        <Images src={third}>
          <MiniImages src={third} />
          <MiniImages src={third} />
        </Images>
        <Images src={fifth}>
          <MiniImages src={fifth} />
          <MiniImages src={fifth} />
        </Images>
      </Slider>
    </div>
  );
}

export default SliderComp;

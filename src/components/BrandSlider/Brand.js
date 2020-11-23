import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Typography } from "@material-ui/core";

import { FcPrevious, FcNext } from "react-icons/fc";
import "./brand.scss";

import first from "../../assets/img/brand-1.png";
import second from "../../assets/img/brand-2.png";
import third from "../../assets/img/brand-3.png";
import fourth from "../../assets/img/brand-4.png";
import fifth from "../../assets/img/brand-5.png";
import sixth from "../../assets/img/brand-6.png";

const BrandImage = ({ src }) => {
  return (
    <div style={{ width: 120 }} className="brand-img">
      <img src={src} alt="brand-logo" width="100%" />
    </div>
  );
};

function PrevArrow({ currentSlide, slideCount, ...props }) {
  return (
    <FcPrevious
      {...props}
      style={{
        ...props.style,
        position: "absolute",
        margin: "0rem 0rem 1rem -1rem",
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
        margin: "0rem 0rem 1rem 0",
      }}
    />
  );
}
function Brand() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 856,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container
      style={{ paddingLeft: "14%", paddingRight: "13%", marginTop: "2.5rem" }}
    >
      <Slider {...settings}>
        <BrandImage src={first} />
        <BrandImage src={second} />
        <BrandImage src={third} />
        <BrandImage src={fourth} />
        <BrandImage src={fifth} />
        <BrandImage src={sixth} />
        <BrandImage src={second} />
        <BrandImage src={fifth} />
        <BrandImage src={first} />
        <BrandImage src={sixth} />
      </Slider>
      <div className="instagram-follow">
        <Typography variant="h5">@FOLLOW US ON</Typography>
        <Typography variant="subtitle1">Instagram</Typography>
      </div>
    </Container>
  );
}

export default Brand;

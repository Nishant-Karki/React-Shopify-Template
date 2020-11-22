import React from "react";
import { Parallax } from "react-parallax";
import "./para.scss";

import image from "../../assets/img/parallax-img.jpg";

function ParallaxComp() {
  return (
    <>
      <div style={{ width: "100%" }} className="d-flex d-lg-none">
        <img src={image} alt="parallax" width="100%" height="" />
      </div>
      <Parallax
        className="d-none d-lg-flex"
        bgImage={image}
        bgImageStyle={{ height: 880, width: "100%" }}
        strength={500}
      >
        <div style={{ height: 670, width: 100 }}></div>
      </Parallax>
    </>
  );
}

export default ParallaxComp;

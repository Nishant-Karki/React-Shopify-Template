import React from "react";
import { Parallax } from "react-parallax";

import image from "../../assets/img/parallax-img.jpg";
import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  textContainer: {
    height: 670,
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  btn: {
    marginTop: "2rem",
    backgroundColor: "#b004e2",
    width: "12rem",
    height: "3rem",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#b004e2",
    },
  },
});

function ParallaxComp() {
  const classes = useStyles();
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
        <div className={classes.textContainer}>
          <Typography variant="h5" style={{ color: "#08da97" }}>
            WOMEN'S <br />
            <Typography
              variant="h2"
              style={{ color: "white", marginTop: "1rem" }}
            >
              SALES <br /> 70% OFF
            </Typography>
            <Button className={classes.btn}>SHOP NOW!</Button>
          </Typography>
        </div>
      </Parallax>
    </>
  );
}

export default ParallaxComp;

import React from "react";

import carousel1 from "../../assets/img/carousel-1.jpg";
import carousel2 from "../../assets/img/carousel-2.jpg";

import { Carousel } from "react-bootstrap";
import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  btn1: {
    marginTop: "0.2rem",
    width: "12rem",
    height: "3rem",
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#08da97",
    "&:hover": {
      backgroundColor: "#08da97",
    },
  },

  btn2: {
    backgroundColor: "#b004e2",
    marginTop: "2rem",
    width: "12rem",
    height: "3rem",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#b004e2",
    },
  },
});

function CarouselComp() {
  const classes = useStyles();
  return (
    <Carousel style={{ maxHeight: "100vh" }} fade={true}>
      <Carousel.Item>
        <img
          className="d-block"
          style={{ marginLeft: "-15%", width: "120%" }}
          src={carousel1}
          alt="First slide"
        />
        <Carousel.Caption
          style={{
            marginBottom: "10%",
            marginRight: "35%",
            float: "left",
          }}
        >
          <Typography variant="h5">
            LIFE IS GOOD...
            <br />
          </Typography>
          <Typography variant="h2">
            STAY COOL
            <br />
            AND PROTECTED
            <Typography>
              Order your custom wintersports appreal today.
            </Typography>
            <Button className={classes.btn1}>SHOP NOW!</Button>
          </Typography>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={carousel2}
          style={{ marginLeft: "-15%", width: "120%" }}
          alt="Third slide"
        />
        <Carousel.Caption
          style={{
            marginBottom: "15%",
          }}
        >
          <Typography variant="h5">
            LET'S BE PREPARED FOR <br />
          </Typography>
          <Typography variant="h2">
            A NEW WINTER
            <br />
            SEASON
            <br />
            <Typography>
              No matter where you are no what you need, check our catelog.
            </Typography>
            <Button className={classes.btn2}>SHOP NOW!</Button>
          </Typography>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;

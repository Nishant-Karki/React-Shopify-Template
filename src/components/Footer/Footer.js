import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";

const useStyles = makeStyles({
  footerIcons: {
    marginRight: "1rem",
    color: "white",
    fontSize: "14px",
  },
  listStyle: { listStyle: "none", paddingLeft: "0", fontSize: "14px" },
});

function Footer() {
  const classes = useStyles();
  return (
    <>
      <Container
        className="d-none d-md-flex "
        style={{
          backgroundColor: "purple",
          height: "2.6rem",
          alignItems: "center",
          paddingLeft: "7rem",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={1}>
          <Grid md={3} className="text-white">
            BE IN TOUCH WITH US
          </Grid>
          <Grid md={4}>
            {" "}
            <div className="input-group  ">
              <input
                style={{ height: "1.5rem", fontSize: "10px" }}
                type="text"
                className="form-control"
                placeholder="Input group example"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
              />
              <div className="input-group-prepend">
                <div
                  className=" input-group-text"
                  style={{ height: "1.5rem", fontSize: "10px" }}
                  id="btnGroupAddon"
                >
                  JOIN US
                </div>
              </div>
            </div>
          </Grid>
          <Grid md={4} className="ml-auto ">
            <FaFacebookF
              className={classes.footerIcons}
              style={{
                marginLeft: "5rem",
                marginRight: "1rem",
                color: "white",
              }}
            />
            <FiTwitter className={classes.footerIcons} />
            <AiOutlineInstagram className={classes.footerIcons} />
            <GrPinterest className={classes.footerIcons} />
          </Grid>
        </Grid>
      </Container>
      <Container
        style={{
          backgroundColor: "grey",
          height: "16rem",
          paddingLeft: "7rem",
          paddingTop: "1.6rem",
        }}
      >
        <Grid container>
          <Grid xs={12} sm={6} md={3}>
            CATEGORIES
            <ul className={classes.listStyle}>
              <li>Women</li>
              <li>Men</li>
              <li>Accessories</li>
              <li>New Arrivals</li>
            </ul>
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            BUY WITH US
            <ul className={classes.listStyle}>
              <li>Women</li>
              <li>Men</li>
              <li>Accessories</li>
              <li>New Arrivals</li>
            </ul>
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            ABOUT
            <ul className={classes.listStyle}>
              <li>Women</li>
              <li>Men</li>
              <li>Accessories</li>
              <li>New Arrivals</li>
            </ul>
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            CONTACT US
            <ul className={classes.listStyle}>
              <li>Women</li>
              <li>Men</li>
              <li>Accessories</li>
              <li>New Arrivals</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Footer;

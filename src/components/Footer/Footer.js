import { Container, Grid } from "@material-ui/core";
import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import "./footer.scss";

function Footer() {
  return (
    <>
      <div className="d-none d-md-flex joinus-container ">
        <Grid container>
          <Grid md={4} className="text-white" style={{ paddingLeft: "16%" }}>
            BE IN TOUCH WITH US
          </Grid>
          <Grid md={4} style={{ paddingLeft: "2rem" }}>
            {" "}
            <div className="input-group  ">
              <input
                type="text"
                className="form-control join-us"
                placeholder="Email Id"
              />
              <div className="input-group-prepend">
                <div className=" input-group-text join-us" id="btnGroupAddon">
                  JOIN US
                </div>
              </div>
            </div>
          </Grid>
          <Grid md={3}>
            <FaFacebookF className="footer-icons fb" />
            <FiTwitter className="footer-icons" />
            <AiOutlineInstagram className="footer-icons" />
            <GrPinterest className="footer-icons" />
          </Grid>
        </Grid>
      </div>
      <div className="category-container">
        <Grid container className="first-grid">
          <Grid xs={12} sm={6} md={2}>
            CATEGORIES
            <ul className="listStyle">
              <li>Women</li>
              <li>Men</li>
              <li>Accessories</li>
              <li>New Arrivals</li>
            </ul>
          </Grid>
          <Grid xs={12} sm={6} md={2}>
            BUY WITH US
            <ul className="listStyle">
              <li>Women</li>
              <li>Men</li>
              <li>Accessories</li>
              <li>New Arrivals</li>
            </ul>
          </Grid>
          <Grid xs={12} sm={6} md={2}>
            ABOUT
            <ul className="listStyle">
              <li>Women</li>
              <li>Men</li>
              <li>Accessories</li>
              <li>New Arrivals</li>
            </ul>
          </Grid>
          <Grid xs={12} sm={6} md={2}>
            CONTACT US
            <ul className="listStyle">
              <li>Women</li>
              <li>Men</li>
              <li>Accessories</li>
              <li>New Arrivals</li>
            </ul>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Footer;

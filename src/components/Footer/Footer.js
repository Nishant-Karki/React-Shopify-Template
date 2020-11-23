import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";

import logo from "../../assets/img/logo.png";

import first from "../../assets/img/aes.png";
import second from "../../assets/img/discover.png";
import third from "../../assets/img/mastercard.png";
import fourth from "../../assets/img/paypal.png";
import fifth from "../../assets/img/stripe.png";

import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import "./footer.scss";

function Footer() {
  return (
    <>
      <div className="d-none d-md-flex joinus-container ">
        <Container>
          <Grid container>
            <Grid item md={4} className="text-white">
              <Typography variant="subtitle1">BE IN TOUCH WITH US</Typography>
            </Grid>
            <Grid item md={4}>
              {" "}
              <div className="input-group">
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
            <Grid item md={4} className="footer-icons-container">
              <FaFacebookF className="footer-icons fb" />
              <FiTwitter className="footer-icons" />
              <AiOutlineInstagram className="footer-icons" />
              <GrPinterest className="footer-icons" />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="category-container">
        <Container>
          <Grid container className="first-grid">
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle2" className="cat-cont-text">
                CATEGORIES
              </Typography>
              <ul className="listStyle">
                <li>Women</li>
                <li>Men</li>
                <li>Accessories</li>
                <li>New Arrivals</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle2" className="cat-cont-text">
                BUY WITH US
              </Typography>
              <ul className="listStyle">
                <li>About us</li>
                <li>Services</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle2" className="cat-cont-text">
                ABOUT
              </Typography>
              <ul className="listStyle">
                <li>
                  ercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat tempor
                  incididunt.
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle2" className="cat-cont-text">
                CONTACT US
              </Typography>
              <ul className="listStyle">
                <li>
                  ADDRESS: 7895 Piermont Dr NE Albuquerque, NM 198866, United
                  States of America
                </li>
                <li>PHONE: +566 4774 9930; +566 4774 9940</li>
                <li>HOURS: all week from 9 am to 9 pm</li>
                <li>E-MAIL: info@mydomain.com</li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container>
        <div style={{}}>
          <div>
            <img src={logo} alt="logo" width="100" />
            <Typography
              variant="outlined"
              style={{ marginTop: "0.5rem", marginLeft: "0.5rem" }}
            >
              &copy; Wokiee 2019. All Rights Reserved.
            </Typography>
            <div style={{ float: "right" }}>
              <img src={first} alt="payment" style={{ paddingRight: "1rem" }} />
              <img
                src={second}
                alt="payment"
                style={{ paddingRight: "1rem" }}
              />
              <img src={third} alt="payment" style={{ paddingRight: "1rem" }} />
              <img
                src={fourth}
                alt="payment"
                style={{ paddingRight: "1rem" }}
              />
              <img src={fifth} alt="payment" style={{ paddingRight: "1rem" }} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Footer;

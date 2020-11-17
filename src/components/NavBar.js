import { AppBar, Container, Paper } from "@material-ui/core";
import React from "react";
import logo from "../assets/logo.png";
import "./navbar.css";

import { Link } from "react-router-dom";

import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BiSlider } from "react-icons/bi";
import { CgMenu } from "react-icons/cg";

function NavBar() {
  return (
    <>
      <AppBar
        className="p-2 navbar-expand-lg"
        position="sticky"
        color="inherit"
      >
        <Container className="d-flex justify-content-between pr-2">
          <button className="navbar-toggler">
            <CgMenu />
          </button>
          <div class="collapse navbar-collapse">
            <ul className="nav ">
              <Link to="/">
                <img src={logo} alt="Logo" width="100" height="20" />
              </Link>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  SHOP
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  PAGES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  BLOG
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  SNOWBOARDS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  BUY THEME
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <BsSearch size={20} />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <HiOutlineShoppingBag size={20} />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <AiOutlineUser size={20} />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <BiSlider size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </AppBar>
      <Paper
        className="d-lg-none "
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          minHeight: "3.4rem",
        }}
      >
        <Link to="/">
          <img src={logo} alt="Logo" width="100" height="20" className="mt-0" />
        </Link>
      </Paper>
    </>
  );
}

export default NavBar;

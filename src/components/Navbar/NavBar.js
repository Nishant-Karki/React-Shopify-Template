import React, { useState } from "react";

import "./navbar.scss";
import NavDrawer from "./NavDrawer";
import logo from "../../assets/img/logo.png";

import { AppBar, Container, Drawer } from "@material-ui/core";
import { Link } from "react-router-dom";

import { CgMenu } from "react-icons/cg";
import { NavItems, NavIcons } from "./NavItems";

function NavBar() {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <AppBar
        className="p-2 navbar-expand-lg"
        position="sticky"
        color="inherit"
      >
        <Container className="d-flex justify-content-between pr-2">
          <button className="navbar-toggler" onClick={handleDrawer}>
            <CgMenu />
          </button>
          <div class="collapse navbar-collapse">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                width="100"
                style={{ marginTop: "-0.4rem", marginRight: "0.4rem" }}
              />
            </Link>
            <NavItems display="nav" />
          </div>
          <div>
            <NavIcons />
          </div>
        </Container>
      </AppBar>
      <div
        className="d-lg-none "
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          minHeight: "3rem",
        }}
      >
        <Link to="/">
          <img src={logo} alt="Logo" width="100" height="20" className="mt-1" />
        </Link>
      </div>
      <Drawer anchor="left" open={open} onClose={handleClose}>
        <NavDrawer onClose={handleClose} />
      </Drawer>
    </>
  );
}

export default NavBar;

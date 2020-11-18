import React, { useState } from "react";

import "./navbar.css";
import NavDrawer from "./NavDrawer";
import logo from "../assets/logo.png";

import { AppBar, Container, Paper, Drawer } from "@material-ui/core";
import { Link } from "react-router-dom";

import { CgMenu } from "react-icons/cg";
import { NavItems, NavIcons } from "./NavItems";

function NavBar() {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(true);
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
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <NavDrawer />
      </Drawer>
    </>
  );
}

export default NavBar;

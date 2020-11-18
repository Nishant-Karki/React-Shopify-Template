import React from "react";

import { Container, makeStyles } from "@material-ui/core";
import { AiOutlineClose } from "react-icons/ai";
import { NavItems } from "./NavItems";

const useStyles = makeStyles({
  root: {
    width: 260,
    paddingTop: " 1rem",
  },
  navItem: { listStyle: "none", paddingLeft: "0" },
});

function NavDrawer() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <AiOutlineClose
        style={{
          fontSize: 14,
          marginRight: "0.3rem",
          marginTop: "-0.3rem",
        }}
      />
      Close
      <hr />
      <NavItems display={classes.navItem} />
    </Container>
  );
}

export default NavDrawer;

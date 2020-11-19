import { Grid, Paper, Container, Box, makeStyles } from "@material-ui/core";
import React from "react";

import first from "../../assets/img/boards-gif.gif";
import second from "../../assets/img/for-sale-gif.gif";
import third from "../../assets/img/men.jpg";
import fourth from "../../assets/img/accessories.jpg";

import fifth from "../../assets/img/men-skating.jpg";
import sixth from "../../assets/img/women-clothing-gif.gif";

const useStyles = makeStyles({
  firstRow: { padding: "0.8rem" },
});

const Content = ({ src, md = 3 }) => {
  const classes = useStyles();
  return (
    <Grid sm={6} md={md}>
      <Box className={classes.firstRow}>
        <img src={src} alt="category" width="100%" />
      </Box>
    </Grid>
  );
};

function Category() {
  return (
    <>
      <Grid container>
        <Content src={first} />
        <Content src={second} />
        <Content src={third} />
        <Content src={fourth} />
      </Grid>
      <Grid container>
        <Content src={fifth} md={6} />
        <Content src={sixth} md={6} />
      </Grid>
    </>
  );
}

export default Category;

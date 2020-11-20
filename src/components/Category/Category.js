import { Grid, Box, makeStyles } from "@material-ui/core";
import React from "react";

import first from "../../assets/img/boards-gif.gif";
import second from "../../assets/img/for-sale-gif.gif";
import third from "../../assets/img/men.jpg";
import fourth from "../../assets/img/accessories.jpg";

import fifth from "../../assets/img/men-skating.jpg";
import sixth from "../../assets/img/women-clothing-gif.gif";
import ButtonComponent from "../ButtonComponent";

const useStyles = makeStyles({
  firstRow: {
    padding: "0.8rem",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  image: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});

const Content = ({ src, md = 3, btnName }) => {
  const classes = useStyles();
  return (
    <Grid item sm={6} md={md}>
      <Box className={classes.firstRow}>
        <img src={src} alt="category" width="100%" className={classes.image} />
        <div
          style={{
            position: "absolute",
            marginBottom: "1.2%",
            padding: "1rem",
          }}
        >
          <ButtonComponent className={classes.btn}>{btnName}</ButtonComponent>
        </div>
      </Box>
    </Grid>
  );
};

function Category() {
  return (
    <>
      <Grid container>
        <Content src={first} btnName="BOARDS" />
        <Content src={second} btnName="SALE" />
        <Content src={third} btnName="MEN" />
        <Content src={fourth} btnName="ACCESSORIES" />
      </Grid>
      <Grid container>
        <Content src={fifth} md={6} btnName="MEN'S SNOWBOARD CLOTHING" />
        <Content src={sixth} md={6} btnName="WOMEN'S SNOWBOARD CLOTHING" />
      </Grid>
    </>
  );
}

export default Category;

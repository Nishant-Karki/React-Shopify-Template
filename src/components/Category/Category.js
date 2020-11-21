import { Grid, Box, makeStyles, Button } from "@material-ui/core";
import React from "react";

import first from "../../assets/img/boards-gif.gif";
import second from "../../assets/img/for-sale-gif.gif";
import third from "../../assets/img/men.jpg";
import fourth from "../../assets/img/accessories.jpg";

import fifth from "../../assets/img/men-skating.jpg";
import sixth from "../../assets/img/women-clothing-gif.gif";

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
  buttons: {
    color: "black",
    fontWeight: "bold",
    backgroundColor: "#fff",

    "&:hover": {
      color: "white",
      backgroundColor: "purple",
    },
  },
});

export const Content = ({ src, md = 3, btnName, btn = false }) => {
  const classes = useStyles();
  return (
    <Grid item sm={6} md={md}>
      <Box className={classes.firstRow}>
        <img src={src} alt="category" width="100%" className={classes.image} />
        {btn && (
          <div
            style={{
              position: "absolute",
              marginBottom: "1.2%",
              padding: "1rem",
            }}
          >
            <Button className={classes.buttons}>{btnName}</Button>
          </div>
        )}
      </Box>
    </Grid>
  );
};

function Category() {
  return (
    <>
      <Grid container>
        <Content src={first} btn={true} btnName="BOARDS" />
        <Content src={second} btn={true} btnName="SALE" />
        <Content src={third} btn={true} btnName="MEN" />
        <Content src={fourth} btn={true} btnName="ACCESSORIES" />
      </Grid>
      <Grid container>
        <Content
          src={fifth}
          md={6}
          btn={true}
          btnName="MEN'S SNOWBOARD CLOTHING"
        />
        <Content
          src={sixth}
          md={6}
          btn={true}
          btnName="WOMEN'S SNOWBOARD CLOTHING"
        />
      </Grid>
    </>
  );
}

export default Category;

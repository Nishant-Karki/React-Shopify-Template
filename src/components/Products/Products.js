import { Typography } from "@material-ui/core";
import React from "react";
import SliderComp from "./SliderComp";

function Products() {
  return (
    <div style={{ height: "100%", marginBottom: "2%" }}>
      <p
        style={{ textAlign: "center", fontWeight: "bold", paddingTop: "2rem" }}
      >
        <Typography variant="h4">OUR COLLECTION</Typography>
        <Typography variant="h6">Winter 2019</Typography>
      </p>
      <SliderComp />
    </div>
  );
}

export default Products;

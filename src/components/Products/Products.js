import React from "react";
import SliderComp from "./SliderComp";

function Products() {
  return (
    <div style={{ height: "100%" }}>
      <p
        style={{ textAlign: "center", fontWeight: "bold", paddingTop: "2rem" }}
      >
        <h1>OUR COLLECTION</h1>
        <h3>Winter 2019</h3>
      </p>
      <SliderComp />
    </div>
  );
}

export default Products;

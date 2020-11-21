import React from "react";
import { Content } from "../Category/Category";

import first from "../../assets/img/clearance-sale.jpg";
import second from "../../assets/img/snowboards.jpg";
import { Grid } from "@material-ui/core";

function Offers() {
  return (
    <Grid container>
      <Content src={first} md={6} btn={true} btnName="NEW SNOWBOARDS" />
      <Content src={second} md={6} btn={true} btnName="CLEARANCE SALE" />
    </Grid>
  );
}

export default Offers;

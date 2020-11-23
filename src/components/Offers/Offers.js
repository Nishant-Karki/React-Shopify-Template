import React from "react";
import { Content } from "../Category/Category";

import first from "../../assets/img/clearance-sale.jpg";
import second from "../../assets/img/snowboards.jpg";
import { Grid } from "@material-ui/core";

function Offers() {
  return (
    <Grid container>
      <Content
        src={second}
        md={6}
        box={true}
        boxName="NEW IN:"
        boxSubName="SNOWBOARDS"
      />
      <Content
        src={first}
        md={6}
        box={true}
        boxName="CLEARANCE SALES"
        boxSubName="GET UP TO 50% OFF"
      />
    </Grid>
  );
}

export default Offers;

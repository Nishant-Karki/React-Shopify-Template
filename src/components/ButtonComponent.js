import { Button } from "@material-ui/core";
import React from "react";
import "./buttons.scss";

function ButtonComponent(props) {
  return <Button className="button">{props.children}</Button>;
}

export default ButtonComponent;

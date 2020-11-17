import React from "react";
import NavBar from "./components/NavBar";
import "./app.css";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;

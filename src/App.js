import React from "react";
import NavBar from "./components/Navbar/NavBar";
import "./app.css";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter } from "react-router-dom";
import CarouselComp from "./components/Carousel/CarouselComp";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <CarouselComp />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

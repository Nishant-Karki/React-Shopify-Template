import React from "react";
import NavBar from "./components/Navbar/NavBar";
import "./app.scss";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter } from "react-router-dom";
import CarouselComp from "./components/Carousel/CarouselComp";
import Footer from "./components/Footer/Footer";
import Category from "./components/Category/Category";
import Offers from "./components/Offers/Offers";
import ParallaxComp from "./components/Parallax/ParallaxComp";
import SliderComp from "./components/Products/SliderComp";
import Products from "./components/Products/Products";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <CarouselComp />
      <Category />
      <Products />
      <ParallaxComp />
      <Products />
      <Offers />

      <Footer />
    </BrowserRouter>
  );
}

export default App;

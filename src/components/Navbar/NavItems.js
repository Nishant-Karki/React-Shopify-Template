import React from "react";
import "./navItem.css";

import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BiSlider } from "react-icons/bi";
import { GrFormNext } from "react-icons/gr";

const NavLink = ({ children, linkTo, icon = false }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={linkTo}>
        {children}
        {icon && (
          <span className="d-lg-none float-right">
            <GrFormNext />
          </span>
        )}
      </Link>
    </li>
  );
};

export const NavItems = ({ display }) => {
  return (
    <ul className={display}>
      <NavLink linkTo="/" icon="true">
        HOME
      </NavLink>
      <NavLink linkTo="/" icon="true">
        SHOP
      </NavLink>
      <NavLink linkTo="/" icon="true">
        PAGES
      </NavLink>
      <NavLink linkTo="/" icon="true">
        BLOG
      </NavLink>
      <NavLink linkTo="/" icon="true">
        PORTFOLIO
      </NavLink>
      <NavLink linkTo="/" icon="true">
        SNOWBOARDS
      </NavLink>
      <NavLink linkTo="/" icon="true">
        BUY THEME!
      </NavLink>
    </ul>
  );
};

export const NavIcons = () => {
  return (
    <ul className="nav">
      <NavLink linkTo="/">
        <BsSearch size={20} />
      </NavLink>
      <NavLink linkTo="/">
        <HiOutlineShoppingBag size={20} />
      </NavLink>
      <NavLink linkTo="/">
        <AiOutlineUser size={20} />
      </NavLink>
      <NavLink linkTo="/">
        <BiSlider size={20} />
      </NavLink>
    </ul>
  );
};

import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import Fire from "../assets/icons8-fire-48.png";
import Star from "../assets/icons8-star-100.png";
import Upcoming from "../assets/icons8-upcoming-64.png";
import Checkbox from "./Checkbox";

const Navbar = ({ setIsDarkMode, isDarkMode }) => {
  return (
    <div className="navbar">
      <h1>MovieManiac</h1>
      <div className="navbar_links">
        <Checkbox setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <NavLink to="/">
          Popular
          <img className="navbar_img" src={Fire} alt="" />
        </NavLink>
        <NavLink to="/top_rated">
          Top Rated
          <img className="navbar_img" src={Star} alt="" />
        </NavLink>
        <NavLink to="/upcoming">
          Upcoming
          <img className="navbar_img" src={Upcoming} alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

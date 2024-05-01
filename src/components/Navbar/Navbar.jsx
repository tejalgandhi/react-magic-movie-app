import React from "react";
import "./Navbar.css";
import fire from "../../assets/fire.jpeg";
import toprated from "../../assets/star.jpeg";
import upcoming from "../../assets/partying.jpeg";
import DarkMode from "../DarkMode/DarkMode.jsx";
import { Link, NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieManic</h1>
      <div className="navbar_links">
        <DarkMode />
        <NavLink to="/">
          Popular
          <img src={fire} alt="fire emoji" className="navbar_emoji"></img>
        </NavLink>
        <NavLink to="/top_rated">
          Top Rated
          <img
            src={toprated}
            alt="Top Rated emoji"
            className="navbar_emoji"
          ></img>
        </NavLink>
        <NavLink to="/upcoming">
          Upcoming
          <img
            src={upcoming}
            alt="Upcoming emoji"
            className="navbar_emoji"
          ></img>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

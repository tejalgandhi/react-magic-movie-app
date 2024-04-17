import React from "react";
import "./Navbar.css";
import fire from "../../assets/fire.jpeg";
import toprated from "../../assets/star.jpeg";
import upcoming from "../../assets/partying.jpeg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieManic</h1>
      <div className="navbar_links">
        <a href="">
          Popular
          <img src={fire} alt="fire emoji" className="navbar_emoji"></img>
        </a>
        <a href="">
          Top Rated
          <img
            src={toprated}
            alt="Top Rated emoji"
            className="navbar_emoji"
          ></img>
        </a>
        <a href="">
          Upcoming
          <img
            src={upcoming}
            alt="Upcoming emoji"
            className="navbar_emoji"
          ></img>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";

import "./DarkMode.css";
import SunIcon from "./Sun.svg?react";
import MoonIcon from "./Moon.svg?react";

const DarkMode = () => {
  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "light") {
    setLightTheme();
  } else {
    setDarkTheme();
  }

  const setTheme = (e) => {
    if (e.target.checked) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={setTheme}
        defaultChecked={selectedTheme != "light"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <SunIcon />
        <MoonIcon />
      </label>
    </div>
  );
};

export default DarkMode;

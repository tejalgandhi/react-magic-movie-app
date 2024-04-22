import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MovieList></MovieList>
      <div className="background"></div>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import "./App.css";
import fire from "../src/assets/fire.jpeg";
import star from "../src/assets/star.jpeg";
import party from "../src/assets/partying.jpeg";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MovieList title="Popular" type="popular" emoji={fire}></MovieList>
      <MovieList title="Top Rated" type="top_rated" emoji={star}></MovieList>
      <MovieList title="Upcoming" type="upcoming" emoji={party}></MovieList>
      <div className="background"></div>
    </div>
  );
};

export default App;

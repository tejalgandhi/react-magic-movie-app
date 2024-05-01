import React from "react";
import { Route, Routes } from "react-router-dom";
import fire from "../../assets/fire.jpeg";
import star from "../../assets/star.jpeg";
import party from "../../assets/partying.jpeg";
import MovieList from "../MovieList/MovieList";

const AllRouting = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MovieList title="Popular" type="popular" emoji={fire}></MovieList>
        }
      ></Route>
      <Route
        path="/top_rated"
        element={
          <MovieList
            title="Top Rated"
            type="top_rated"
            emoji={star}
          ></MovieList>
        }
      ></Route>
      <Route
        path="/upcoming"
        element={
          <MovieList title="Upcoming" type="upcoming" emoji={party}></MovieList>
        }
      ></Route>
    </Routes>
  );
};

export default AllRouting;

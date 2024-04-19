import React from "react";

import "./MovieList.css";
import fire from "../../assets/fire.jpeg";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";
import { useEffect } from "react";
import { useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);

  useEffect(() => {
    fectMovies();
  }, []);

  const fectMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=0c5847d6e3513bbbb2e7dc9ba85c4889"
    );
    const data = await response.json();
    setMovies(data.results);
    setFilterMovies(data.results);
  };

  const handleFilter = (rate) => {
    if (minRating === rate) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);
      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      console.log(filtered);
      setFilterMovies(filtered);
    }
  };

  return (
    <section className="movie_list">
      {/* Header section */}
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          <a href="">
            Popular
            <img src={fire} alt="fire emoji" className="movie_list_emoji"></img>
          </a>
        </h2>
        <div className="align_center movie_list_fs">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />

          <select name="" id="" className="movie_sorting">
            <option value="">SortBY</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select name="" id="" className="movie_sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {filterMovies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
      {/* List section */}
    </section>
  );
};

export default MovieList;

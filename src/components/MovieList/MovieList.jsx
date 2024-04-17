import React from "react";

import "./MovieList.css";
import fire from "../../assets/fire.jpeg";
import MovieCard from "./MovieCard";

const MovieList = () => {
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
          <ul className="align_center movie_filter">
            <li className="movie_filter_item active">8+ Star</li>
            <li className="movie_filter_item">7+ Star</li>
            <li className="movie_filter_item">6+ Star</li>
          </ul>

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
        <MovieCard />
      </div>
      {/* List section */}
    </section>
  );
};

export default MovieList;

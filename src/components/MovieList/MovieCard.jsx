import React from "react";
import "./MovieCard.css";
import moviePoster from "../../assets/poster.jpeg";
import star from "../../assets/star.jpeg";

const MovieCard = ({ movie }) => {
  return (
    <a
      href={`https://www.themoviedb.org/movie/${movie.id}`}
      target="_blank"
      className="movie_card"
    >
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt="Movie Poster"
        className="movie_poster"
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">{movie.title}</h3>
        <div className="align_center movie_date_rate">
          <p>{movie.release_date}</p>
          <p>
            {movie.vote_average}{" "}
            <img src={star} alt="star" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">
          {movie.overview.slice(0, 100) + "..."}
        </p>
      </div>
    </a>
  );
};

export default MovieCard;

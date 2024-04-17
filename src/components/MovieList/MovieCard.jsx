import React from "react";
import "./MovieCard.css";
import moviePoster from "../../assets/poster.jpeg";
import star from "../../assets/star.jpeg";

const MovieCard = () => {
  return (
    <a href="" className="movie_card">
      <img src={moviePoster} alt="Movie Poster" className="movie_poster" />
      <div className="movie_details">
        <h3 className="movie_details_heading">Movie Name</h3>
        <div className="align_center movie_date_rate">
          <p>10-04-2024</p>
          <p>
            8 <img src={star} alt="star" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
          laudantium id qui similique quasi? Sed.
        </p>
      </div>
    </a>
  );
};

export default MovieCard;

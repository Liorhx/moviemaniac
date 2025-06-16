import React from "react";
import "./MovieCard.css";
import Star from "../assets/icons8-christmas-star-48.png";
const MovieCard = ({ movie }) => {
  return (
    <a
      href={`https://www.themoviedb.org/movie/${movie.id}`}
      className="movies_card"
    >
      <img
        className="movie_poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt=""
      />
      <div className="movie_details">
        <h3 className="movie_details_heading align-center">
          {movie.original_title}
        </h3>
        <div className=" movie_date_rating">
          <p>{movie.release_date}</p>

          <p>
            {movie.vote_average}{" "}
            <img src={Star} alt="" className="movie_emojis" />
          </p>
        </div>
        <p className="movie_description">
          {movie.overview.split(" ").splice(0, 10).join(" ") + " ..."}
        </p>
      </div>
    </a>
  );
};

export default MovieCard;

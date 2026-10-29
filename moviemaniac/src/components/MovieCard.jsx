import React, { useState } from "react";
import "./MovieCard.css";
import { Play, Star } from "lucide-react";

const FALLBACK_POSTER =
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=60";

const MovieCard = ({ movie, onPlay }) => {
  const [imgSrc, setImgSrc] = useState(
    movie.poster_path
      ? movie.poster_path.startsWith("http")
        ? movie.poster_path
        : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : FALLBACK_POSTER
  );

  const displayRating =
    movie.display_rating || (movie.vote_average ? (movie.vote_average / 2).toFixed(1) : "4.8");
  const starCount = movie.stars || Math.min(5, Math.max(1, Math.round(Number(displayRating))));
  const genres = movie.genres_text || "Cinema / Feature";

  const handleCardClick = (e) => {
    // If user clicked the play button, let play handler handle it
    if (e.target.closest(".play_button")) return;
    if (onPlay) {
      onPlay(movie);
    }
  };

  const handlePlayClick = (e) => {
    e.stopPropagation();
    if (onPlay) {
      onPlay(movie);
    } else {
      window.open(
        movie.trailer_url || `https://www.themoviedb.org/movie/${movie.id}`,
        "_blank"
      );
    }
  };

  return (
    <div className="movie_card" onClick={handleCardClick} role="button" tabIndex={0}>
      <div className="poster_container">
        <img
          className="movie_poster"
          src={imgSrc}
          alt={movie.title || movie.original_title}
          loading="lazy"
          onError={() => setImgSrc(FALLBACK_POSTER)}
        />
        {/* Floating Rating Badge on Top Right */}
        <div className="rating_badge">
          <Star size={13} fill="#f59e0b" color="#f59e0b" className="badge_star" />
          <span>{displayRating}</span>
        </div>
      </div>

      <div className="movie_info">
        <h3 className="movie_title" title={movie.title || movie.original_title}>
          {(movie.title || movie.original_title || "UNTITLED").toUpperCase()}
        </h3>

        {/* 5-star visual rating */}
        <div className="star_row">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={13}
              fill={star <= starCount ? "#f59e0b" : "none"}
              color="#f59e0b"
              className="star_icon"
            />
          ))}
        </div>

        {/* Bottom row: Genre and Play button */}
        <div className="movie_footer">
          <span className="movie_genre" title={genres}>
            {genres}
          </span>
          <button
            type="button"
            className="play_button"
            onClick={handlePlayClick}
            aria-label={`Play trailer for ${movie.title}`}
          >
            <Play size={14} fill="#ffffff" color="#ffffff" className="play_icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

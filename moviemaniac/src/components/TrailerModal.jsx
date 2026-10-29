import React, { useEffect } from "react";
import "./TrailerModal.css";
import { X, Play, Star, Calendar, Film, ExternalLink } from "lucide-react";

const TrailerModal = ({ movie, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!movie) return null;

  const backdrop = movie.backdrop_path
    ? movie.backdrop_path.startsWith("http")
      ? movie.backdrop_path
      : `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
    : movie.poster_path
    ? movie.poster_path.startsWith("http")
      ? movie.poster_path
      : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?w=1200&auto=format&fit=crop&q=80";

  const youtubeUrl =
    movie.trailer_url ||
    `https://www.youtube.com/results?search_query=${encodeURIComponent(
      (movie.title || movie.original_title) + " official trailer"
    )}`;

  return (
    <div className="modal_backdrop" onClick={onClose}>
      <div
        className="modal_container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button className="modal_close_btn" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <div
          className="modal_hero"
          style={{ backgroundImage: `url(${backdrop})` }}
        >
          <div className="modal_hero_overlay" />
          <div className="modal_hero_content">
            <span className="modal_pill">{movie.genres_text || "Movie"}</span>
            <h2 className="modal_title">{movie.title || movie.original_title}</h2>
            <div className="modal_meta_row">
              <span className="modal_meta_item">
                <Star size={14} fill="#f59e0b" color="#f59e0b" />
                <strong>{movie.display_rating || movie.vote_average || "4.8"}</strong> / 5
              </span>
              <span className="modal_meta_item">
                <Calendar size={14} />
                {movie.release_date || "2024"}
              </span>
            </div>
          </div>
        </div>

        <div className="modal_body">
          <p className="modal_overview">
            {movie.overview ||
              "No detailed synopsis available. Enjoy this blockbuster movie experience on MovieManiac!"}
          </p>

          <div className="modal_actions">
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal_btn modal_btn_primary"
            >
              <Play size={16} fill="#ffffff" />
              Watch Trailer
            </a>
            <a
              href={`https://www.themoviedb.org/movie/${movie.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="modal_btn modal_btn_secondary"
            >
              <ExternalLink size={16} />
              TMDB Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerModal;


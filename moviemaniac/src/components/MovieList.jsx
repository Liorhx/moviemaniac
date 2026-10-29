import React, { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import "./MovieList.css";
import MovieCard from "./MovieCard";
import TrailerModal from "./TrailerModal";
import { getMovies, searchMovies, CURATED_MOVIES } from "../services/movieService";
import { Flame, Star, Sparkles, Trophy, SlidersHorizontal, ArrowUpDown, Info } from "lucide-react";

const CATEGORIES = [
  { id: "trending", label: "Trending", icon: Flame, title: "Trending Now" },
  { id: "popular", label: "Popular", icon: Flame, title: "Popular Movies" },
  { id: "upcoming", label: "Upcoming", icon: Sparkles, title: "Upcoming Releases" },
  { id: "top_rated", label: "Highest Rated", icon: Trophy, title: "Top Rated Blockbusters" },
];

const MovieList = ({ type = "popular", title = "Trending Now", searchQuery = "" }) => {
  const [currentCategory, setCurrentCategory] = useState(type);
  const [movies, setMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "desc",
  });
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  const [activeModalMovie, setActiveModalMovie] = useState(null);

  // Sync if route prop changes
  useEffect(() => {
    if (type) {
      const normalized = type === "top_rated" ? "top_rated" : type;
      setCurrentCategory(normalized);
    }
  }, [type]);

  // Load movies whenever category changes
  useEffect(() => {
    let isMounted = true;
    const fetchCategoryMovies = async () => {
      setLoading(true);
      try {
        const result = await getMovies(currentCategory);
        if (isMounted) {
          setMovies(result.movies || []);
          setIsFallback(Boolean(result.isFallback));
        }
      } catch (err) {
        if (isMounted) {
          console.error("Error loading movies:", err);
          const fallback =
            CURATED_MOVIES[currentCategory] || CURATED_MOVIES.popular;
          setMovies(fallback);
          setIsFallback(true);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchCategoryMovies();
    return () => {
      isMounted = false;
    };
  }, [currentCategory]);

  // Category switch
  const handleCategoryChange = (categoryId) => {
    setCurrentCategory(categoryId);
    setMinRating(0);
  };

  // Star rating filter
  const handleFilter = (rating) => {
    setMinRating((prev) => (prev === rating ? 0 : rating));
  };

  // Sorting
  const handleSortChange = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  // Secondary "Top Rated" list for the dual-row display matching the screenshot
  const secondaryMovies = useMemo(() => {
    if (currentCategory === "top_rated") {
      return CURATED_MOVIES.popular.slice(0, 6);
    }
    return CURATED_MOVIES.top_rated.slice(0, 6);
  }, [currentCategory]);

  // Filter and sort movies computed
  const displayedMovies = useMemo(() => {
    let result = [...movies];

    // Search query filter
    if (searchQuery && searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (m) =>
          (m.title && m.title.toLowerCase().includes(q)) ||
          (m.original_title && m.original_title.toLowerCase().includes(q)) ||
          (m.genres_text && m.genres_text.toLowerCase().includes(q)) ||
          (m.overview && m.overview.toLowerCase().includes(q))
      );
    }

    // Star rating filter (scale 0-10)
    if (minRating > 0) {
      result = result.filter(
        (m) => (m.vote_average || Number(m.display_rating) * 2) >= minRating
      );
    }

    // Sort
    if (sort.by !== "default") {
      result = _.orderBy(result, [sort.by], [sort.order]);
    }

    return result;
  }, [movies, searchQuery, minRating, sort]);

  const activeCategoryObj =
    CATEGORIES.find((c) => c.id === currentCategory) || CATEGORIES[0];

  return (
    <section className="movielist_page">
      {/* Category Pills Navigation (Matching Reference Screenshot) */}
      <div className="category_pills_container">
        <div className="category_pills_scroll">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = currentCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`category_pill_btn ${isActive ? "active" : ""}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                <Icon size={15} className="pill_icon" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>



      {/* Main Section Header & Controls */}
      <div className="section_header_row">
        <div className="section_title_wrapper">
          <h2 className="section_heading">
            {searchQuery
              ? `Results for "${searchQuery}"`
              : activeCategoryObj.title}
          </h2>
          <span className="movie_count_badge">{displayedMovies.length} movies</span>
        </div>

        {/* Filter and Sort Controls */}
        <div className="controls_group">
          {/* Rating filter pills */}
          <div className="rating_filter_pills">
            <button
              type="button"
              className={`rating_btn ${minRating === 0 ? "active" : ""}`}
              onClick={() => handleFilter(0)}
            >
              All
            </button>
            {[8, 7, 6].map((rate) => (
              <button
                key={rate}
                type="button"
                className={`rating_btn ${minRating === rate ? "active" : ""}`}
                onClick={() => handleFilter(rate)}
              >
                <Star size={12} fill="#f59e0b" color="#f59e0b" />
                {rate}+ Star
              </button>
            ))}
          </div>

          {/* Sort selectors */}
          <div className="sort_selectors_wrapper">
            <div className="custom_select_wrapper">
              <SlidersHorizontal size={14} className="select_icon" />
              <select
                name="by"
                className="custom_select"
                onChange={handleSortChange}
                value={sort.by}
                aria-label="Sort by field"
              >
                <option value="default">Sort By</option>
                <option value="release_date">Release Date</option>
                <option value="vote_average">Highest Rating</option>
                <option value="title">Title (A-Z)</option>
              </select>
            </div>

            <div className="custom_select_wrapper">
              <ArrowUpDown size={14} className="select_icon" />
              <select
                name="order"
                className="custom_select"
                onChange={handleSortChange}
                value={sort.order}
                aria-label="Sort order"
              >
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Cards Grid */}
      {loading ? (
        <div className="movie_cards_grid">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="movie_card_skeleton" />
          ))}
        </div>
      ) : displayedMovies.length === 0 ? (
        <div className="no_results_box">
          <p>No movies found matching your current filter criteria.</p>
          <button
            type="button"
            className="clear_filter_btn"
            onClick={() => {
              setMinRating(0);
              setSort({ by: "default", order: "desc" });
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="movie_cards_grid">
          {displayedMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onPlay={setActiveModalMovie}
            />
          ))}
        </div>
      )}

      {/* Secondary Row (Matching Reference Screenshot: "Top Rated This Week") */}
      {!searchQuery && (
        <div className="secondary_section">
          <div className="section_title_wrapper">
            <h2 className="section_heading">
              {currentCategory === "top_rated"
                ? "Popular This Week"
                : "Top Rated This Week"}
            </h2>
          </div>
          <div className="movie_cards_grid">
            {secondaryMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onPlay={setActiveModalMovie}
              />
            ))}
          </div>
        </div>
      )}

      {/* Interactive Trailer Modal */}
      {activeModalMovie && (
        <TrailerModal
          movie={activeModalMovie}
          onClose={() => setActiveModalMovie(null)}
        />
      )}
    </section>
  );
};

export default MovieList;
